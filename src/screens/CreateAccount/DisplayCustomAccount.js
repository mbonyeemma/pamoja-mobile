import React from 'react';
import { View, Text } from 'react-native';

import UserPermissionItem from '../../components/UserPermissionItem/UserPermissionItem';

import theme from '../../constants/theme';
import styles from './CreateAccountStyles';

const DisplayCustomAccount = ({ data }) => (
  <View style={{ paddingLeft: '5%', paddingRight: '5%' }}>
    <View>
      <Text style={styles.customAccountContentTitle}>Account Limitations</Text>
      <Text style={[styles.regularBaseFonted, { color: theme.colors.gray }]}>
        This account is limited to...
      </Text>
    </View>
    <View style={{ paddingLeft: '5%', paddingRight: '5%' }}>
      {data.map(({ id, name, number }) => (
        <UserPermissionItem key={id} name={name} number={number} />
      ))}
      {[
        {
          id: 1,
          label: 'min deposit per month(Ugx)',
          amount: '50,000'
        },
        {
          id: 2,
          label: 'max deposit per month(Ugx)',
          amount: '800,000'
        }
      ].map(({ id, label, amount }) => (
        <View key={id} style={styles.otherPermissionItem}>
          <Text style={styles.regularBaseFonted}>{label}</Text>
          <Text style={styles.regularBaseFonted}>{amount}</Text>
        </View>
      ))}
      <UserPermissionItem
        key={10}
        name={`change of limitations per month`}
        number={`2`}
      />
    </View>
  </View>
);

export default DisplayCustomAccount;
