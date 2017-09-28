const chai = require('chai');
const chaiAsPromised = require("chai-as-promised");
const chaiHttp = require('chai-http');

const app = require('../index');
const getPythonData = require('../getPythonData')
const beautifyData = require('../beautifyData');
const getImageSize = require('../getImageSize');
const processThruPython = require('../getPythonData');
const testEmail = 'test%40test.com'
const imageUrlS3 = `${process.env.AWS_S3_BUCKET_IMAGE_URL}/${testEmail}-image.jpg`;

chai.use(chaiAsPromised);
chai.use(chaiHttp);
const expect = chai.expect;
chai.should();

// ***istanbul doesnt read =>(arrow) functions as functions***
describe('#scenarios for getting image from S3', () => {

  it('should get an image url as string from S3', () => {
    expect(imageUrlS3).to.be.a('string');
  });

});

describe('#functions in this server', () => {

  const data = ['/ \n \ , John Doe [1371.0, 13.0] [1642.0, 132.0]'].toString('utf8');
  const imageSize = { height: 100, width: 100 };

  describe('beautifyData', () => {

    it('should export a function that returns an object', () => {
      expect(beautifyData).to.be.a('function');
      expect(beautifyData(data, imageSize)).to.be.an('object');
    });

    it('should return object with properties of "label" , "x", "y", "height", "width"', () => {
      expect(beautifyData(data, imageSize)).to.have.property('label');
      expect(beautifyData(data, imageSize)).to.have.property('x');
      expect(beautifyData(data, imageSize)).to.have.property('y');
      expect(beautifyData(data, imageSize)).to.have.property('height');
      expect(beautifyData(data, imageSize)).to.have.property('width');
    });
  });

  describe('getImageSize', () => {

    it('should return an object with properties of "height" and "width"', (done) => {
      Promise.all([
        getImageSize(imageUrlS3).should.eventually.have.property('height'),
        getImageSize(imageUrlS3).should.eventually.have.property('width')
      ]).should.notify(done);
    });
  });

});

describe('#POST check', () => {

  it('should return successfully(200) return an array of object(s)', (done) => {
    chai.request(app)
    .post('/')
    .end((err, res) => {
      expect(res).to.have.status(200),
      processThruPython(imageUrlS3).should.eventually.be.an('array');
      processThruPython(imageUrlS3).should.eventually.have.property('label');
      processThruPython(imageUrlS3).should.eventually.have.property('x');
      processThruPython(imageUrlS3).should.eventually.have.property('y');
      processThruPython(imageUrlS3).should.eventually.have.property('height');
      processThruPython(imageUrlS3).should.eventually.have.property('width');
      done();
    });
  }).timeout(20000);   

});