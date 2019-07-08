import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './HeaderStyles';

export default class Header extends Component {
  render() {
    const { topHeader, bottomHeader, style } = this.props;
    return (
      <View style={[styles.container, style]}>
        <View style={styles.topHeader}>
          {topHeader || null}
        </View>
        <View style={styles.bottomHeader}>
          {bottomHeader || null}
        </View>
      </View>
    );
  }
}
