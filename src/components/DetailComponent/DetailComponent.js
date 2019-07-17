import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import theme from '../../constants/theme';

export default ({ label, value, icon, style = {} }) => (
  <TouchableOpacity onPress={() => alert('halep')}>
    <View
      style={[
        {
          borderBottomColor: theme.colors.darkGray,
          borderBottomWidth: 1,
          paddingLeft: 5,
          paddingRight: 5
        },
        style
      ]}
    >
      <Text
        style={{
          fontSize: theme.fonts.base,
          fontFamily: theme.fonts.regular,
          paddingLeft: 10,
          color: theme.colors.gray
        }}
      >
        {label}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingLeft: 10,
          paddingRight: 10
        }}
      >
        <Text
          style={{
            fontSize: theme.fonts.base + 1,
            fontFamily: theme.fonts.regular,
            color: theme.colors.lightBlack
          }}
        >
          {value}
        </Text>
        {icon && <Icon name={icon} size={25} color={`blue`} />}
      </View>
    </View>
  </TouchableOpacity>
);
