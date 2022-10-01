const { ApolloServer } = require('apollo-server');
const { db } = require('./data');
const typeDefs = require('./schema');
const Query = require('./resolvers/Query');
const Category = require('./resolvers/Category');
const Product = require('./resolvers/Product');

const resolvers = {
  Query,
  Category,
  Product
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    db,
  },
});

server.listen().then(({ url }) => {
  console.log('Server is running at ' + url);
});
