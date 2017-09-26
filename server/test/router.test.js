const chai = require('chai');
const chaiAsPromised = require("chai-as-promised");
const chaiHttp = require('chai-http');

const app = require('../index');
const processThruPython = require('../getPythonData');
const imageUrlS3 = process.env.AWS_S3_BUCKET_IMAGE_URL;

chai.use(chaiAsPromised);
chai.use(chaiHttp);
const expect = chai.expect;

describe('scenarios for getting image from S3', function() {

  it('should get an image from S3', function(done) {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(imageUrlS3).to.be.a('string');
        expect(processThruPython(imageUrlS3)).to.eventually.be.an('array');
        done();
      });

  }).timeout(20000);
});

