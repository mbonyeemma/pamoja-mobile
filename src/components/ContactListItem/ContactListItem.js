import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import TransactionDetails from '../../screens/HomeScreen/TransactionDetails';
import Icon from 'react-native-vector-icons/Ionicons';
import theme from '../../constants/theme';

export default ({ active, name, pressed }) => {
  return (
    <TouchableOpacity onPress={pressed}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {active ? (
          <Icon
            name='md-checkmark-circle'
            size={20}
            color={theme.colors.green}
            style={{ paddingRight: 20 }}
          />
        ) : (
          <View style={{ paddingRight: 35 }} />
        )}
        <TransactionDetails showMore={false} name={name} />
      </View>
    </TouchableOpacity>
  );
};
