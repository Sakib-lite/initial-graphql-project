const Category = {
    products: ({id:categoryId}, args, { db }) => {
     return db.products.filter((product)=>product.categoryId === categoryId)
    },
  };
  
  module.exports = Category;
  