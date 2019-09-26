# Tonik Music Backend Server 

## Getting Started

__Make sure you have docker and docker-compose installed before following these steps__


1. clone the repo, 

2. cd into the repo and run ```docker-compose up --build```

3. go to ```localhost:5000``` using your web browser


# API ENPOINTS

### Signup Endpoint

```POST```

```https://tonik-server-test.herokuapp.com/api/v0/auth/user/signup```

__Input__

```
    fullName: Type(String) with only alphabet characters
    
    email: Type (String) must be legit email example @gmail.com

    dob(Date of birth): Type(String) must contain letters and numbers example october 21 1999

    password: type(String) must contain letters and numbers and be a length of 10 or greater for security 
    
    reasons. Example K1m00189J

    userName: Type(String) Can only be letters or number no special chacters.

    artist: type(bool): if the user is a artist set this value to true otherwise set it to false
```


__output__

If any input is invalid you will receive ```status code 422 and a message thay say's invalid input```


If input is valid you will receive ```A json response that contains a JWT token and a status code of 200```


### Login Endpoint

```POST```

```https://tonik-server-test.herokuapp.com/api/v0/auth/user/login```


__Input__
``` 
    email: type(String) must be legit email. examile name123@gmail.com
    
    password: type(String) must be length of 10 or greater and containe a mix of 
    letters and numbers

    artist: type(bool) if user is an artist set to true other it should be false. 

```


__output__

if a fake email gets sent or if the  password is invalid, then you will receive ```status code of 412 and a message that says invalid input```

if the user enters the wrong password you will receive ```status code 422 and a message that says invalid password```

for server issues you will receive ```status code of 500```

When the user is logedin you will receive a json object. example below


__FOR FAN__


``` 
{
    "artistSupported": [],
    "following": [],
    "likedSongs": [],
    "likedAlbum": [],
    "_id": "",
    "fullName": "",
    "dob": "",
    "email": "",
    "userName": "",
    "dateJoined": ""

    All The Arrays Will Contain Objects
}

```

__Artist__

```
{
    "genre": null,
    "followingCount": 0,
    "followerCount": 0,
    "donationsTotal": 0,
    "socialMedias": [],
    "donators": [],
    "supporters": [],
    "following": [],
    "foloowers": [],
    "_id": "",
    "fullName": "",
    "dob": "",
    "email": "",
    "userName": "",
    "dateJoined": ""
}

```




