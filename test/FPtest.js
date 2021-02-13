import assert from 'assert';
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../fp/route.js';
import http from 'http';

var should = chai.should();

const serve = server(http).listen(3000, '127.0.0.1');

chai.use(chaiHttp);

describe("GET see all five rows in criminal", function () {
  it('it should get GET 200 status', function () {
    chai.request(serve)
      .get('/criminal/all')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
    });
  });
});

describe("POST add a row to criminal", function () {
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

describe("PUT modify a criminal's row's status", function () {
  it('it should get PUT 200 status', function () {
    chai.request(serve)
      .put('/criminal/status/6')
      .set('content-type', 'application/json')
      .send({'status':'diadili'})
      .end((err, res) => {
        res.should.have.status(200);
    });
  });
});

describe("DELETE delete a row from criminal", function () {
  it('it should get DELETE 200 status', function () {
    chai.request(serve)
      .delete('/criminal/66')
      .end((err, res) => {
        res.should.have.status(200);
    });
  });
});

describe("GET see a criminal's row's based on id", function() {
  it('it should get GET 200 status', function () {
    chai.request(serve)
      .get('/criminal/1')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
    });
  });
});

describe("PATCH modify a criminal's row's status", function () {
  it('it should get PATCH 200 status', function () {
    chai.request(serve)
      .patch('/criminal/status/6')
      .set('content-type', 'application/json')
      .send({'status':'diadili'})
      .end((err, res) => {
        res.should.have.status(200);
    });
  });
});

describe("HEAD see a criminal's row's based on id", function() {
  it('it should get HEAD 200 status', function () {
    chai.request(serve)
      .head('/criminal/1')
      .end((err, res) => {
        res.should.have.status(200);
    });
  });
});

describe("PUT modify a criminal's row's act", function () {
  it('it should get PUT 200 status', function () {
    chai.request(serve)
      .put('/criminal/act/6')
      .set('content-type', 'application/json')
      .send({'tindak':'pemerasan'})
      .end((err, res) => {
        res.should.have.status(200);
    });
  });
});

describe("POST modify a criminal's row's act", function () {
  it('it should get POST 200 status', function () {
    chai.request(serve)
      .post('/criminal/act/6')
      .set('content-type', 'application/json')
      .send({'tindak':'pemerasan'})
      .end((err, res) => {
        res.should.have.status(200);
    });
  });
});

describe("PATCH modify a criminal's row's act", function () {
  it('it should get PATCH 200 status', function () {
    chai.request(serve)
      .patch('/criminal/act/6')
      .set('content-type', 'application/json')
      .send({'tindak':'pemerasan'})
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
