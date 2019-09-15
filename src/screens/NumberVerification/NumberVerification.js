/* eslint-disable no-return-assign */
import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import Styles from './NumberVerificationStyles';

class NumberVerification extends Component {
  state = {
    first: '',
    second: '',
    third: '',
    fourth: '',
    timer: 10,
    // verify: true,
    number: ''
  };

  componentDidMount() {
    const { navigation } = this.props;
    this.setState({ number: navigation.getParam('number') });
  }

  verifyNumber = () => {
    const { first, second, third, fourth } = this.state;
    const { navigation } = this.props;
    const verificationNumber = { token: `${first}${second}${third}${fourth}` };
    // console.log('verificationNumber', verificationNumber);
    if (!first || !second || !third || !fourth) return Alert.alert('Error', 'Fill in all the fields');

    axios
      .post('https://pamoja-251814.appspot.com/verify', verificationNumber)
      .then(() => navigation.navigate('SignIn', { component: 'signin' }))
      .catch(() => Alert.alert('Error', 'Make Sure you have the right code and number is registered.'));
  };

  textChanged = (value, input) => {
    const { first } = this.state;
    let focus;
    if (value) {
      switch (input) {
        case 'first':
          if (first !== '') return this.second.focus();
          this.setState({ first: value });
          focus = this.second.focus();
          break;
        case 'second':
          this.setState({ second: value });
          focus = this.third.focus();
          break;
        case 'third':
          this.setState({ third: value });
          focus = this.fourth.focus();
          break;
        case 'fourth':
          this.setState({ fourth: value });
          break;
        default:
          return this.first.focus();
      }
    }
    return focus;
  };

  backSpaceHandler = (event, input) => {
    const { second, third, fourth } = this.state;
    switch (input) {
      case 'second':
        this.setState({ second: '' });
        if (event.nativeEvent.key === 'Backspace' && second === '') {
          return this.first.focus();
        }
        break;
      case 'third':
        this.setState({ third: '' });
        if (event.nativeEvent.key === 'Backspace' && third === '') {
          return this.second.focus();
        }
        break;
      case 'fourth':
        this.setState({ fourth: '' });
        if (event.nativeEvent.key === 'Backspace' && fourth === '') {
          return this.third.focus();
        }
        break;
      default:
        return this.first.focus();
    }
  };

  resendCode = () => {
    const { number } = this.state;
    const codeObject = {
      phone_number: number,
      country_code: '256',
      method: 'sms'
    };

    return axios
      .post('https://pamoja-251814.appspot.com/send_code', codeObject)
      .then(() => Alert.alert('Success', 'A code has been resent to your phone number'))
      .catch(() => Alert.alert('Error', 'Make Sure you have the right code and number is registered.'));
  }

  toggleVerifyNow = () => {
    // clearInterval();
    // this.setState({ verify: false });
  };

  navigateToHome = () => {
    const { navigation } = this.props;
    navigation.navigate('BottomMenu');
  };

  render() {
    const { timer, number } = this.state;
    return (
      <View style={Styles.container}>
        <View>
          <Text style={{ fontSize: 23, fontWeight: 'bold' }}>
            {' '}
            Verify you mobile
            {' '}
          </Text>
        </View>
        <Text allowFontScaling style={{ fontSize: 15, textAlign: 'center' }}>
          {`We have sent an SMS with the OTP code\n to ${number}`}
          <Text style={{ color: 'blue' }}> Wrong number?</Text>
        </Text>

        <View style={{ flexDirection: 'row' }}>
          <TextInput
            autoFocus
            style={{
              borderBottomWidth: 1,
              margin: 5,
              paddingBottom: 0,
              textAlign: 'center'
            }}
            keyboardType="numeric"
            maxLength={1}
            ref={ref => (this.first = ref)}
            onChangeText={value => this.textChanged(value, 'first')}
          />

          <TextInput
            style={{
              borderBottomWidth: 1,
              margin: 5,
              paddingBottom: 0,
              textAlign: 'center'
            }}
            keyboardType="numeric"
            maxLength={1}
            ref={ref => (this.second = ref)}
            onChangeText={value => this.textChanged(value, 'second')}
            onKeyPress={event => this.backSpaceHandler(event, 'second')}
          />

          <TextInput
            style={{
              borderBottomWidth: 1,
              margin: 5,
              paddingBottom: 0,
              textAlign: 'center'
            }}
            keyboardType="numeric"
            ref={ref => (this.third = ref)}
            maxLength={1}
            onChangeText={value => this.textChanged(value, 'third')}
            onKeyPress={event => this.backSpaceHandler(event, 'third')}
          />

          <TextInput
            style={{
              borderBottomWidth: 1,
              margin: 5,
              paddingBottom: 0,
              textAlign: 'center'
            }}
            keyboardType="numeric"
            ref={ref => (this.fourth = ref)}
            maxLength={1}
            onChangeText={value => this.textChanged(value, 'fourth')}
            onKeyPress={event => this.backSpaceHandler(event, 'fourth')}
          />
        </View>

        {/* TIMER */}
        <View>
          <Text allowFontScaling style={{ fontSize: 20, fontWeight: 'bold' }}>
            {timer}
s
          </Text>
        </View>

        {/* RESEND */}
        <View>
          <TouchableOpacity onPress={this.resendCode}>
            <Text style={{ color: 'blue', fontSize: 15 }}>Resend</Text>
          </TouchableOpacity>
        </View>

        {/* VERIFY BUTTON */}
        <TouchableOpacity onPress={this.verifyNumber}>
          <View
            style={{
              backgroundColor: 'rgb(43, 212, 88)',
              borderRadius: 50,
              padding: '3%',
              paddingLeft: '10%',
              paddingRight: '10%',
              marginTop: '5%',
              shadowColor: 'rgba(0,0,0)',
              shadowOffset: {
                height: 30,
                width: 0
              },
              shadowOpacity: 0.7,
              shadowRadius: 10,
              elevation: 10
            }}
          >
            <Text style={{ color: 'white', fontSize: 18 }}>Verify Now</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default NumberVerification;
