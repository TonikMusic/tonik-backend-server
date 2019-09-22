const mongoose = require("mongoose");
const Schema = mongoose.Schema;


PostSchema = new Schema({
    title: {
        type: String, 
        required: true, 

    },

    dateCreated:{
        type: Date,
        default: Date.now
    },

    description: {
        type:String, 
        required: true
    },

    likedBy:[{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Fans' 

    }]
})

module.exports = mongoose.model("Post", PostSchema);