import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';

import RepositoryList from './components/RepositoryList';
import SignIn from './components/SignIn';
import AppBar from './components/AppBar';
import AppBarItem from './components/AppBarItem';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e1e4e8',
    flexGrow: 1,
    flexShrink: 1
  }
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar>
        <AppBarItem content={'Repositories'} to={'/'} />
        <AppBarItem content={'Sign in'} to={'/signin'} />
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

