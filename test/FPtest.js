import assert from 'assert';
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../fp/route.js';
import http from 'http';

var should = chai.should();

const serve = server(http).listen(3000, '127.0.0.1');

chai.use(chaiHttp);

describe('GET method test', function () {
  it('it should get GET 200 status', function () {
    chai.request(serve)
      .get('/criminal/all')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
    });
  });
});

describe('POST method test', function () {
  it('it should get POST 201 status', function () {
    chai.request(serve)
      .post('/criminal')
      .set('content-type', 'application/json')
      .send({'nama':'Gerald','umur':35,'tindak':'narkotika','status':'ditahan'})
      .end((err, res) => {
        res.should.have.status(201);
    });
  });
});

describe('PUT method test', function () {
  it('it should get PUT 200 status', function () {
    chai.request(serve)
      .put('/criminal/6')
      .set('content-type', 'application/json')
      .send({'status':'diadili'})
      .end((err, res) => {
        res.should.have.status(200);
    });
  });
});

describe('DELETE method test', function () {
  it('it should get DELETE 200 status', function () {
    chai.request(serve)
      .delete('/criminal/66')
      .end((err, res) => {
        res.should.have.status(200);
    });
  });
});

describe('wrong endpoint test', function () {
  it('it should get GET 404 status', function () {
    chai.request(serve)
      .get('/criminal')
      .end((err, res) => {
        res.should.have.status(404);
    });
  });
});
