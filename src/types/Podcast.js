const { gql } = require('apollo-server');

module.exports = gql`

  type Podcast {
    id: ID!
    name: String!
    url: String!
  }

  type Publisher {
    id: Number!
    name: String!
    netWorth: Number!
  }

  input CreatePublisherInput {
    id: Number!
    name: String!
    netWorth: Number!
  }

  input CreatePodcastInput {
    name: String!
    url: String!
  }

  input UpdatePodcastInput {
    name: String
    url: String
  }

  input DeletePodcastInput {
    id: ID!
  }

  type DeletePayload{
    id: ID!
  }

  type Query {
    podcasts: [Podcast]
    publisher: [Publisher]
  }

  type Mutation {
    addPublisher(input: CreatePublisherInput!): Publisher!
    createPodcast(input: CreatePodcastInput!): Podcast!
    updatePodcast(id: ID!, input: UpdatePodcastInput!): Podcast!
    deletePodcast(id: ID!): DeletePayload!
  }
  
`;
