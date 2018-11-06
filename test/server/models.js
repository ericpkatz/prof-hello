const db = require('../../db');
const expect = require('chai').expect;
const { Product } = db.models;

describe('models', ()=> {
  beforeEach(()=> db.syncAndSeed());

  describe('Product', ()=> {
    it('there are 3', ()=> {
      return Product.findAll() 
        .then( products => expect(products.length).to.equal(4))
    });
  });
});
