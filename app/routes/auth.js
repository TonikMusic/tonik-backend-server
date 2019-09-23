const auth = require('../resource/auth')
const  bcrypt = require('bcryptjs');
const validator = require("validator");
const jwt = require('jsonwebtoken');
module.exports = app => {

    app.post('/api/v0/auth/user/signup', async(req, res) => {
        body = [req.body.fullName, req.body.email, req.body.dob,req.body.userName, req.body.password];
        console.log("***BODY***", body);
       if(auth.validateSignupInput(body[0],body[2], body[1],body[3], body[4]) == false){
            console.log("***CALLING VALIDATE FUNCTION****"); 
            console.log("INPUT",auth.validateSignupInput(body[0],body[2], body[1],body[3], body[4]))
            res.status(422).send({
                'message': 'invalid input'
            })
        }
        else{
            console.log("****VALIDATE NOT HIT****")
            const hash = await bcrypt.hash(body[4], 10);
            if(req.body.artist == true){
              saveArtist = await  auth.createArtistAccount(body[0],body[2], body[1],body[3], body[4], hash);
              token = jwt.sign({_id: saveArtist._id}, process.env.SECRECT,{expiresIn: "15 hr"});
              res.json(token).status(200)
                
            }else{
                saveFan = await auth.createFanAccount(body[0],body[2], body[1],body[3], body[4], hash)
                token = jwt.sign({_id: saveFan._id}, process.env.SECRECT,{expiresIn: "15 hr"});
                res.json(token).status(200)


            }


        }

    });


    app.post("api/v0/auth/user/login", async(req, res) => {
        //check user input 
    })

}

