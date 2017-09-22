const app = require('../router');
const chai = require('chai');
const request = require('supertest');

const expect = chai.expect;

describe('router "get" test', function() {
  describe('#GET image from S3' function() {
    it('should get an image from S3', function(done) {
      request(app)
        .get('/')
        .end(function(err, res) {
          expect(res.statusCode).to.equal(200);
          expect(res.body).to.be.an('array');
          expect(res.body).to.be.empty;
          done(); //not working yet
        });
    });
  });

});