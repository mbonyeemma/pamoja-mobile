import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import styles from './SplashScreenStyles';
import data from './config';
import logo from '../../../assets/splashlogo.png';

class SplashScreen extends Component {
  static defaultProps = {
    navigation: {
      navigate: () => {}
    }
  }

  componentDidMount() {
    const { navigation } = this.props;
    setTimeout(() => {
      navigation.navigate('Guide');
    }, 1000);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={logo}
            style={styles.logoImageStyles}
            resizeMode="contain"
          />
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.copyrightText}>{data.copyright}</Text>
        </View>
      </View>
    );
  }
}

export default SplashScreen;
