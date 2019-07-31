import React from 'react';
import { View, Text } from 'react-native';

import theme from '../../constants/theme';

const ProgressExpenses = ({
  style,
  percentage,
  showText,
  amount,
  background,
  progressColor
}) => (
  <View
    style={[
      {
        flexDirection: 'row',
        backgroundColor: background || theme.colors.black,
        width: '100%',
        height: 30,
        marginTop: 25,
        borderRadius: 50
      },
      style
    ]}
  >
    <View
      style={{
        width: percentage || '35%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: progressColor || theme.colors.red,
        borderRadius: 50
      }}
    >
      <Text
        style={{
          fontSize: theme.fonts.base,
          fontFamily: theme.fonts.regular,
          color: theme.colors.whiteLight
        }}
      >
        {showText ? percentage || `35%` : null}
      </Text>
    </View>
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Text
        style={{
          marginLeft: '20%',
          fontSize: theme.fonts.base,
          fontFamily: theme.fonts.regular,
          color: theme.colors.whiteLight
        }}
      >
        {showText ? `of ${amount}` : null}
      </Text>
    </View>
  </View>
);
export default ProgressExpenses;
