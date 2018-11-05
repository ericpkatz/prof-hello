const expect = require('chai').expect;

const app = require('supertest')(require('./app'));

describe('my app', ()=> {
  describe('GET /', ()=> {
    it('returns hello world', ()=> {
      return app.get('/')
        .expect(200)
        .then( response => expect(response.text).to.equal('hello world'));
    });
  });
});
