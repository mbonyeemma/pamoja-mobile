import React from 'react';
import { View, Text } from 'react-native';

import theme from '../../constants/theme';

const { red, blue } = theme.colors;

const ProgressKeys = () => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'center',
      margin: 10,
      width: '50%',
      height: 20
    }}
  >
    {[{ id: 1, name: 'Spent' }, { id: 2, name: 'Earned' }].map(
      (item, index) => {
        const styleColor =
          item.id === 2
            ? { backgroundColor: theme.colors.lighterBlack }
            : { backgroundColor: theme.colors.red };
        return (
          <View
            key={item.id}
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: '20%'
            }}
          >
            <View
              style={[
                {
                  height: 10,
                  width: 10,
                  borderRadius: 10
                },
                styleColor
              ]}
            />
            <Text
              style={{
                marginLeft: 5,
                fontFamily: theme.fonts.regular,
                fontSize: theme.fonts.base,
                color: theme.colors.lightBlack
              }}
            >
              {item.name}
            </Text>
          </View>
        );
      }
    )}
  </View>
);
export default ProgressKeys;
