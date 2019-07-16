import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ScrollableCards from '../ScrollableCards/ScrollableCards';
import theme from '../../constants/theme';

export default ({ labelTitle = 'From', data = [], style = {} }) => (
  <View
    style={
      ([
        {
          flex: 3,
          borderBottomColor: theme.colors.darkGray,
          borderBottomWidth: 1,
          paddingTop: '5%',
          paddingBottom: '10%'
        }
      ],
      style)
    }
  >
    <Text
      style={{
        paddingLeft: '5%',
        paddingRight: '5%',
        fontSize: theme.fonts.base + 2,
        fontFamily: theme.fonts.semibold
      }}
    >
      {labelTitle}
    </Text>
    <View
      style={{
        flexDirection: 'row',
        paddingLeft: '5%',
        paddingRight: '5%',
        paddingTop: 5
      }}
    >
      <Icon
        name={`md-card`}
        size={20}
        color={`gray`}
        style={{ paddingRight: 15 }}
      />
      <Text
        style={{
          fontSize: theme.fonts.base,
          fontFamily: theme.fonts.regular
        }}
      >
        Select Account
      </Text>
    </View>
    <ScrollableCards items={data} />
  </View>
);
