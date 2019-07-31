import React from 'react';
import { View } from 'react-native';

import ExpensesHeader from './ExpensesHeader';
import ProgressExpenses from './ProgressExpenses';
import ProgressKeys from './ProgressKeys';
import ExpensesFooter from './ExpensesFooter';

import theme from '../../constants/theme';

const TotalExpenses = ({ showText = false, amount = '35,000,000' }) => (
  <View
    style={{
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 10,
      margin: 20,
      height: 120
    }}
  >
    <ExpensesHeader />
    <ProgressExpenses showText={showText} amount={amount} />
    <ProgressKeys />
    <ExpensesFooter />
  </View>
);
export default TotalExpenses;
