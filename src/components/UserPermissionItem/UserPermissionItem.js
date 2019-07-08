import React from 'react';
import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import theme from '../../constants/theme';

const UserPermissionItem = props => (
  <View
    style={{
      flexDirection: 'row',
      width: '90%',
      marginTop: 20,
      marginLeft: 20,
      marginRight: 20,
      borderBottomColor: theme.colors.darkGray,
      borderBottomWidth: 1,
      justifyContent: 'space-between',
      alignItems: 'center'
    }}
  >
    <Text
      style={{
        flex: 3,
        fontSize: theme.fonts.base,
        fontFamily: theme.fonts.regular
      }}
    >
      {props.name}
    </Text>
    <View
      style={{
        flex: 0.7,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
      }}
    >
      <Text
        style={{
          fontSize: theme.fonts.base,
          fontFamily: theme.fonts.regular
        }}
      >
        {props.number}
      </Text>
      <Icon
        name='md-arrow-dropdown'
        size={20}
        color={theme.colors.black}
        onPress={() => alert('dropdown list')}
      />
    </View>
  </View>
);
export default UserPermissionItem;
