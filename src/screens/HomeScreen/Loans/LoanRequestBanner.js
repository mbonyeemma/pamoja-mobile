import React from 'react';
import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import theme from '../../../constants/theme';

const LoanRequestBanner = ({ label }) => {
  return (
    <View
      style={{
        backgroundColor: theme.colors.blue,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Icon name={`md-alert`} size={25} color={`white`} />
        <View style={{ paddingLeft: 10 }}>
          <Text
            style={{
              fontSize: theme.fonts.base,
              fontFamily: theme.fonts.regular,
              color: theme.colors.white
            }}
          >
            {label || `Maximum loan Request`}
          </Text>
          <Text
            style={{
              fontSize: theme.fonts.base,
              fontFamily: theme.fonts.regular,
              color: theme.colors.white
            }}
          >
            Ugx 800,000
          </Text>
        </View>
      </View>
    </View>
  );
};
export default LoanRequestBanner;
