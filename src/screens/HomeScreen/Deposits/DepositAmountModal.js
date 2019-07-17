import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput
} from 'react-native';
import theme from '../../../constants/theme';

export default ({ goToDeposit, cancel }) => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View
        style={{
          paddingLeft: '10%',
          paddingRight: '10%',
          paddingTop: '10%'
        }}
      >
        <Text
          style={{
            fontSize: theme.fonts.base,
            fontFamily: theme.fonts.regular,
            color: theme.colors.gray
          }}
        >
          Amount(Ugx)
        </Text>
        <TextInput
          style={{
            fontSize: theme.fonts.base,
            fontFamily: theme.fonts.regular,
            color: theme.colors.lightBlack,
            borderBottomColor: theme.colors.darkGray,
            borderBottomWidth: 1
          }}
          keyboardType={`numeric`}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
          paddingBottom: 10
        }}
      >
        <TouchableOpacity onPress={cancel}>
          <Text
            style={{
              fontSize: theme.fonts.base,
              fontFamily: theme.fonts.regular
            }}
          >
            Cancel
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ paddingLeft: 30 }} onPress={goToDeposit}>
          <Text
            style={{
              fontSize: theme.fonts.base,
              fontFamily: theme.fonts.regular,
              paddingRight: 40
            }}
          >
            Ok
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
