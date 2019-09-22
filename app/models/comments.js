const mongoose = require("mongoose");
const Schema = mongoose.Schema;


commentSchema = new Schema({
    description: {
        type:String, 
        required: true
    },

    dateCreated:{
        type: Date,
        default: Date.now
    },

    //add creeated by 
})

module.exports = mongoose.model("comment", commentSchema);