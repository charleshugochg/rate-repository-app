import { gql } from "@apollo/client";

export const AUTHORIZE_MUTATION = gql`
  mutation($username: String!, $password: String!) {
    authorize(credentials: { username: $username, password: $password }) {
      accessToken
    }
  }
`;
