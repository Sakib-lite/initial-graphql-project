const Query = {
  products: (parent, args, { db }) => db.products,
  product: (parent, { id }, { db }) => {
    return db.products.find((product) => product.id === id);
  },
};

module.exports = Query;
