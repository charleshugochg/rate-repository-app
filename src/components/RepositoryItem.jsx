import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import Text from './Text';

import theme from '../theme';

const headerStyles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  titleContainer: {
    flex: 1,
    alignItems: 'flex-start',
    paddingLeft: 20
  },
  fullName: {
    paddingBottom: 5
  },
  description: {
    flex: 1,
    flexWrap: 'wrap',
    paddingBottom: 5,
  },
  language: {
    backgroundColor: theme.colors.primary,
    color: '#fff',
    borderRadius: 5,
    marginTop: 5,
    padding: 5
  }
});

const ItemHeader = ({ fullName, description, language, ownerAvatarUrl }) => {
  return (
    <View style={headerStyles.container}>
      <ItemAvatar url={ownerAvatarUrl} />
      <View style={headerStyles.titleContainer}>
        <Text fontWeight='bold' fontSize='subheading' style={headerStyles.fullName}>{fullName}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text color='textSecondary' fontSize='subheading' style={headerStyles.description}>{description}</Text>
        </View>
        <Text fontSize='subheading' style={headerStyles.language}>{language}</Text>
      </View>
    </View>
  );
};

const footerStyles = StyleSheet.create({
  container: {
    paddingTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  labelContainer: {
    alignItems: 'center',
  }
});

const Label = ({ label, number }) => {
  if(number >= 1000){
    number = (number/1000).toFixed(1);
    if(parseInt(number.split('.')[1]) === 0) {
      number = number.split('.')[0];
    }
    number = number + 'k';
  }
  return (
    <View style={footerStyles.labelContainer}>
      <Text fontSize='subheading' fontWeight='bold'>
        {number}
      </Text>
      <Text fontSize='subheading' color='textSecondary'>{label}</Text>
    </View>
  );
};

const ItemFooter = ({ forksCount, stargazersCount, ratingAverage, reviewCount }) => {
  return (
    <View style={footerStyles.container}>
      <Label label='Stars' number={stargazersCount} />
      <Label label='Forks' number={forksCount} />
      <Label label='Reviews' number={reviewCount} />
      <Label label='Rating' number={ratingAverage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15
  },
  avatar: {
    borderRadius: 5,
    width: 50,
    height: 50,
  }
});

const ItemAvatar = ({ url }) => {
  return (
    <Image
      style={styles.avatar}
      source={{
        uri: url
      }}
    />
  );
};

const RepositoryItem = (props) => {
  return (
    <View style={styles.container}>
      <ItemHeader {...props} /> 
      <ItemFooter {...props} />
    </View>
  );
};

export default RepositoryItem;
