const auth = require('../resource/auth')
const  bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const request = require('request');


module.exports = app => {

    app.post('/api/v0/auth/user/signup', async(req, res) => {
        body = [req.body.fullName, req.body.email, req.body.dob,req.body.userName, req.body.password, req.body.artist];
        console.log("---BODY---",body);
        if(auth.validateSignupInput(body[0],body[2], body[1], body[4]) == false){
            res.status(422).send({
                'message': 'invalid input'
            })
        }
        else{
            const hash = await bcrypt.hash(body[4], 10);
            if(body[5]){
              saveArtist = await  auth.createArtistAccount(body[0],body[2], body[1],body[3],hash);
              token = jwt.sign({_id: saveArtist._id}, process.env.SECRECT, {expiresIn: "15 hr"});
              res.json({'token':token}).status(200)
                
            }else{
                saveFan = await auth.createFanAccount(body[0],body[2], body[1],body[3],hash);
                token = jwt.sign({_id: saveFan._id},process.env.SECRECT,{expiresIn: "15 hr"});
                res.json({'token':token}).status(200);
}}});


    app.post("/api/v0/auth/user/login", async(req, res) => {
        body = [req.body.email,req.body.password, req.body.artist];
        user = await auth.findUser(body[0], body[2]);
        if(user == false|| auth.validateLogin(body[0], body[1]) == false){
            res.status(412).send({"message": "invalid input"})
        }else{
            bcrypt.compare(body[1], user.password, async (err, result) => {
                if(err || !result){
                    res.status(422).send({'message': "wrong password"});
                }else{
                    token = jwt.sign({_id: user._id},process.env.SECRECT,{expiresIn: "15 hr"});
                    if(body[2]){
                        try{
                            const url = `https://tonik-server-test.herokuapp.com/api/v0/${user._id}/profile`
                            await request({headers:{'x-authorization': token},uri: url,method:'GET'}, function(error, response,body){

                                const jsonParse = JSON.parse(body);
                                delete jsonParse['password']
                                res.json(jsonParse);
                        
                            });
                        }catch(error){
                            console.error("ERROR GETING:", error);
                            res.status(500).send({
                                        'message': 'server error with login'
                                    });


                        }}else{
                        try{
                            
                            const url = `https://tonik-server-test.herokuapp.com/api/v0/view/${user._id}/profile`
                            await request({headers:{'x-authorization': token},uri: url,method:'GET'}, function(error, response, body){

                                const jsonParse = JSON.parse(body);
                                delete jsonParse['password']
                                res.json(jsonParse);

                            })

                        }catch(error){
                            console.error("ERROR GETING:", error);
                            res.status(500).send({
                                        'message': 'server error with login'
                                    });

                        }}
                    }
            })

        }
 

    })

}

