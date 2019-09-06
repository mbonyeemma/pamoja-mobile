import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

let Loading = ({ loading }) =>
  loading ? (
    <View>
      <Text>Loading</Text>
    </View>
  ) : null;

const mapStateToProps = state => ({
  loading: state.loading
});
Loading = connect(
  mapStateToProps,
  null
)(Loading);

export default Loading;
