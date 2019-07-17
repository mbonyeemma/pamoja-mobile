import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AccountListItem from '../../../components/AccountListItem/AccountListItem';
import AmountField from '../../../components/AmountField/AmountField';
import FormField from '../AirtimeRecharge/FormField';

import theme from '../../../constants/theme';

const data = [
  {
    style: { backgroundColor: 'blue' },
    accountName: 'Tusasanya Spending',
    accountType: 'Current Account',
    time: '25 mins ago',
    amount: '30,000'
  },
  {
    style: { backgroundColor: 'red' },
    accountName: 'Charlie',
    accountType: 'Joint Account',
    time: '1 day ago',
    amount: '3,500'
  },
  {
    style: { backgroundColor: 'green' },
    accountName: 'Cardi',
    accountType: 'Fixed Account',
    time: '3 months ago',
    amount: '7,000'
  }
];

export default class DepositModal extends Component {
  render() {
    return (
      <ScrollView
        style={{
          flex: 1,
          borderTopRightWidth: 1,
          borderTopLeftWidth: 1,
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30
        }}
      >
        <Text
          style={{
            fontSize: theme.fonts.base + 2,
            fontFamily: theme.fonts.semibold,
            color: theme.colors.lightBlack,
            paddingLeft: '5%',
            paddingTop: '5%',
            paddingRight: '5%'
          }}
        >
          From
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            paddingLeft: '5%',
            paddingTop: '5%',
            paddingRight: '5%'
          }}
        >
          <Icon name={`md-call`} size={25} style={{ paddingRight: 10 }} />
          <FormField
            mobile
            placeholder='774904567'
            header='MM Number/Visa Card'
          />
        </View>

        <AccountListItem
          labelTitle={`To`}
          data={data}
          style={{
            borderTopColor: theme.colors.darkGray,
            borderTopWidth: 1,
            marginBottom: 10
          }}
        />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <AmountField
            hideKeyboard
            amount={`12,500,000`}
            icon={`md-cash`}
            openAmountField={this.props.openAmountField}
          />
        </View>
      </ScrollView>
    );
  }
}
