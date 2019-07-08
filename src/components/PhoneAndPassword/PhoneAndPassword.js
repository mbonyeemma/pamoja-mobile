import React from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import styles from './PhoneAndPasswordStyles';
import phone from '../../../assets/phone.png';
import padlock from '../../../assets/padlock.png';
import eye from '../../../assets/eye.png';
import dropdown from '../../../assets/dropdown.png';

export default () => (
  <>
    <View style={{ display: 'flex', width: '66%' }}><Text style={{ fontSize: 10 }}>Phone Number</Text></View>
    <View style={styles.phone}>
      <Image source={phone} style={{ width: '10%', height: '30%' }} resizeMode="contain" />
      <View style={styles.phoneContainer}>
        <View style={styles.countryCodes}>
          <Text>+256</Text>
        </View>
        <View style={{ width: '10%', borderColor: 'rgb(229,229,229)', borderRightWidth: 1, justifyContent: 'center', display: 'flex', height: '50%', padding: 4 }}>
          <Image source={dropdown} style={{ width: '60%', height: '40%' }} resizeMode="cover" />
        </View>
        <TextInput keyboardType="numeric" placeholder="Enter phone number" />
      </View>
    </View>
    <View style={styles.password}>
      <Image source={padlock} style={{ width: '10%', height: '40%' }} resizeMode="contain" />
      <TextInput placeholder="Password" secureTextEntry style={styles.passwordInput} />
      <View style={styles.togglePasswordContainer}><Image source={eye} style={{ width: '50%', height: '50%' }} resizeMode="contain" /></View>
    </View>
  </>
);
