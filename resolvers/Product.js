const Product = {
    category: ({categoryId}, args, { db }) => {
     return db.categories.find((category)=>category.id === categoryId)
    },
  };
  
  module.exports = Product;
  