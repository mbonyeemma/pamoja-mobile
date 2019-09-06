import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

let NewsItem = ({ article }) => (
  <View style={{ justifyContent: 'center', alignItems: 'center' }}>
    <Text>{article}</Text>
  </View>
);

const mapStateToProps = state => ({
  article: state.news
});

NewsItem = connect(
  mapStateToProps,
  null
)(NewsItem);

export default NewsItem;
