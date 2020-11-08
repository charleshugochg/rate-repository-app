import { gql } from "@apollo/client";

export const REPOSITORIES_QUERY = gql`
  query {
    repositories {
      edges {
        node {
          id
          ownerName
          ownerAvatarUrl
          name
          fullName
          ratingAverage
          reviewCount
          stargazersCount
          forksCount
          language
          description
        }
      }
    }
  }
`;

export const AUTHORIZED_QUERY = gql`
  query {
    authorizedUser {
      id
      username
    }
  }
`;
