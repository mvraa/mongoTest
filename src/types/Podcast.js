const { gql } = require('apollo-server');

const {
  GraphQLInt
} = require('graphql')

module.exports = gql`

  type Podcast {
    id: ID!
    name: String!
    url: String!
    episode: GraphQLInt!
  }

  input CreatePodcastInput {
    name: String!
    url: String!
    episode: GraphQLInt!
  }

  input UpdatePodcastInput {
    name: String
    url: String
    episode: GraphQLInt
  }

  input DeletePodcastInput {
    id: ID!
  }

  type DeletePayload{
    id: ID!
  }

  type Query {
    podcasts: [Podcast]
  }

  type Mutation {
    createPodcast(input: CreatePodcastInput!): Podcast!
    updatePodcast(id: ID!, input: UpdatePodcastInput!): Podcast!
    deletePodcast(id: ID!): DeletePayload!
  }
  
`;
