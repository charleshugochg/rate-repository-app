// import { useState, useEffect } from "react";
import { useApolloClient, useMutation, useQuery } from "@apollo/client";

import { REPOSITORIES_QUERY } from "../graphql/queries";
import { AUTHORIZE_MUTATION } from "../graphql/mutations";
import { useContext } from "react";
import AuthStorageContext from "../contexts/AuthStorageContext";

// const useRepositories = () => {
//   const [repositories, setRepositories] = useState();
//   const [loading, setLoading] = useState(false);

//   const fetchRepositories = async () => {
//     setLoading(true);
//     const response = await fetch("http://192.168.99.153:5000/api/repositories");
//     const json = await response.json();

//     setLoading(false);
//     setRepositories(json);
//   };

//   useEffect(() => {
//     fetchRepositories();
//   }, []);

//   return { repositories, loading, refetch: fetchRepositories };
// };

export const useRepositories = () => {
  const { loading, data } = useQuery(REPOSITORIES_QUERY, {
    fetchPolicy: "cache-and-network",
  });
  const { repositories } = data || {};

  return { repositories, loading };
};

export const useSignIn = () => {
  const apolloClient = useApolloClient();
  const [mutate, result] = useMutation(AUTHORIZE_MUTATION);
  const authStorage = useContext(AuthStorageContext);

  const signIn = async ({ username, password }) => {
    const { data } = await mutate({ variables: { username, password } });
    authStorage.setAccessToken(data.authorize.accessToken);
    apolloClient.resetStore();
    return { data };
  };

  return [signIn, result];
};
