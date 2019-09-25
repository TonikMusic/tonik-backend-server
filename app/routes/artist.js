const auth = require('../resource/auth')
const artist = require('..//resource/artist');



module.exports = app => {

    app.get('/api/v0/:artist/profile', async(req, res) => {
        const header = JSON.stringify(req.headers);
        console.log("---header---", header);
        const token = header['Authorization'];
        console.log("----TOKEN----", token)
        const userID = req.params.artist;
        const checkToken = auth.verifyToken(token);
        if(checkToken == false){
            res.status(406).send({
                'message': 'invalid token'
            });
        }else{
            resp = artist.getArtistProfile(userID);
            resp['password'] = null
            if(resp == false){
                res.status(412).send({'message': 'invalid input'});
            }
            res.json(resp)
        }

    });
} 