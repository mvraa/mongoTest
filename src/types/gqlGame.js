const { gql } = require('apollo-server');

module.exports = gql`

  type Publisher {
    id: ID!
    name: String!
    netWorth: Int!
  }

  input CreatePublisherInput {
    name: String!
    netWorth: Int!
  }

  input UpdatePublisherInput {
    name: String!
    netWorth: Int!
  }

  type DeletePayload{
    id: ID!
  }

  type Query {
    publishers: [Publisher]
  }

  type Mutation {
    createPublisher(input: CreatePublisherInput!): Publisher!
    updatePublisher(id: ID!, input: UpdatePublisherInput!): Publisher!
    deletePublisher(id: ID!): DeletePayload!
  }
  
`;
