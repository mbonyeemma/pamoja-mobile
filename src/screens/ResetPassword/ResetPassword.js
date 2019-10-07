import React, { Component } from 'react';
import { Text, View, TextInput, Button, SafeAreaView, ToastAndroid } from 'react-native';
import Styles from './ResetPasswordStyles';

export default class ResetPassword extends Component {
	state = {
		number: '',
		password: '',
		confirmPassword: ''
	};

	componentDidMount () {
		const number = this.props.navigation.getParam('number');

		this.setState({ number });
	}

	ResetPassword = () => {
		const { number, password, confirmPassword } = this.state;
		if (password === '' || confirmPassword === '')
			return ToastAndroid.show('Both Fields are required', ToastAndroid.SHORT);

		if (password !== confirmPassword) return ToastAndroid.show('Passwords do not match', ToastAndroid.SHORT);
	};

	render () {
		console.log('this.state', this.state);
		return (
			// <SafeAreaView>
			<View style={Styles.container}>
				<Text style={Styles.infoText} allowFontScaling>
					Enter the new password {'\n'} to update your account
				</Text>
				<TextInput secureTextEntry style={Styles.textInput} onChangeText={(e) => this.setState({ password: e })} />
				<TextInput
					secureTextEntry
					style={Styles.textInput}
					onChangeText={(e) => this.setState({ confirmPassword: e })}
				/>

				<View style={Styles.resetButton}>
					<Button title="Reset Password" color="blue" onPress={this.ResetPassword} />
				</View>

				<View />
			</View>
			// </SafeAreaView>
		);
	}
}
