const { gql } = require('apollo-server');

module.exports = gql`

  type Publisher {
    id: ID!
    name: String!
    netWorth: Int!
  }

  input AddPublisherInput {
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
    addPublisher(input: AddPublisherInput!): Publisher!
    updatePublisher(id: ID!, input: UpdatePublisherInput!): Publisher!
    deletePublisher(id: ID!): DeletePayload!
  }
  
`;
