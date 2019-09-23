const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();
const artist = require('..//app/models/artist');
// const fan = require('../models/fans');



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
                "fullName":"Keoni Murray",
                'userName':"k tha rapper",
                'password': 'Key1999010',
                'dob': 'september 21 1999',
                'artist': true,

            }
            chai.request(server)
            .post('/api/v0/auth/user/signup')
            .send(fakeArtist)
            .end((err, res) => {
                res.should.have.status(200);
                // res.body.should.be.a('object');
                done();
            })
            
        });
        
    });

    describe('test signup route for invalid input', () => {
        it('should return json with status code 422', (done) => {
            fakeInput = {
                'email': 'keonimurray.com',
                'fullName': '12345',
                'userName': '1',
                'password': '12345',
                'dob': "12345",
                'artist': true,
            }

            chai.request(server)
            .post('/api/v0/auth/user/signup')
            .send(fakeInput)
            .end((err, res) => {
                res.should.have.status(422);
                res.body.should.be.a('object');
                done();
            })
        })
        
    });
    
});