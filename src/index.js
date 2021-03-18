const { ApolloServer } = require("apollo-server");
const mongo = require("./config/db");
const typeDefs = require("./types");
const resolvers = require("./resolvers");
const models = require("./models");

mongo();

const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  context: {models}
});

server.listen({ port: process.env.PORT || 3000 }).then(({ url }) => {
  console.log(`Server running at: ${url}`);
});