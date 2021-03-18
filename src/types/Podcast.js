const { gql } = require('apollo-server');

module.exports = gql`

  type Podcast {
    id: ID!
    name: String!
    url: String!
    episode: String!
  }

  input CreatePodcastInput {
    name: String!
    url: String!
    episodes: Number!
  }

  input UpdatePodcastInput {
    name: String
    url: String
    episode: String
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
