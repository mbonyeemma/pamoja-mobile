import React from 'react';
import { View, Text } from 'react-native';

import theme from '../../constants/theme';

const AdminButton = () => (
  <View
    style={{
      flex: 1,
      height: '100%',
      backgroundColor: 'yellow',
      borderColor: 'black',
      borderWidth: 1,
      justifyContent: 'flex-end',
      alignItems: 'center'
    }}
  >
    <TouchableOpacity
      style={{
        width: '100%',
        height: '40%',
        borderColor: 'gray',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        marginBottom: 5,
        padding: 5
      }}
    >
      <Text
        style={{
          fontSize: 10,
          fontFamily: theme.fonts.regular
        }}
      >
        Admin
      </Text>
    </TouchableOpacity>
  </View>
);
export default AdminButton;
