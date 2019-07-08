import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './SignInStyles';
import PhoneAndPassword from '../../components/PhoneAndPassword/PhoneAndPassword';

export default ({ navigate }) => (
  <View style={styles.signIncontainer}>
    <PhoneAndPassword />
    <View>
      <TouchableOpacity style={styles.signInTextContainer} onPress={navigate}>
        <Text allowFontScaling style={{ fontSize: 13, color: 'white' }}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.forgotPwdTextContainer} onPress={null}>
        <Text allowFontScaling style={{ fontSize: 11, color: 'rgb(0, 58, 238)' }}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  </View>
);
