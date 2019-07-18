import React from 'react';
import { View, Text } from 'react-native';
import theme from '../../../constants/theme';

export default ({ label, value, currencyCode = 'Ugx' }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '5%',
        paddingBottom: 2
      }}
    >
      <Text
        style={{
          fontSize: theme.fonts.base,
          fontFamily: theme.fonts.regular
        }}
      >
        {label}
      </Text>
      <Text
        style={{
          fontSize: theme.fonts.base,
          fontFamily: theme.fonts.regular
        }}
      >{`${currencyCode} ${value}`}</Text>
    </View>
  );
};
