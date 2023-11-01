// src/queries.ts
import { gql } from "@apollo/client";

export const GET_HELLO = gql`
  query hello {
    hello
  }
`;

export const LOGIN = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password)
  }
`;
