import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import Styles from './NumberVerificationStyles';
// import console = require('console');

class NumberVerification extends Component {
  state = {
    first: '',
    second: '',
    third: '',
    fourth: '',
    timer: 10,
    verify: true
  }

  textChanged = (value, input) => {
    let focus;
    if (value) {
      switch (input) {
        case 'first':
          if (this.state.first !== '') return this.second.focus();
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
          // focus = this.fourth.focus();
          break;
        default:
          return this.first.focus();
      }
    }
    return focus;
  }

  backSpaceHandler = (event, input) => {
    const { second, third, fourth } = this.state;
    // let focus;
    switch (input) {
      case 'second':
        this.setState({ second: '' });
        if (event.nativeEvent.key === 'Backspace' && second === '') return this.first.focus();
        break;
      case 'third':
        this.setState({ third: '' });
        if (event.nativeEvent.key === 'Backspace' && third === '') return this.second.focus();
        break;
      case 'fourth':
        this.setState({ fourth: '' });
        if (event.nativeEvent.key === 'Backspace' && fourth === '') return this.third.focus();
        break;
      default:
        return this.first.focus();
    }
    // return focus;
  }

  setTimer = () => {
    setInterval(() => {
      this.setState((prev) => {
        if (prev.timer !== 0) {
          return { timer: prev.timer - 1 };
        }

        if (prev.timer === 0) //return {timer: 10}
        clearInterval();
        // return { timer: 10 };
      });
    }, 500);
  }

  toggleVerifyNow = () => {
    // clearInterval();
    // this.setState({ verify: false });
  }

  navigateToHome = () => {
    const { navigation } = this.props;
    navigation.navigate('BottomMenu');
  }

  render() {
    // console.log(this.state)
    const { timer } = this.state;
    return (
      <View style={Styles.container}>
        <View><Text style={{fontSize: 23, fontWeight: 'bold'}}> Verify you mobile </Text></View>
        <Text allowFontScaling style={{ fontSize: 15 }}>We have sent an SMS with the OTP code </Text>
        <Text style={{ color: 'blue' }}>to +25678314030 Wrong number?</Text>

        <View style={{ flexDirection: 'row' }}>
          <TextInput
            autoFocus
            style={{ borderBottomWidth: 1, margin: 5, paddingBottom: 0, textAlign: 'center' }}
            keyboardType="numeric"
            maxLength={1}
            ref={ref => this.first = ref}
            onChangeText={value => this.textChanged(value, 'first')}
          />

          <TextInput
            style={{ borderBottomWidth: 1, margin: 5, paddingBottom: 0, textAlign: 'center' }}
            keyboardType="numeric"
            maxLength={1}
            ref={ref => this.second = ref}
            onChangeText={value => this.textChanged(value, 'second')}
            onKeyPress={event => this.backSpaceHandler(event, 'second')}
          />

          <TextInput
            style={{ borderBottomWidth: 1, margin: 5, paddingBottom: 0, textAlign: 'center' }}
            keyboardType="numeric"
            ref={ref => this.third = ref}
            maxLength={1}
            onChangeText={value => this.textChanged(value, 'third')}
            onKeyPress={event => this.backSpaceHandler(event, 'third')}
          />

          <TextInput
            style={{ borderBottomWidth: 1, margin: 5, paddingBottom: 0, textAlign: 'center' }}
            keyboardType="numeric"
            ref={ref => this.fourth = ref}
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
          <TouchableOpacity onPress={this.setTimer}>
            <Text style={{ color: 'blue', fontSize: 15 }}>Resend</Text>
          </TouchableOpacity>
        </View>

        {/* VERIFY BUTTON */}
        <TouchableOpacity onPress={this.navigateToHome}>
          <View style={{ backgroundColor: 'rgb(43, 212, 88)', borderRadius: 50, padding: '3%', paddingLeft: '10%', paddingRight: '10%', marginTop: '5%' }}>
            <Text style={{ color: 'white', fontSize: 18 }}>Verify Now</Text>
          </View>
        </TouchableOpacity>

      </View>
    );
  }
}

export default NumberVerification;
