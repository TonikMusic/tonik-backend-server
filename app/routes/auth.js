const artist = require('..//resource/artist')

module.exports = app => {

    app.post('/api/v0/auth/user/signup', async(req, res) => {
        //check if user is artist by asking client to send true if artist
        //validate user email and password before saving
        //create helper functions/class
        body = [req.body.fullName, req.body.email, req.body.dob,req.body.artistHandle, req.body.socialMedia];
        if(artist.validate(body[0],body[2], body[1],body[3], body[4]) == false){
            res.status(422).send()
        }

    });

}

