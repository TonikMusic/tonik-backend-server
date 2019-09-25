const Artist = require('../models/artist');
const request = require('request');


async function getArtistProfile(userId){
  result = await Artist.findById({_id: userId}).populate('following')
    .populate('followers')
    .populate('supporters')
    .populate('donators').then((result) => {
        return result
    }).catch((error) => {
        console.error("ERROR FINDING ARTIST PROFILE:", error);
        return false
    })
 }

 async function reqArtistProfile(url, token){
    await request({headers:{'x-authorization': token},uri: url,method:'GET'}, function(err, res, body){
        if(err){
            console.error('ERROR  REQUETING ARTIST PROFILE:',err);
            return false
        }
        console.log("---BODY---",body);
        return body

    });

 }

 module.exports = {getArtistProfile, reqArtistProfile}