const validator = require("validator");
const Artist = require('../models/artist');
const Fan = require('../models/fans');


const checkPassword = (password) => {
    const validatePassword = validator.isAlphanumeric(password)
    if(validatePassword == false || password.length < 10){
        return false
    }
    return true

}
const validateSignupInput = (fullname, dob, email, userName, password) => {   
    // checkUserName = validator.isAlphanumeric(userName)
    console.log("****validate params***",fullname, dob, email, userName, password)
    const checkFullname = validator.isAlpha(validator.blacklist(fullname, ' '));
    const checkEmail = validator.isEmail(email);
    const checkDob = validator.isAlphanumeric(validator.blacklist(dob, ' '));

        
    console.log("***What's False***",checkFullname,checkEmail,checkDob,checkPassword(password))

    if(checkFullname == false || checkEmail == false || checkPassword(password) == false ||checkDob == false){
        return false 
    }else{
        return true 
    }
}

async function createArtistAccount(fullname, dob, email, userName,password){
    try {
        //create new artist bluprint
        newArtist = new Artist({
            fullName:fullname,
            dob:dob,
            email:email,
            userName:userName,
            password: password
        });
    //save artist to db
    saveArtitst = await newArtist.save();
    return saveArtitst
        
    } catch (error) {
        throw new Error("ERROR CREATING USER ACCOUNT",error)
}

}


async function createFanAccount(fullname, dob, email, userName,password){ 
    try {
        newFan = new Fan({
            fullName:fullname,
            dob:dob,
            email:email,
            userName:userName,
            password: password

        });

        saveNewFan = await newFan.save()

        return saveNewFan
        
        
    } catch (error) {
        throw new Error("ERROR CREATING FAN ACCOUNT", error)
        
    }
}

module.exports = {validateSignupInput, createArtistAccount, createFanAccount}

