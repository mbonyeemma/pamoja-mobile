import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import axios from 'axios';
import styles from './SignInStyles';
import logo from '../../../assets/logo.png';
import SignInComponent from './SignIn';
import RegisterComponent from './Register';

export default class SignInReg extends Component {
  state = {
    mode: '',
    fname: '',
    lname: '',
    phoneNumber: '',
    password: '',
    email: '',
    passwordVisible: true,
    loading: false,
    termsChecked: false
  };

  componentDidMount() {
    const { navigation } = this.props;
    const component = navigation.getParam('component');
    return this.setState({ mode: component });
  }

  login = () => {
    let { password, phoneNumber } = this.state;
    const { navigation } = this.props;
    password = password.trim();
    phoneNumber = phoneNumber.trim();

    if (password === '' || phoneNumber === '') { return Alert.alert('Error', 'Fill in both Fields'); }
    const object = {
      password,
      phone_number: `0${phoneNumber}`,
    };

    return axios
      .post('https://pamoja-251814.appspot.com/login', object)
      .then(() => {
        this.setState({
          phoneNumber: '',
          password: '',
        });
        return navigation.navigate('Home');
      })
      .catch(() => Alert.alert('Error', 'Worng phone number or password, Try again!'));
  };

  register = () => {
    this.setState({ loading: true });
    const { email, password, fname, lname, phoneNumber, termsChecked } = this.state;
    const { navigation } = this.props;

    if (email === '' || lname === '' || fname === '' || password === '' || phoneNumber === '') {
      this.setState({ loading: false });
      return Alert.alert('Fill in all the fields');
    }

    if (!termsChecked) {
      this.setState({ loading: false });
      return Alert.alert('Error', 'Please Agree to the terms and conditions');
    }

    const object = {
      email,
      password,
      first_name: fname,
      last_name: lname,
      country_code: '256',
      method: 'sms',
      phone_number: `0${phoneNumber}`,
    };

    return axios
      .post('https://pamoja-251814.appspot.com/register', object)
      .then(() => {
        this.setState({
          fname: '',
          lname: '',
          phoneNumber: '',
          password: '',
          email: '',
          loading: false
        });
        const codeObject = {
          phone_number: object.phone_number,
          country_code: '256',
          method: 'sms'
        };
        return axios
          .post('https://pamoja-251814.appspot.com/send_code', codeObject)
          .then(() => {
            this.setState({ loading: false });

            return navigation.navigate('Verification', { number: object.phone_number });
          });
      })
      .catch(() => {
        this.setState({ loading: false });
        return Alert.alert('Error', 'Something went wrong. Make sure filled in all field, \npassword is longer then 6 characters and email is in right format, try again')
      });
  };

  textChangedHandler = (e, name) => {
    this.setState({ [name]: e });
  };

  signInRegistrationHandler = mode => this.setState({ mode });

  render() {
    const {
      mode, password, phoneNumber, fname, lname, email, passwordVisible, loading, termsChecked
    } = this.state;
    const { navigation } = this.props;
    const signinStyle = mode === 'signin' ? styles.signInActive : styles.signInInactive;
    const registerStyle = mode === 'register' ? styles.registerActive : styles.registerInactive;
    const signOrRegisterComponent = mode === 'signin' ? (
      <SignInComponent
        visible={passwordVisible}
        active={mode}
        login={this.login}
        phoneNumber={phoneNumber}
        password={password}
        textChanged={(e, name) => this.textChangedHandler(e, name)}
        verify={() => navigation.navigate('Verification')}
        rightIconClicked={() => this.setState(prevState => ({
          passwordVisible: !prevState.passwordVisible,
        }))}
      />
    ) : (
      <RegisterComponent
        visible={passwordVisible}
        loading={loading}
        termsChecked={termsChecked}
        checkUncheckTerms={() => this.setState(prevState => ({
          termsChecked: !prevState.termsChecked,
        }))}
        register={this.register}
        email={email}
        fname={fname}
        lname={lname}
        phoneNumber={phoneNumber}
        password={password}
        textChanged={(e, name) => this.textChangedHandler(e, name)}
        rightIconClicked={() => this.setState(prevState => ({
          passwordVisible: !prevState.passwordVisible,
        }))}
      />
    );
    const signFontColor = mode === 'signin' ? 'rgb(0, 58, 238)' : 'black';
    const regFontColor = mode === 'register' ? 'rgb(0, 58, 238)' : 'black';
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
            <Image
              source={logo}
              resizeMode="stretch"
              style={{ width: '100%', height: '100%' }}
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={signinStyle}
            onPress={() => this.signInRegistrationHandler('signin')}
          >
            <Text
              allowFontScaling
              style={{ fontSize: 15, color: signFontColor }}
            >
              Sign In
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={registerStyle}
            onPress={() => this.signInRegistrationHandler('register')}
          >
            <Text
              allowFontScaling
              style={{ fontSize: 15, color: regFontColor }}
            >
              Register
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          style={{
            display: 'flex',
            // borderWidth: 4,
            flexGrow: 1,
            borderColor: 'green',
          }}
        >
          <View style={{ width: '100%', flex: 1 }}>
            {signOrRegisterComponent}
          </View>
        </ScrollView>
      </View>
    );
  }
}
