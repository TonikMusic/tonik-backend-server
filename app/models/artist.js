const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Fans = require('./fans');
ArtistSchema = new Schema({
    artistId: mongoose.Schema.Types.ObjectId,
    
    fullName: {
        type: String,
        required: true, 
        
    }, 
    
    dob:{
        type: String,
        required: true, 
}, 

    genre:{
        type: String, 
        default: null
    }, 

    email:{
        type: String, 
        required: true,
        unique: true

    },

    password:{
        type: String, 
        required: true
    },
    
    artistHandle:{
        type:String, 
        required:true,
        unique: true
    },

    dateJoined:{
        type: Date,
        default: Date.now
    },

    followingCount:{
        type: Number,
        default: 0
    },

    followerCount:{
        type: Number,
        default: 0
    },

    donationsTotal:{
        type: Number,
        default: 0

    },

    donators: [{type:mongoose.Schema.Types.ObjectId, ref: 'Fans' }],

    socialMedia:[String],

    supporters: [{type:mongoose.Schema.Types.ObjectId, ref: 'Fans' }],

    following: [{type:mongoose.Schema.Types.ObjectId, ref: 'Fans' }], 
    foloowers: [{type:mongoose.Schema.Types.ObjectId, ref: 'Fans' }], 








})

module.exports = mongoose.model("Artist", ArtistSchema);