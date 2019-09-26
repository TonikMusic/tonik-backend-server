const fan = require('..//models/fans');
const auth = require('..//resource/auth');

module.exports = app => {

    app.get('/api/v0/view/:fan/profile', async (req,res) => {
        const { headers } = req;
        const token = headers['x-authorization'];
        const checkToken = auth.verifyToken(token);
        console.log("---CHECK---", checkToken);
        const userID = req.params.fan;
        if(!checkToken){
            res.status(406).send({
                'message': 'invalid token'
            });
        }else{
           const result =  await fan.findById({_id:userID})
           .populate('artistSupporte')
           .populate('following')
           .populate('likedSongs')
           .populate('likedAlbum')

           if(result == null){
            res.status(412).send({'message': 'invalid input'});

        }else{
            delete result['password'];
            res.json(result)
        }
}})}