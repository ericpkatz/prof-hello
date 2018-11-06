const conn = require('./conn');
const Product = require('./Product');

const syncAndSeed = async()=> {
  await conn.sync({ force: true }); 
  const [foo, bar, bazz] = await Promise.all([
    Product.create({ name: 'foo' }),
    Product.create({ name: 'bar' }),
    Product.create({ name: 'bazz' }),
  ]);
}

module.exports = {
  syncAndSeed,
  models: {
    Product
  }
};


