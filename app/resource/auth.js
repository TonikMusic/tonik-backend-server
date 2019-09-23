const validator = require("validator");
const Artist = require('../models/artist');
const Fan = require('../models/fans');

const validateSignupInput = (fullname, dob, email, userName,socialMediaUrls=null, password) => {   
    checkFullname = validator.isAlpha(fullname)
    checkEmail = validator.isEmail(email)
    checkUserName = validator.isAlphanumeric(userName)
    checkPassword = validator.isAlphanumeric(password)
    
    //validate social media url is url
    if(socialMediaUrls !== null){
        for (socialMediaUrl in socialMediaUrls){
            checkSocialMedia = validator.isURL(socialMediaUrl)
            if(checkSocialMedia == false){
                return false;
            }
}
    
} 
    //check if user is over 13
    if(dob < 2008){
        return false
}   else if(checkPassword == false || password.length < 10){
        return false

}
    //validate user input
    else if(checkFullname == false || checkEmail == false || checkUserName == false){
        return false
}   else{
        return true
}
    }


async function createArtistAccount(fullname, dob, email, userName,password, socialMedia=null){
    try {
        //create new artist bluprint
        newArtist = new Artist({
            fullName:fullname,
            dob:dob,
            email:email,
            userName:userName,
            socialMedias:socialMedia,
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

