import React from 'react';
import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import theme from '../../constants/theme';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ExpensesHeader = () => (
  <View
    style={{
      flexDirection: 'row',
      height: 25,
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 10,
      borderTopColor: theme.colors.gray,
      borderTopWidth: 1
    }}
  >
    <View>
      <Text
        allowFontScaling
        style={{
          fontSize: theme.fonts.base + 2,
          fontFamily: theme.fonts.semibold,
          color: theme.colors.darkerGray
        }}
      >
        Total Expenses
      </Text>
    </View>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Text
        allowFontScaling
        style={{
          marginRight: 5,
          fontSize: theme.fonts.base,
          fontFamily: theme.fonts.regular,
          color: theme.colors.lightBlack
        }}
      >
        This Month
      </Text>
      <TouchableOpacity onPress={() => alert('show previous months')}>
        <Icon name='md-arrow-dropdown' color={`gray`} size={25} />
      </TouchableOpacity>
    </View>
  </View>
);
export default ExpensesHeader;
