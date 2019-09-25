const Artist = require('../models/artist');


async function getArtistProfile(userId){
 Artist.findById({_id: userId}).populate('following')
    .populate('followers')
    .populate('supporters')
    .populate('donators')
    .exec((error, result) =>{
        if(error){
            console.error("ERROR FINDING ARTIST", error);
            return false;
        }
        return result
    })
 }

 module.exports = {getArtistProfile}