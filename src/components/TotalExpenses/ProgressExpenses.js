import React from 'react';
import { View, Text } from 'react-native';

import theme from '../../constants/theme';

const ProgressExpenses = () => (
  <View
    style={{
      flexDirection: 'row',
      backgroundColor: theme.colors.black,
      width: '100%',
      height: 30,
      marginTop: 25,
      borderRadius: 50
    }}
  >
    <View
      style={{
        width: '35%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.red,
        borderRadius: 50
      }}
    >
      <Text
        style={{
          fontSize: theme.fonts.base,
          fontFamily: theme.fonts.regular,
          // justifyContent: 'center',
          // alignItems: 'center',
          color: theme.colors.whiteLight
        }}
      >
        35%
      </Text>
    </View>
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Text
        style={{
          // justifyContent: 'center',
          // alignItems: 'center',
          marginLeft: '20%',
          fontSize: theme.fonts.base,
          fontFamily: theme.fonts.regular,
          color: theme.colors.whiteLight
        }}
      >
        of 43,750,000
      </Text>
    </View>
  </View>
);
export default ProgressExpenses;
