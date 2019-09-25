const auth = require('../resource/auth')
const artist = require('..//resource/artist');
const Artist = require('../models/artist');



module.exports = app => {

    app.get('/api/v0/:artist/profile', async(req, res) => {
        const { headers } = req;
        const token = headers['x-authorization'];
        const userID = req.params.artist;
        const checkToken = auth.verifyToken(token);
        if(checkToken == false){
            res.status(406).send({
                'message': 'invalid token'
            });
        }else{
            // resp = await artist.getArtistProfile(userID);
            // console.log("---RESP---", resp);
            // resp['password'] = null
            // if(resp == false){
            //     res.status(412).send({'message': 'invalid input'});
            // }
            // // console.log("---RESP---", resp);
            // res.json({resp}).status(200);



        result = await Artist.findById({_id: userID }).populate('following')
            .populate('followers')
            .populate('supporters')
            .populate('donators')
            
            if(result == null){
                res.status(412).send({'message': 'invalid input'});

            }else{
                res.json(result)
            }
        }

    });
} 