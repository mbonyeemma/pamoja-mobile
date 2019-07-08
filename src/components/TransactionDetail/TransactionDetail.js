import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './TransactionDetailStyles';
import theme from '../../constants/theme';

const TransactionDetail = ({ transaction }) => {
  const {
    title,
    refId,
    time,
    dueDate,
    from,
    to,
    description,
    transactionStatus
  } = transaction;

  const statusStyle =
    transactionStatus !== 'Pending' ? { color: theme.colors.green } : null;
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <View>
          <Text style={styles.titleText}>{title}</Text>
          <View>
            <Text style={styles.bolderText}>{refId}</Text>
            <Text style={styles.bolderText}>{time}</Text>
            <Text style={styles.bolderText}>{dueDate}</Text>
          </View>
          <View style={{ marginTop: '10%' }}>
            <Text style={styles.regularText}>From</Text>
            <Text style={styles.fromText}>{from}</Text>
          </View>

          <View style={{ marginTop: '10%' }}>
            <Text style={styles.regularText}>To</Text>
            <Text style={styles.fromText}>{to}</Text>
          </View>
          <View
            style={{
              marginTop: '5%',
              width: '100%'
            }}
          >
            <Text style={styles.regularText}>Description</Text>
            <Text style={styles.fromText}>{description}</Text>
          </View>
        </View>

        <View style={styles.transactionStatusContainer}>
          <Text style={styles.transactionStatusText}>{transactionStatus}</Text>
        </View>
      </View>
      <View style={styles.actionButtonsContainer}>
        <TouchableOpacity onPress={() => alert('cancel payment')}>
          <Text style={styles.regularText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginLeft: '20%' }}
          onPress={() => alert('pay now')}
        >
          <Text style={styles.actionPayText}>Pay Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default TransactionDetail;
