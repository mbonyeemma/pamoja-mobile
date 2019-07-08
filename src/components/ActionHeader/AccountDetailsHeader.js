import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import theme from '../../constants/theme';

const AccountDetailsHeader = ({navigation}) => (
  <View
    style={{
      flex: 1,
      flexDirection: 'row'
    }}
  >
    <View
      style={{
        flex: 0.5,
        // borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Icon
        name='md-arrow-back'
        color='white'
        size={20}
        onPress={() => alert('go back to accounts')}
      />
      <TouchableOpacity onPress={() => alert('go back to accounts')}>
        <Text
          style={{
            marginLeft: '5%',
            color: theme.colors.white,
            fontSize: theme.fonts.base + 2,
            fontFamily: theme.fonts.regular
          }}
        >
          Accounts
        </Text>
      </TouchableOpacity>
    </View>
    <View
      style={{
        flex: 1,
        // borderColor: 'red',
        // borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Text
        style={{
          color: theme.colors.white,
          fontFamily: theme.fonts.semibold,
          fontSize: theme.fonts.base + 2
        }}
      >
        Account Details
      </Text>
    </View>
    <View
      style={{
        flex: 0.4,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Icon style={{ marginLeft: 4 }} name='md-more' color='white' size={30} onPress={() => navigation.navigate('CreateAccount')}/>
    </View>
  </View>
);
export default AccountDetailsHeader;
