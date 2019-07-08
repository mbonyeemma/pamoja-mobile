import React from 'react';
import { View, Text } from 'react-native';

import theme from '../../constants/theme';

const ActionBottomHeader = props => (
  <View>
    <Text
      style={{
        marginLeft: '2%',
        fontFamily: theme.fonts.semibold,
        fontSize: theme.fonts.base + 10,
        color: theme.colors.lightWhite
      }}
    >
      {props.bottomText}
    </Text>
  </View>
);
export default ActionBottomHeader;
