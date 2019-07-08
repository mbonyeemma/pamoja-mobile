import React from 'react';
import { View } from 'react-native';

import ExpensesHeader from './ExpensesHeader';
import ProgressExpenses from './ProgressExpenses';
import ProgressKeys from './ProgressKeys';
import ExpensesFooter from './ExpensesFooter';

import theme from '../../constants/theme';

const TotalExpenses = () => (
  <View
    style={{
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 10,
      width: '90%',
      margin: 20,
      height: 120
    }}
  >
    <ExpensesHeader />
    <ProgressExpenses />
    <ProgressKeys />
    <ExpensesFooter />
  </View>
);
export default TotalExpenses;
