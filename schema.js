const { gql } = require('apollo-server');

const typeDefs = gql`
  type Product {
    id: ID!
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    image: String!
    onSale: Boolean
    categoryId: String!
    category: Category
    reviews:[Review!]!
  }

  type Query {
    products(filter:checkStockInput): [Product!]!
    product(id: ID!): Product
    categories: [Category]!
    category(id: ID!): Category
  }

type Mutation{
  addCategory(input:addCategoryInput!):Category!
  addProduct(input:addProductInput!) : Product!
  addReview(input: AddReviewInput!): Review!
}

  type Category {
    id: ID!
    name: String!
    products: [Product!]!
  }

  type Review {
    id: String!
    date: String!
    title: String!
    comment: String!
    rating: Float!
    productId: ID!
  }

input checkStockInput{
  onStock:Boolean
}

input addCategoryInput{
  name: String!
}

input addProductInput{
    name: String!
    description: String!
    quantity: Int!
    image: String!
    price: Float!
    onSale: Boolean!
    categoryId: String
  
}


input AddReviewInput {
    date: String!
    title: String!
    comment: String!
    rating: Int!
    productId: ID!
  }

`;

module.exports = typeDefs;
