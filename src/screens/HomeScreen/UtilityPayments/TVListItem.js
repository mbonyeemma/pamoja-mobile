import React from 'react';
import { View, Text } from 'react-native';
import theme from '../../../constants/theme';

export default ({
  firstText = 'Recharge with Ugx 328,000 for a',
  secondText = '3 Months bundle and get 35 Channels',
  amount = '328,000',
  currencyCode = 'Ugx'
}) => {
  const boldStyles = {
    fontSize: theme.fonts.base,
    fontFamily: theme.fonts.semibold
  };
  const lightStyles = {
    fontSize: theme.fonts.base,
    fontFamily: theme.fonts.regular
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.darkGray,
        borderColor: 'red',
        paddingLeft: '4%',
        paddingRight: '4%',
        paddingTop: '4%'
      }}
    >
      <View>
        <Text style={boldStyles}>{`${firstText}\n${secondText}`}</Text>
        <Text
          style={lightStyles}
        >{`Terms and conditions; \nPlan will be updated within\n 18 hrs`}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={[lightStyles, { color: theme.colors.black }]}>
          {currencyCode}
        </Text>
        <Text
          style={[boldStyles, { color: theme.colors.black, paddingLeft: 5 }]}
        >
          {amount}
        </Text>
      </View>
    </View>
  );
};
