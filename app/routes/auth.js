const auth = require('../resource/auth')
const  bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
module.exports = app => {

    app.post('/api/v0/auth/user/signup', async(req, res) => {
        body = [req.body.fullName, req.body.email, req.body.dob,req.body.userName, req.body.socialMedia, req.body.password];
        if(auth.validateSignupInput(body[0],body[2], body[1],body[3], body[4], body[5]) == false){
            res.json({
                success: false,
                message: 'Invalid input'
              }).status(422)
        }else{
            const hash = await bcrypt.hash(body[5], 10);
            if(req.body.artist == true){
              saveArtist = await  auth.createArtistAccount(body[0],body[2], body[1],body[3], body[4], hash);
              token = jwt.sign({_id: saveArtist._id}, process.env.SECRECT,{expiresIn: "5 days"});
              res.json(token).status(200)
                
            }else{
                saveFan = await auth.createFanAccount(body[0],body[2], body[1],body[3], body[4], hash)
                token = jwt.sign({_id: saveFan._id}, process.env.SECRECT,{expiresIn: "5 days"});
                res.json(token).status(200)


            }


        }

    });


    app.post("api/v0/auth/user/login", async(req, res) => {
        //check user input 
    })

}

