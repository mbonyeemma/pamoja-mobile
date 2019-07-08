import React from 'react';
import { View, Text } from 'react-native';

import theme from '../../constants/theme';

const ExpensesFooter = () => (
  <View
    style={{
      flexDirection: 'row',
      marginTop: 10,
      paddingBottom: 10,
      borderBottomColor: theme.colors.gray,
      borderBottomWidth: 1,
      width: '100%',
      // justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    <Text
      style={{
        fontSize: theme.fonts.base,
        fontFamily: theme.fonts.regular,
        color: theme.colors.lighterBlack
      }}
    >
      Total money spent
    </Text>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5
      }}
    >
      <Text
        style={{
          fontSize: theme.fonts.base,
          fontFamily: theme.fonts.regular,
          color: theme.colors.lighterBlack
        }}
      >
        Ugx
      </Text>
      <Text
        style={{
          fontSize: theme.fonts.base,
          fontFamily: theme.fonts.semibold,
          color: theme.colors.lighterBlack,
          marginLeft: 2
        }}
      >
        612,500
      </Text>
    </View>
  </View>
);
export default ExpensesFooter;
