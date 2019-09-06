import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import { getNews } from '../actions';
let Button = ({ news }) => (
  <View
    style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 250 }}
  >
    <TouchableOpacity
      onPress={news}
      style={{ width: 200, backgroundColor: 'yellow' }}
    >
      <Text>Press to see news</Text>
    </TouchableOpacity>
  </View>
);
const mapDispatchToProps = {
  news: getNews
};
Button = connect(
  null,
  mapDispatchToProps
)(Button);
export default Button;
