import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import theme from '../../../constants/theme';

export default ({ label, confirmAction }) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.darkGray,
        paddingTop: '20%',
        paddingBottom: '10%'
      }}
    >
      <TouchableOpacity
        style={{
          padding: 20,
          width: '50%',
          backgroundColor: theme.colors.blue,
          borderRadius: 25,
          justifyContent: 'center',
          alignItems: 'center'
        }}
        onPress={confirmAction}
      >
        <Text
          style={{
            fontFamily: theme.fonts.regular,
            fontSize: theme.fonts.base,
            color: theme.colors.white
          }}
        >
          {label}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
