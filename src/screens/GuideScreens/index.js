import React, { Component } from 'react';
import {
  View,
  Image,
  ScrollView,
  Dimensions,
  Text,
  TouchableOpacity
} from 'react-native';

import photos from './config';
import styles from './GuideScreensStyles';

const { width } = Dimensions.get('screen');

class GuideScreens extends Component {
  state = {
    offset: 0
  };

  handleScroll = event => {
    const horizontal = Math.floor(event.nativeEvent.contentOffset.x);

    if (horizontal === 0) {
      return this.setState({
        offset: 0
      });
    }
    if (horizontal === Math.floor(width)) {
      return this.setState({
        offset: 1
      });
    }
    if (horizontal === Math.floor(width) * 2) {
      return this.setState({
        offset: 2
      });
    }
    if (horizontal >= Math.floor(width) * 3) {
      return this.setState({
        offset: 3
      });
    }
  };

  skipHandler = () => {
    const { navigation } = this.props;
    navigation.navigate('SignIn', { component: 'register' });
  };

  render() {
    const { offset } = this.state;
    // console.log('offset', offset, 'width', width);
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollViewStyles}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={this.handleScroll}
          scrollEventThrottle={16}
        >
          {photos.map((source, index) => (
            <View key={index} style={styles.contentContainer}>
              <Image
                source={source.picture}
                style={styles.imageStyles}
                resizeMode='contain'
              />
              <Text style={styles.titleStyles}>{source.title}</Text>
              <Text style={styles.descriptionStyles}>{source.description}</Text>
            </View>
          ))}
        </ScrollView>
        <View style={styles.footerContainer}>
          <Text />
          <View style={styles.paginationContainer}>
            {photos.map((_, index) => (
              <View
                key={index}
                style={
                  offset === index
                    ? [styles.paginationBtnStyles, styles.active]
                    : styles.paginationBtnStyles
                }
              />
            ))}
          </View>
          <TouchableOpacity onPress={this.skipHandler}>
            <Text style={styles.skipBtnText}>
              {offset === 3 ? `Get Started` : `Skip All`}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default GuideScreens;
