const mongoose = require("mongoose");
const Schema = mongoose.Schema;


SongSchema = new Schema({
    title:{
        type:String, 
        required: true, 
    },
    s3Url:{
        type:String, 
        required: true, 

    },

    releaseDate:{
        type: Date,
        default: Date.now
    },

    length:{
        type: String, 
        default: null
    },

    producedBy: {
        type: [String], 
        default: null 
    },
    
    featuring: {
        type:[String], 
        default: null
    },




});

module.exports = mongoose.model("Song", SongSchema);