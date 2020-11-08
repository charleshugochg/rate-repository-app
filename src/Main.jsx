import React, {useContext} from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';
import { useApolloClient, useQuery } from '@apollo/client';

import RepositoryList from './components/RepositoryList';
import SignIn from './components/SignIn';
import AppBar from './components/AppBar';
import AppBarItem from './components/AppBarItem';
import { AUTHORIZED_QUERY } from './graphql/queries';
import AuthStorageContext from './contexts/AuthStorageContext';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e1e4e8',
    flexGrow: 1,
    flexShrink: 1
  }
});

const Main = () => {
  const apolloClient = useApolloClient()
  const authStorage = useContext(AuthStorageContext)
  const {data} = useQuery(AUTHORIZED_QUERY, {
    fetchPolicy: "cache-and-network"
  })
  const logout = () => {
    authStorage.removeAccessToken()
    apolloClient.resetStore()
  }
  return (
    <View style={styles.container}>
      <AppBar>
        <AppBarItem content={'Repositories'} to={'/'} />
        {data && data.authorizedUser 
          ? <AppBarItem content={'Sign out'} onPress={logout}/> 
          : <AppBarItem content={'Sign in'} to={'/signin'} />
        }
      </AppBar>
      <Switch>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        <Route path="/signin" exact>
          <SignIn />
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;

