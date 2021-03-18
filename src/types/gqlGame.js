const { gql } = require('apollo-server');

module.exports = gql`

  type Publisher {
    id: ID!
    name: String!
    netWorth: Int!
  }

  type Game {
    id: ID!
    name: String!
    genre: String!
    publisherFK: String!
  }

  input CreateGameInput {
    name: String!
    genre: String!
    publisherFK: String!
  }

  input CreatePublisherInput {
    name: String!
    netWorth: Int!
  }

  input UpdatePublisherInput {
    name: String
    netWorth: Int
  }

  type DeletePayload{
    id: ID!
  }

  type Query {
    publisher(name: String!): Publisher
    game(name: String!): Game
    gameByGenre(genre: String!): [Game]
    publishers: [Publisher]
    games: [Game]
  }

  type Mutation {
    createGame(input: CreateGameInput!): Game!
    createPublisher(input: CreatePublisherInput!): Publisher!
    updatePublisher(id: ID!, input: UpdatePublisherInput!): Publisher!
    deletePublisher(id: ID!): DeletePayload!
  }
  
`;
