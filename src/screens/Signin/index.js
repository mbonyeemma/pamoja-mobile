import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import styles from './SignInStyles';
import logo from '../../../assets/logo.png';
import SignInComponent from './SignIn';
import RegisterComponent from './Register';

export default class SignInReg extends Component {
  state = {
    mode: 'signin'
  }

  navigatetoAccounts = () => {
    const { navigation } = this.props;
    navigation.navigate('BottomMenu');
  }

  navigateToVerification = () => {
    const { navigation } = this.props;
    navigation.navigate('Verification');
  }

  signInRegistrationHandler = mode => this.setState({ mode });

  render() {
    const { mode } = this.state;
    const signinStyle = mode === 'signin' ? styles.signInActive : styles.signInInactive;
    const registerStyle = mode === 'register' ? styles.registerActive : styles.registerInactive;
    const signOrRegisterComponent = mode === 'signin' ? <SignInComponent navigate={this.navigatetoAccounts} /> : <RegisterComponent navigate={this.navigateToVerification}/>;  

    return (
      <View style={{ display: 'flex', flex: 1 }}>
        <View style={styles.container}>
          <View style={{ width: '70%', height: '90%' }}>
            <Text allowFontScaling style={styles.welcomeText}>
              Welcome to
              {'\n'}
              Pamoja Wallet
            </Text>
          </View>
          <View style={{ width: '30%', height: '90%' }}>
            <Image source={logo} resizeMode="stretch" style={{ width: '100%', height: '100%' }} />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={signinStyle} onPress={() => this.signInRegistrationHandler('signin')}>
            <Text allowFontScaling style={{ fontSize: 15 }}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={registerStyle} onPress={() => this.signInRegistrationHandler('register')}>
            <Text allowFontScaling style={{ fontSize: 15 }}>Register</Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: '100%' }}>
          {signOrRegisterComponent}
        </View>
      </View>
    );
  }
}
