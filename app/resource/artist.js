const validator = require("validator");


const validate = (fullname, dob, email, artistHandle=`${null}`,socialMedia) => {   
    checkFullname = validator.isAlpha(fullname)
    checkEmail = validator.isEmail(email)
    checkArtistHandle = validator.isAlphanumeric(artistHandle)
    for (socialMediaUrl in socialMedia){
        checkSocialMedia = validator.isURL(socialMediaUrl)
        if(checkSocialMedia == false){
            return false;
        }
    //check if user is over 13
    if(dob < 2008){
        return false
    }
    //validate user input
    else if(checkFullname == false || checkEmail == false || checkArtistHandle == false || checkSocialMedia == false){
        return false
    }else{
        return true
    }
        

        }
    }
    

module.exports = {validate}

