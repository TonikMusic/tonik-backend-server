const auth = require('../resource/auth')
const Artist = require('../models/artist');

module.exports = app => {

    app.get('/api/v0/:artist/profile', async(req, res) => {
        const { headers } = req;
        const token = headers['x-authorization'];
        const userID = req.params.artist;
        const checkToken = auth.verifyToken(token);
        if(!checkToken){
            res.status(406).send({
                'message': 'invalid token'
            });
        }else{
            result = await Artist.findById({_id: userID })
            .populate('following')
            .populate('followers')
            .populate('supporters')
            .populate('donators')
            
            if(result == null){
                res.status(412).send({'message': 'invalid input'});

            }else{
               delete result['password'];
                res.json(result);
            }
        }

    });
} 