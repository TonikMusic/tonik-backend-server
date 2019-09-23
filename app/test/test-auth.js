const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('server');
const should = chai.should();
const artist = require('..//app/models/artist');
const fan = require('..//app/models/artist');

chai.use(chaiHttp);

describe('remove data from database', () => {
    beforeEach((done) => {
        artist.remove({}, (err) =>{
            done()
        })
        
    });


    describe('test signup route for success', () => {
        it('should return json and status code of 200', (done) => {
            fakeArtist = {
                "email":"keonimurray10@gmail.com",
                "fullName": "Keoni Murray",
                'userName':"k tha rapper",
                'socialMedia':['https://twitter.com/home?lang=en'],
                'password': 'Key1999010',
                'artist': true,

            }
            chai.request(server)
            .post('/api/v0/auth/user/signup')
            .send(fakeArtist)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
            })
            
        });
        
    });
    
});