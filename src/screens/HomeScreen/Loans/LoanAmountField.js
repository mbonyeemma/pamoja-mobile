import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import LoanRequestBanner from './LoanRequestBanner';
import FormField from '../AirtimeRecharge/FormField';
import theme from '../../../constants/theme';

export default ({ onDone }) => {
  return (
    <ScrollView style={{ flex: 1, borderRadius: 30, paddingTop: '5%' }}>
      <View>
        <LoanRequestBanner
          label={`You can guarantee a Joan Ester Kirabo upto`}
        />
        <FormField
          header='Amount(Ugx)'
          placeholder=''
          textChanged={() => null}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          padding: 5,
          width: '100%',
          marginBottom: 2,
          justifyContent: 'flex-end',
          alignItems: 'center'
        }}
      >
        {['Cancel', 'Ok'].map((value, index) => (
          <TouchableOpacity
            style={{
              paddingLeft: 50,
              paddingTop: 2,
              paddingRight: index === 1 ? 25 : 0
            }}
            key={Math.random()}
            onPress={onDone}
          >
            <Text
              style={{
                fontSize: theme.fonts.base + 2,
                fontFamily: theme.fonts.regular
              }}
            >
              {value}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};
