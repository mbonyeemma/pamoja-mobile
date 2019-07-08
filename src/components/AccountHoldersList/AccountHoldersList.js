import React from 'react';
import { View, Text } from 'react-native';

import AdminButton from './AdminButton';
import ItemDetailEnd from './ItemDetailEnd';

import theme from '../../constants/theme';

const backup = () => (
  <View
    style={{
      flex: 2,
      flexDirection: 'row',
      height: '100%',
      backgroundColor: 'yellow',
      borderColor: 'black',
      borderWidth: 1,
      justifyContent: 'center',
      padding: 4
      // alignItems: 'center'
    }}
  >
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: 'row',
          height: '50%',
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: 'red',
          borderWidth: 1
        }}
      >
        <Text
          style={{
            fontSize: theme.fonts.base,
            fontFamily: theme.fonts.regular,
            marginRight: 5
          }}
        >
          Ugx
        </Text>
        <Text
          style={{
            fontSize: theme.fonts.base,
            fontFamily: theme.fonts.regular
          }}
        >
          16000
        </Text>
      </View>
      <View
        style={{
          height: '10%',
          justifyContent: 'center',
          alignItems: 'flex-end',
          paddingRight: 5
        }}
      >
        <Text
          style={{
            fontSize: theme.fonts.base,
            fontFamily: theme.fonts.regular
          }}
        >
          Pending
        </Text>
      </View>
    </View>
    <View
      style={{
        flex: 0.3,
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Text
        style={{
          fontSize: theme.fonts.base,
          fontFamily: theme.fonts.regular
        }}
      >
        >
      </Text>
    </View>
  </View>
);

const AccountHoldersList = props => (
  <View
    style={{
      flex: 1,
      width: '90%',
      marginLeft: '5%',
      marginRight: '5%',
      height: '15%',
      borderColor: 'red',
      borderWidth: 1,
      flexDirection: 'row',
      paddingBottom: 10
    }}
  >
    <View
      style={{
        flex: 1,
        height: '100%',
        backgroundColor: 'yellow',
        borderColor: 'black',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
      }}
    >
      <Text>1</Text>
    </View>
    <View
      style={{
        flex: 4,
        height: '100%',
        backgroundColor: 'green',
        borderColor: 'black',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 10
      }}
    >
      <Text
        style={{
          fontSize: theme.fonts.base,
          fontFamily: theme.fonts.regular
        }}
      >
        Me
      </Text>
      <Text
        style={{
          fontSize: theme.fonts.base,
          fontFamily: theme.fonts.regular
        }}
      >
        Cleared 96000 of 80000
      </Text>
    </View>
    {props.user ? <AdminButton /> : <ItemDetailEnd />}
  </View>
);
export default AccountHoldersList;
