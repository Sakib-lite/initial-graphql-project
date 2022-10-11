const { v4: uuid } = require('uuid');

const Mutation = {
  addCategory: (parent, { input }, { db }) => {
    const newCategory = {
      id: uuid(),
      name: input.name,
    };
    db.categories.push(newCategory);
    console.log(db.categories)
    return newCategory;
  },
  addProduct: (parent, { input }, { db }) => {
    const { name, image, price, onSale, quantity, categoryId } = input;

    const newProduct = {
      id: uuid(),
      name,
      image,
      price,
      onSale,
      quantity,
      categoryId,
    };

    db.products.push(newProduct);

    return newProduct;
  },
  addReview: (parent, { input }, { db }) => {
    const { date, title, comment, rating, productId } = input;

    const newReview = {
      id: uuid(),
      date,
      title,
      comment,
      rating,
      productId,
    };

    db.reviews.push(newReview);

    return newReview;
  },
};

module.exports = Mutation;
