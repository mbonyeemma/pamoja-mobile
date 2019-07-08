import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import theme from '../../constants/theme';

const ActionTopHeader = ({ complete }) => (
  <View
    style={{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}
  >
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <TouchableOpacity onPress={() => alert('cancel')}>
        <Text
          style={{
            marginLeft: '2%',
            color: theme.colors.white,
            fontSize: theme.fonts.base + 2,
            fontFamily: theme.fonts.regular
          }}
        >
          Cancel
        </Text>
      </TouchableOpacity>
    </View>

    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '2%'
      }}
    >
      <TouchableOpacity onPress={complete}>
        <Text
          style={{
            color: theme.colors.white,
            fontSize: theme.fonts.base + 2,
            fontFamily: theme.fonts.regular
          }}
        >
          Done
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default ActionTopHeader;
