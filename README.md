# Tokink Music Backend Server 

## Getting Started

__Make sure you have docker and docker-compose installed before following these steps__


1. clone the repo, 

2. cd into the repo and run ```docker-compose up --build```

3. go to ```localhost:5000``` using your web browser


# API ENPOINTS

### Signup Endpoint

```POST```

```localhost:500/api/v0/auth/user/signup```

__Input__

```
    fullName: Type(String) with only alphabet characters
    
    email: Type (String) must be legit email example @gmail.com

    dob(Date of birth): Type(String) must contain letters and numbers example october 21 1999

    password: type(String) must contain letters and numbers and be a length of 10 or greater for security reasons. Example K1m00189J

    userName: Type(String) Can only be letters or number no special chacters.

    artist: type(bool): if the user is a artist set this value to true otherwise set it to false
```


__output__

If any input is invalid you will receive ```status code 422 and a message thay say's invalid input```


If input is valid you will receive ```A json response that contains a JWT token and a status code of 200```


### Login Endpoint



