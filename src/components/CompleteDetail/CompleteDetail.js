import React from 'react';
import { View, Text } from 'react-native';
import theme from '../../constants/theme';

export default ({ label, answer, style, bold, currencyCode }) => {
  return (
    <View
      style={{
        padding: 2
      }}
    >
      <Text
        style={{
          fontFamily: theme.fonts.regular,
          fontSize: theme.fonts.base,
          color: theme.colors.darkerGray
        }}
      >
        {label}
      </Text>
      <View
        style={{
          flexDirection: currencyCode ? 'row' : 'column',
          justifyContent: currencyCode ? 'space-between' : 'center'
        }}
      >
        {currencyCode && (
          <Text
            allowFontScaling
            style={{
              fontFamily: theme.fonts.regular,
              fontSize: theme.fonts.base
            }}
          >
            {currencyCode}
          </Text>
        )}
        <Text
          allowFontScaling
          style={[
            {
              fontFamily: bold ? theme.fonts.semibold : theme.fonts.regular,
              fontSize: theme.fonts.base,
              color: theme.colors.lightBlack
            },
            style
          ]}
        >
          {answer}
        </Text>
      </View>
    </View>
  );
};
