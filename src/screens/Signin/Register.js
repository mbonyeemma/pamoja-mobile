import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import styles from './SignInStyles';
// import App from "../../components/PhoneAndPassword/PhoneAndPassword";
import user from '../../../assets/user.png';
import FirstAndLastName from '../../components/FirstAndLastName/FirstAndLastName';
import FormField from '../../components/FormField/FormField';

export default ({
  register,
  fname,
  lname,
  phoneNumber,
  password,
  textChanged,
  loading,
  rightIconClicked,
  visible,
  termsChecked,
  checkUncheckTerms
}) => (
  // <View style={styles.registercontainer}>
  <ScrollView style={{ width: '100%' }}>
    <View
      style={{
        width: '93%',
        height: 60,
        flexDirection: 'row',
        alignSelf: 'center'
      }}
    >
      <View
        style={{
          width: '10%',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Icon name="person" size={25} color="#aaa" style={{}} />
      </View>
      <View style={{ width: '45%' }}>
        <FormField
          styles={{}}
          header="First name"
          value={fname}
          textChanged={e => textChanged(e, 'fname')}
        />
      </View>
      <View style={{ width: '45%' }}>
        <FormField
          styles={{}}
          header="Last name"
          value={lname}
          textChanged={e => textChanged(e, 'lname')}
        />
      </View>
    </View>

    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        // borderWidth: 1,
        width: '90%',
        marginTop: 10,
        alignSelf: 'center'
      }}
    >
      <Icon
        name="email"
        size={25}
        color="#aaa"
        style={{ alignSelf: 'center', marginRight: 10 }}
      />
      <FormField
        placeholder="email address"
        value={phoneNumber}
        textChanged={e => textChanged(e, 'email')}
      />
    </View>

    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        // borderWidth: 1,
        width: '90%',
        marginTop: 10,
        alignSelf: 'center'
      }}
    >
      <Icon
        name="phone"
        size={25}
        color="#aaa"
        style={{ alignSelf: 'center', marginRight: 10 }}
      />
      <FormField
        placeholder="712333444"
        value={phoneNumber}
        textChanged={e => textChanged(e, 'phoneNumber')}
        mobile
      />
    </View>

    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        // borderWidth: 1,
        width: '90%',
        marginTop: 10,
        alignSelf: 'center'
      }}
    >
      <Icon
        name="lock"
        size={25}
        color="#aaa"
        style={{ alignSelf: 'center', marginRight: 10 }}
      />
      <FormField
        textChanged={e => textChanged(e, 'password')}
        placeholder="Enter Password"
        value={password}
        rightIconClicked={rightIconClicked}
        secureTextEntry={visible}
        rightIconName={visible ? 'visibility' : 'visibility-off'}
        rightIcon
      />
    </View>

    <View style={{ height: '1%' }} />
    <View style={styles.termsNConsContainer}>
      <MaterialIcon
        size={20}
        name={termsChecked ? 'check-box' : 'check-box-outline-blank'}
        style={{ marginRight: '2%' }}
        termschecked={termsChecked}
        onPress={checkUncheckTerms}
      />
      <Text style={{ fontSize: 14 }} allowFontScaling>
          I agree to the
        {' '}
      </Text>
      <TouchableWithoutFeedback onPress={() => alert('Terms and Conditions')}>
        <Text style={styles.termsNConsText} allowFontScaling>
            Terms and conditions
        </Text>
      </TouchableWithoutFeedback>
    </View>

    <View
      style={{
        width: '100%',
        // borderWidth: 1,
        borderColor: 'red',
        height: 50,
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 20
      }}
    >
      <Text style={{ bottom: 20 }}>{loading ? 'Loading, Please wait...' : null}</Text>
      <TouchableOpacity
        onPress={register}
        style={{
          height: '100%',
          width: '50%',
          backgroundColor: 'blue',
          borderRadius: 30,
          alignItems: 'center',
          justifyContent: 'center',
          bottom: 20
        }}
      >
        <Text allowFontScaling style={{ fontSize: 20, color: 'white' }}>
            Register
        </Text>
      </TouchableOpacity>
    </View>
  </ScrollView>
  // </View>
);
