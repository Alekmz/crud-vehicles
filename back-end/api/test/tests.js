const chai = require('chai');
const chaiHTTP = require('chai-http');
const api = require('../server');

chai.should();
chai.use(chaiHTTP);

describe('CRUD VEHICLES', () => {

    //GET
    describe('GET VEHICLES', () => {
        it('Get all vehicles', (done) => {
            chai.request(api)
            .get('/vehicles')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
        });

        it('Error get all vehicles', (done) => {
            chai.request(api)
            .get('/veiculos')
            .end((err, res) => {
                res.should.have.status(404);
                done();
            });
        });
    });

    //GET BY ID
    describe('GET VEHICLES BY ID', () => {
        it('Get id', (done) => {
            const id = 1;
            chai.request(api)
            .get('/vehicles/' + id)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
        });

        it('Error get id', (done) => {
            const id = 55;
            chai.request(api)
            .get('/vehicles' + id)
            .end((err, res) => {
                res.should.have.status(404);
                done();
            });
        });
    });

    //POST
    describe('POST VEHICLES', () => {
        it('Created vehicles', (done) => {
            const vehicle = {
                "placa": "NET-1016",
                "chassi": "2gR yu718u Xe va0302",
                "renavam": "13946407071",
                "modelo": "Nivus",
                "marca": "Volwswagen",
                "ano": "2020",    
            };
            chai.request(api)
            .post('/vehicles')
            .set('content-type', 'application/x-www-form-urlencoded')
            .send(vehicle)
            .end((err, res) => {
                res.should.have.status(201);
                res.body.should.be.a('object');
                done();
            });
        });

        it('Error in creating vehicles', (done) => {
            const vehicle2 = {
                "placa": "",   
                "ano":"",
            };
            chai.request(api)
            .post('/vehicles')
            .set('content-type', 'application/x-www-form-urlencoded')
            .send(vehicle2)
            .end((err, res) => {
                res.should.have.status(400);
                done();
            });
        });
    });

    //PUT
    describe('PUT VEHICLE', () => {
        it('Updated vehicle', (done) => {
            const id = 76;
            const vehicle = {
                "ano": "2022",   
            };
            chai.request(api)
            .put('/vehicles/' + id)
            .set('content-type', 'application/x-www-form-urlencoded')
            .send(vehicle)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
        });

        it('Error in updating vehicle due to missing characters', (done) => {
            const id = 77;
            const vehicle = {
                "renavam": "123", 
            };
            chai.request(api)
            .put('/vehicles/' + id)
            .set('content-type', 'application/x-www-form-urlencoded')
            .send(vehicle)
            .end((err, res) => {
                res.should.have.status(400);
                done();
            });
        });
    });

    //DELETE
    describe('DELETE VEHICLES', () => {
        it('Delete existing vehicle', (done) => {
            const id = 74;
            chai.request(api)
            .delete('/vehicles/' + id)
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
        });

        it('Error delete not existing vehicle', (done) => {
            const id = 55;
            chai.request(api)
            .delete('/vehicles' + id)
            .end((err, res) => {
                res.should.have.status(404);
                done();
            });
        });
    });
});