import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
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

	componentDidMount () {
		const { navigation } = this.props;
		const component = navigation.getParam('component') || 'signin';
		console.log('changing state', component);
		this.signInRegistrationHandler(component)
		// this.setState({ mode: component });
	}

	login = () => {
		let { password, phoneNumber: phone_number } = this.state;
		this.setState({loading: true, password: '', phoneNumber: ''})
		const { navigation } = this.props;
		// password = password.trim();
		// phoneNumber = phoneNumber.trim();

		// if (password === '' || phoneNumber === '') {
		// 	return Alert.alert('Error', 'Fill in both Fields');
		// }
		const object = JSON.stringify({
      password,
      phone_number
			// phone_number: `0${phoneNumber}`
		});

		return axios
			.post('https://pamoja-251814.appspot.com/login', object, {
				headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
			})
			.then(() => {
				this.setState({
					phoneNumber: '',
					password: '',
					loading: false
				});
				return navigation.navigate('Home');
			})
			.catch((err) => {
				this.setState({ loading: false });
        console.log('login error', err.response);
        return Alert.alert('Error', 'Worng phone number or password, Try again!');
      });
	};

	register = () => {
		this.setState({ loading: true });
		const { email, password, fname: first_name, lname: last_name, phoneNumber: phone_number, termsChecked } = this.state;
		const { navigation } = this.props;

		if (first_name === '' || password === '' || phone_number === '') {
			this.setState({ loading: false });
			return Alert.alert('Error','First name, phone number and password are required fields');
		}

		if (!termsChecked) {
			this.setState({ loading: false });
			return Alert.alert('Error', 'Please Agree to the terms and conditions');
		}

		const object = JSON.stringify({
			email,
			password,
			first_name,
			last_name,
			country_code: '256',
			method: 'sms',
			phone_number
		});

		console.log('reached here from reg');
		return axios
			.post('https://pamoja-251814.appspot.com/register', object, {
				headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
			})
			.then((res) => {
				this.setState({
					// fname: '',
					lname: '',
					// phoneNumber: '',
					// password: '',
					email: '',
					loading: false
				});
				const codeObject = JSON.stringify({
					phone_number,
					country_code: '256',
					method: 'sms'
				});
				console.log('response here', res);
				// return res
				return axios.post('https://pamoja-251814.appspot.com/send_code', codeObject, {
					headers: { 'Content-Type': 'application/json' }
				});
			})
			.then((res) => {
				console.log('response from registration', res);
				this.setState({ loading: false, mode: 'signin' });

				return navigation.navigate('Verification', { number: '0783140303' });
			})
			.catch((error) => {
				console.log('error from response in registration', error.response);
				this.setState({ loading: false });
				return Alert.alert('Error', error.response.data.message);
			});
	};

	textChangedHandler = (e, name) => {
		this.setState({ [name]: e });
	};

	signInRegistrationHandler = (mode) => this.setState({ mode });

	render () {
		const { mode, password, phoneNumber, fname, lname, email, passwordVisible, loading, termsChecked } = this.state;
		const { navigation } = this.props;
		const signinStyle = mode === 'signin' ? styles.signInActive : styles.signInInactive;
		const registerStyle = mode === 'register' ? styles.registerActive : styles.registerInactive;
		const signOrRegisterComponent =
			mode === 'signin' ? (
				<SignInComponent
					visible={passwordVisible}
					isLoading={loading}
					active={mode}
					login={this.login}
					phoneNumber={phoneNumber}
					password={password}
					textChanged={(e, name) => this.textChangedHandler(e, name)}
					verify={() => navigation.navigate('Verification')}
					rightIconClicked={() =>
						this.setState((prevState) => ({
							passwordVisible: !prevState.passwordVisible
						}))}
				/>
			) : (
				<RegisterComponent
					visible={passwordVisible}
					loading={loading}
					termsChecked={termsChecked}
					checkUncheckTerms={() =>
						this.setState((prevState) => ({
							termsChecked: !prevState.termsChecked
						}))}
					register={this.register}
					email={email}
					fname={fname}
					lname={lname}
					phoneNumber={phoneNumber}
					password={password}
					textChanged={(e, name) => this.textChangedHandler(e, name)}
					rightIconClicked={() =>
						this.setState((prevState) => ({
							passwordVisible: !prevState.passwordVisible
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
						<Image source={logo} resizeMode="stretch" style={{ width: '100%', height: '100%' }} />
					</View>
				</View>
				<View style={styles.buttonContainer}>
					<TouchableOpacity style={signinStyle} onPress={() => this.signInRegistrationHandler('signin')}>
						<Text allowFontScaling style={{ fontSize: 15, color: signFontColor }}>
							Sign In
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={registerStyle} onPress={() => this.signInRegistrationHandler('register')}>
						<Text allowFontScaling style={{ fontSize: 15, color: regFontColor }}>
							Register
						</Text>
					</TouchableOpacity>
				</View>
				<ScrollView
					style={{
						display: 'flex',
						// borderWidth: 4,
						flexGrow: 1,
						borderColor: 'green'
					}}
				>
					<View style={{ width: '100%', flex: 1 }}>{signOrRegisterComponent}</View>
				</ScrollView>
			</View>
		);
	}
}
