import React from 'react';
import { View, Text } from 'react-native';
import Button from '../containers/Button';
import NewsItem from '../containers/NewsItem';
import Loading from '../containers/Loading';

const App = () => (
  <View>
    <Button />
    <Loading />
    <NewsItem />
  </View>
);

export default App;
