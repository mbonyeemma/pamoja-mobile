import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import AccountListItem from '../../../components/AccountListItem/AccountListItem';
import DetailComponent from '../../../components/DetailComponent/DetailComponent';
import AmountField from '../../../components/AmountField/AmountField';
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

export default ({ submitTransfer }) => (
  <ScrollView
    style={{
      flex: 1,
      backgroundColor: theme.colors.white,
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20
    }}
  >
    <AccountListItem labelTitle={`From`} data={data} />
    <View
      style={{
        flex: 3.5,
        borderTopWidth: 1,
        borderTopColor: theme.colors.darkGray,
        marginTop: 10
      }}
    >
      <ScrollView>
        <View
          style={{
            paddingLeft: '5%',
            paddingRight: '5%',
            paddingTop: '5%',
          }}
        >
          <Text
            style={{
              paddingLeft: 5,
              fontSize: theme.fonts.base + 2,
              fontFamily: theme.fonts.semibold
            }}
          >
            To
          </Text>
          {[
            { label: 'To', value: 'Cardi Niwamanya', icon: 'md-contact' },
            {
              label: 'Date of payment',
              value: '23 Jun 2019',
              icon: 'md-calendar'
            },
            {
              label: 'Description',
              value: 'Payment for Feb Sales force team'
            }
          ].map(({ label, value, icon }) => (
            <DetailComponent
              key={Math.random()}
              style={{ paddingTop: 18 }}
              label={label}
              value={value}
              icon={icon}
            />
          ))}
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.colors.darkGray,
            paddingTop: 40,
            paddingBottom: 40
          }}
        >
          <AmountField
            amount={`12,500,000`}
            icon={`md-cash`}
            submitTransfer={submitTransfer}
          />
        </View>
      </ScrollView>
    </View>
  </ScrollView>
);
