import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { useRepositories } from '../hooks';

import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const renderItem = ({ item }) => (
  <RepositoryItem {...item} />
);

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const {repositories} = useRepositories()
  const repositoryNodes = repositories ? repositories.edges.map(edge => edge.node) : []
  
  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

export default RepositoryList;
