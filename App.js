import React from "react";
import { NativeRouter } from "react-router-native";
import { ApolloProvider } from "@apollo/client";
import { createApolloClient } from "./src/utils/apolloClient";
import AuthStorage from "./src/utils/authStorage";
import Main from "./src/Main";
import AuthStorageContext from "./src/contexts/AuthStorageContext";

const authStorage = new AuthStorage();
const client = createApolloClient(authStorage);

export default function App() {
  return (
    <ApolloProvider client={client}>
      <AuthStorageContext.Provider value={authStorage}>
        <NativeRouter>
          <Main />
        </NativeRouter>
      </AuthStorageContext.Provider>
    </ApolloProvider>
  );
}
