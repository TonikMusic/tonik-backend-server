const validator = require("validator");
const Artist = require('../models/artist');
const Fan = require('../models/fans');
const jwt = require('jsonwebtoken');


const checkPassword = (password) => {
    const validatePassword = validator.isAlphanumeric(password)
    if(validatePassword == false || password.length < 10){
        return false
    }
    return true

}
const validateSignupInput = (fullname, dob, email, userName, password) => {   
    // checkUserName = validator.isAlphanumeric(userName)
    const checkFullname = validator.isAlpha(validator.blacklist(fullname, ' '));
    const checkEmail = validator.isEmail(email);
    const checkDob = validator.isAlphanumeric(validator.blacklist(dob, ' '));

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

const validateLogin = (email, password) => {
   validatePassword = checkPassword(password);
   validateEmail = validator.isEmail(email);

   if(checkPassword == false|| validateEmail == false){
       return false
   }
   return true
    
}


async function findUser (email,  artist){

    if(artist == true){
       findArtist = await Artist.findOne({email: email});
       if(findArtist == null){return false}
       return findArtist
}else{
    findFan = await Fan.findOne({email:email});
    if(findFan == null){return false}
    return findFan
}
}

const verifyToken = (token) => {
    jwt.verify(token, process.env.SECRECT, (err) => {
        if(err){
            console.error("ERROR VERIFYING TOKEN", err);
            return false;
        }
        return true;
    });



}




module.exports = {validateSignupInput, createArtistAccount, createFanAccount,validateLogin,findUser, verifyToken}

