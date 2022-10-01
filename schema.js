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
    category:Category
  }

  type Query {
    products: [Product!]!
    product(id: ID!): Product
    categories: [Category]!
    category(id: ID!): Category
  }

  type Category {
    id: ID!
    name: String!
    products: [Product!]!
  }
`;

module.exports = typeDefs;
