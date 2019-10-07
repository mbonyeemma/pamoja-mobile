import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import styles from './SignInStyles';
import FormField from '../../components/FormField/FormField';
import navigation from '../../navigation';

export default ({ login, phoneNumber, password, textChanged, verify, rightIconClicked, visible, isLoading, navig
}) => (
  <View style={{}}>
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        // borderWidth: 1,
        width: '90%',
        marginTop: 30,
        alignSelf: 'center',
      }}
    >
      <Icon name="phone" size={25} color="#aaa" style={{ marginRight: 10 }} />
      <FormField
        placeholder="7888888888"
        mobile
        header="Phone Number"
        textChanged={e => textChanged(e, 'phoneNumber')}
        value={phoneNumber}
      />
    </View>

    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        // borderWidth: 1,
        width: '90%',
        marginTop: 10,
        alignSelf: 'center',
      }}
    >
      <Icon
        name="lock"
        size={25}
        color="#aaa"
        style={{ alignSelf: 'center', marginRight: 10 }}
      />
      <FormField
        rightIcon
        rightIconName={visible ? 'visibility' : 'visibility-off'}
        placeholder="Password"
        value={password}
        textChanged={e => textChanged(e, 'password')}
        rightIconClicked={rightIconClicked}
        secureTextEntry={visible}
      />
    </View>

    <View
      style={{
        width: '100%',
        // borderWidth: 1,
        borderColor: 'red',
        height: 50,
        alignItems: 'center',
        marginTop: 40,
      }}
      >
        {isLoading ? <Text>Logging in, Please wait</Text> : null}
      <TouchableOpacity
        onPress={login}
        style={{
          height: '100%',
          width: '50%',
          backgroundColor: 'blue',
          borderRadius: 30,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text allowFontScaling style={{ fontSize: 20, color: 'white' }}>
          Sign In
        </Text>
      </TouchableOpacity>
    </View>

    <View
      style={{
        width: '100%',
        // borderWidth: 1,
        // borderColor: "red",
        height: 60,
        alignItems: 'center',
        marginTop: 30,
      }}
    >
      <TouchableOpacity
        onPress={() => navig()}
        style={{
          height: '100%',
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text allowFontScaling style={{ fontSize: 15, color: 'blue' }}>
          Forgot Password?
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);
