import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import theme from '../../constants/theme';

const computedStyles = status => {
  if (status === 'Pending') {
    return { color: theme.colors.yellow };
  }
  if (status === 'Completed') {
    return { color: theme.colors.green };
  }
  if (status === 'Cancelled') {
    return { color: 'red' };
  }
  return null;
};
const ItemDetailEnd = ({
  amount = 20300000,
  status = 'Pending',
  transactionDetailHandler,
  transactionDetails = {}
}) => {
  const styles = computedStyles(transactionDetails.position || status);

  return (
    <TouchableOpacity onPress={transactionDetailHandler}>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          height: '70%',
          alignItems: 'center'
        }}
      >
        <View style={{ flexDirection: 'column', paddingRight: '5%' }}>
          <Text style={{ fontSize: 10 }}>
            Ugx{' '}
            <Text style={{ fontWeight: 'bold', fontSize: 14 }}>
              {transactionDetails.amount || amount}
            </Text>
          </Text>
          <Text
            style={[
              {
                fontSize: 10,
                fontFamily: theme.fonts.regular,
                color: theme.colors.yellow,
                alignSelf: 'flex-end'
              },
              styles
            ]}
          >
            {transactionDetails.position || status}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default ItemDetailEnd;
