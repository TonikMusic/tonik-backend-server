const mongoose = require("mongoose");
const Schema = mongoose.Schema;

FanSchema = new Schema({

    fullName: {
        type: String,
        required: true, 
        
    }, 

    userName:{
        type: String, 
        required: true, 
        unique: true
    },
    dateJoined:{
        type: Date,
        default: Date.now
    },
    dob:{
        type: String,
        required: true, 
},
email:{
    type: String, 
    required: true,
    unique: true

}, 
dateJoined:{
    type: Date,
    default: Date.now
},

password:{
    type: String, 
    required: true
},

artistSupported: [{type: mongoose.Schema.Types.ObjectId, ref: 'Artist' }],


following: [{type:mongoose.Schema.Types.ObjectId, ref: 'Artist' }], 

likedSongs:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Song'
}], 

likedAlbum: [{
    type:mongoose.Schema.Types.ObjectId, 
    ref: 'Album'

}]
})



module.exports = mongoose.model("Fan", FanSchema);