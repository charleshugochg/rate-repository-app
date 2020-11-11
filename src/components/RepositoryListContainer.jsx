import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';

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

const RepositoryListContainer = ({ repositories }) => {
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

export default RepositoryListContainer;
