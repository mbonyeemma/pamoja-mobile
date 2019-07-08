import React from 'react';
import { View, Text } from 'react-native';

import theme from '../../constants/theme';

const ItemDetailEnd = () => (
  <View
    style={{
      borderWidth: 2,
      borderColor: 'yellow',
      marginLeft: '5%',
      marginRight: '5%',
      width: '90%'
    }}
  >
    <View style={{ height: 100 }}>
      <Text
        style={{
          fontSize: theme.fonts.base + 2,
          fontFamily: theme.fonts.semibold
        }}
      >
        Account Members
      </Text>
      <Text
        style={{
          fontSize: theme.fonts.base,
          fontFamily: theme.fonts.regular
        }}
      >
        Each member is supposed to contribute towards clearing a defined amount
        of money as agreed by the admins.
      </Text>
    </View>
  </View>
);
export default ItemDetailEnd;
