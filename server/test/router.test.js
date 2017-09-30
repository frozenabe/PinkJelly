const chai = require('chai');
const chaiAsPromised = require("chai-as-promised");
const chaiHttp = require('chai-http');

const app = require('../index');
const beautifyData = require('../beautifyData');
const getImageSize = require('../getImageSize');
const runDarknet = require('../runDarknet');
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

  const data = 'one 69, 161, 252, 310\none two 911, 202, 1057, 411\none two three 431, 213, 1422, 123\none two three four 100, 200, 300, 400\none two three four five 100, 200, 300, 400\none two three four five six 100, 200, 300, 400\none two three four five six seven 100, 200, 300, 400\n';
  const imageSize = { height: 100, width: 100 };

  describe('beautifyData', () => {

    it('should export a function that returns an object', () => {
      expect(beautifyData).to.be.a('function');
      expect(beautifyData(data, imageSize)).to.be.an('array');
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

  it('should throw error on wrong info', () => {
    
  });

});

describe('#POST check', () => {

  it('should return successfully(200) return an array of object(s)', (done) => {
    chai.request(app)
    .post('/')
    .end((err, res) => {
      expect(res).to.have.status(200),
      runDarknet(testEmail).should.eventually.be.an('array');
      runDarknet(testEmail).should.eventually.have.property('label');
      runDarknet(testEmail).should.eventually.have.property('x');
      runDarknet(testEmail).should.eventually.have.property('y');
      runDarknet(testEmail).should.eventually.have.property('height');
      runDarknet(testEmail).should.eventually.have.property('width');
      done();
    });
  }).timeout(20000);   

});