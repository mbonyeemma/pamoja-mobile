import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import theme from '../../constants/theme';

export default ({
  openApprovalsModal,
  numberOfApprovals = '3',
  label = 'View Outstanding Approvals'
}) => (
  <View
    style={{
      flexDirection: 'row',
      width: '100%',
      height: 30,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 30,
      marginRight: 10,
      marginBottom: 10,
      marginTop: 25
    }}
  >
    <View
      style={{
        width: 20,
        justifyContent: 'center',
        borderColor: theme.colors.white,
        borderWidth: 1,
        backgroundColor: theme.colors.magento,
        alignItems: 'center',
        borderRadius: 100
      }}
    >
      <Text
        style={{
          fontSize: 10,
          fontFamily: theme.fonts.regular,
          color: theme.colors.white
        }}
      >
        {numberOfApprovals}
      </Text>
    </View>
    <View style={{ flex: 1, marginLeft: '3%' }}>
      <TouchableOpacity onPress={openApprovalsModal}>
        <Text
          style={{
            fontSize: theme.fonts.base,
            fontFamily: theme.fonts.regular,
            color: theme.colors.blue
          }}
        >
          {label}
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);
