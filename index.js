const { ApolloServer } = require('apollo-server');
const { db } = require('./data');
const typeDefs = require('./schema');
const Query = require('./resolvers/Query');

const resolvers = {
  Query,
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
