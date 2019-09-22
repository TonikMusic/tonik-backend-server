const mongoose = require("mongoose");
const Schema = mongoose.Schema;

AblumSchema = new Schema({
    title: {
        type: String, 
        required: true
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

    songs:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "songs"

    }],

    coverArt: {
        type: String, 
        default: null
    }
        

})

module.exports = mongoose.model("Album", AlbumSchema);