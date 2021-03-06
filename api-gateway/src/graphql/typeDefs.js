import { gql } from 'apollo-server';

const typeDefs = gql`
  type Listing {
    id: ID!
    title: String!
    description: String!
  }

  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Mutation {
    createUser(name: String!, email: String!, password: String!): User!
  }

  type Query {
    listings: [Listing!]!
    users: [User!]!
  }
`;

export default typeDefs;
