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
		number: '',
		loading: false
	};

	componentDidMount () {
		const { navigation } = this.props;
		this.setState({ number: navigation.getParam('number') });
	}

	verifyNumber = () => {
		this.setState({ loading: true });
		const { first, second, third, fourth, number: phone_number } = this.state;
		const { navigation } = this.props;
		// if (!first || !second || !third || !fourth) return Alert.alert('Error', 'Fill in all the fields');
		const verificationObject = JSON.stringify({ token: `${first}${second}${third}${fourth}`, phone_number });
		console.log('verificationNumber', verificationObject);

		axios
			.post('https://pamoja-251814.appspot.com/verify', verificationObject, {
				headers: { 'Content-Type': 'application/json', Accept: 'application/json', 'Access-Control-Allow-Origin': '*' }
			})
			.then(() => {
				this.setState({ loading: false });
				navigation.navigate('SignIn', { component: 'signin' });
			})
			.catch((error) => {
				this.setState({ loading: false });
				console.log('Error in verifying number', error.response);
				return Alert.alert('Error', error.response.data.message);
			});
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
		// const { second, third, fourth } = this.state;
		// switch (input) {
		// 	case 'second':
		// 		this.setState({ second: '' });
		// 		if (event.nativeEvent.key === 'Backspace' && second === '') {
		// 			return this.first.focus();
		// 		}
		// 		break;
		// 	case 'third':
		// 		this.setState({ third: '' });
		// 		if (event.nativeEvent.key === 'Backspace' && third === '') {
		// 			return this.second.focus();
		// 		}
		// 		break;
		// 	case 'fourth':
		// 		this.setState({ fourth: '' });
		// 		if (event.nativeEvent.key === 'Backspace' && fourth === '') {
		// 			return this.third.focus();
		// 		}
		// 		break;
		// 	default:
		// 		return this.first.focus();
		// }
	};

	resendCode = () => {
		this.setState({ loading: true });
		const { number } = this.state;
		const codeObject = {
			phone_number: number,
			country_code: '256',
			method: 'sms'
		};

		return axios
			.post('https://pamoja-251814.appspot.com/send_code', codeObject, {
				header: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
			})
			.then((res) => {
				console.log('response from verification', res.data);
				this.setState({ loading: false });
				return Alert.alert('Success', 'A code has been resent to your phone number');
			})
			.catch(() => {
				this.setState({ loading: false });
				return Alert.alert('Error', 'Make Sure you have the right code and number is registered.');
			});
	};

	toggleVerifyNow = () => {
		// clearInterval();
		// this.setState({ verify: false });
	};

	navigateToHome = () => {
		const { navigation } = this.props;
		navigation.navigate('BottomMenu');
	};

	render () {
		const { timer, number, loading } = this.state;
		console.log('state', this.state);
		return (
			<View style={Styles.container}>
				<View>
					<Text style={{ fontSize: 23, fontWeight: 'bold' }}> Verify you mobile </Text>
				</View>
				<Text allowFontScaling style={{ fontSize: 15, textAlign: 'center' }}>
					{/* <TouchableOpacity > */}
					{`We have sent an SMS with the OTP code\n to ${number}`}
						<Text style={{ color: 'blue' }} onPress={() => this.props.navigation.navigate('SignIn', {component: 'register'})}> Wrong number?</Text>
					{/* </TouchableOpacity> */}
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
						ref={(ref) => (this.first = ref)}
						onChangeText={(value) => this.textChanged(value, 'first')}
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
						ref={(ref) => (this.second = ref)}
						onChangeText={(value) => this.textChanged(value, 'second')}
						onKeyPress={(event) => this.backSpaceHandler(event, 'second')}
					/>

					<TextInput
						style={{
							borderBottomWidth: 1,
							margin: 5,
							paddingBottom: 0,
							textAlign: 'center'
						}}
						keyboardType="numeric"
						ref={(ref) => (this.third = ref)}
						maxLength={1}
						onChangeText={(value) => this.textChanged(value, 'third')}
						onKeyPress={(event) => this.backSpaceHandler(event, 'third')}
					/>

					<TextInput
						style={{
							borderBottomWidth: 1,
							margin: 5,
							paddingBottom: 0,
							textAlign: 'center'
						}}
						keyboardType="numeric"
						ref={(ref) => (this.fourth = ref)}
						maxLength={1}
						onChangeText={(value) => this.textChanged(value, 'fourth')}
						onKeyPress={(event) => this.backSpaceHandler(event, 'fourth')}
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
				<View style={{ marginBottom: 10 }}>
					<TouchableOpacity onPress={this.resendCode}>
						<Text style={{ color: 'blue', fontSize: 15 }}>Resend</Text>
					</TouchableOpacity>
				</View>
				{loading ? <Text>Sending code, please wait...</Text> : null}

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
