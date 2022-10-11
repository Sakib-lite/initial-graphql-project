const Query = {
  products: (parent, { filter }, { db }) => {
    if (filter) {
      if (filter.onStock) {
        return db.products.filter((prod) => prod.onStock);
      }
    }
    return db.products;
  },
  product: (parent, { id }, { db }) => {
    return db.products.find((product) => product.id === id);
  },
  categories: (parent, args, { db }) => db.categories,
  category: (parent, { id }, { db }) => {
    return db.categories.find((category) => category.id === id);
  },
};

module.exports = Query;
