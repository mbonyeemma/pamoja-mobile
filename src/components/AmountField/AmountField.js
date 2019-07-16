import React from 'react';
import { View, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import theme from '../../constants/theme';

export default ({
  amount,
  icon,
  submitTransfer,
  openAmountField,
  hideKeyboard
}) => {
  return (
    <SafeAreaView
      style={{
        height: 50,
        width: 250,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: theme.colors.darkGray,
        backgroundColor: theme.colors.white
      }}
    >
      <TextInput
        style={{
          paddingLeft: 30,
          fontSize: theme.fonts.base,
          fontFamily: theme.fonts.regular,
          color: theme.colors.lightBlack
        }}
        placeholder={`Amount(Ugx)`}
        onFocus={openAmountField && openAmountField}
        keyboardType={`numeric`}
      />
      <TouchableOpacity
        style={{
          position: 'absolute',
          backgroundColor: theme.colors.blue,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 25,
          height: '90%',
          width: '25%',
          top: 2,
          bottom: 2,
          right: 2
        }}
        onPress={submitTransfer}
      >
        <Icon name={icon} size={20} color={`white`} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};
