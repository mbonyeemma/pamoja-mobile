import React, { Component } from 'react';
import {
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Header from '../../components/Header/Header';
import TotalExpenses from '../../components/TotalExpenses/TotalExpenses';
import AccountHolder from '../../components/AccountHolder/AccountHolder';
import TransactionItem from '../../components/TransactionItem/TransactionItem';
import AccountDetailsHeader from '../../components/ActionHeader/AccountDetailsHeader';
import Card from '../../components/Card/Card';

import theme from '../../constants/theme';

class CurrentAccount extends Component {
  topHeader = <AccountDetailsHeader />;

  render() {
    return (
      <View
        style={{
          display: 'flex',
          flex: 1,
          height: '100%',
          backgroundColor: theme.colors.darkGray
        }}
      >
        <View style={{ height: '15%' }}>
          <Header
            style={{
              borderWidth: 0
            }}
            topHeader={this.topHeader}
          />
        </View>
        <StatusBar backgroundColor={theme.colors.blue} />
        <View>
          <Card
            style={{
              position: 'absolute',
              top: -35,
              height: 130,
              backgroundColor: theme.colors.blue
            }}
            accountName="Tusasanya Spending"
            accountType="Current Account"
            time="25 mins ago"
            amount="40,300"
          />
        </View>
        <ScrollView
          style={{
            display: 'flex',
            width: '100%',
            marginTop: 100
          }}
        >
          <TotalExpenses showText={true} />
          <View
            style={{
              width: '100%'
            }}
          >
            <Text
              style={{
                width: '90%',
                marginLeft: 20,
                marginRight: 20,
                marginBottom: 20,
                marginTop: 20,
                fontSize: theme.fonts.base,
                fontFamily: theme.fonts.semibold
              }}
            >
              Transaction History
            </Text>
            {[
              {
                id: 1,
                description: 'Joan Repairs',
                time: '25 mins ago',
                amount: '250,000,000',
                status: 'Pending'
              },
              {
                id: 2,
                description: 'Charlie Topup balance',
                time: '2 Days',
                amount: '50,000',
                status: 'Cancelled'
              },
              {
                id: 3,
                description: 'Andrea Extra fee',
                time: '22 Dec',
                amount: '4,550,000',
                status: 'Completed'
              },
              {
                id: 4,
                description: 'Brian Office rent',
                time: '19 Dec',
                amount: '450,000',
                status: 'Pending'
              }
            ].map(({ description, amount, status, time }) => (
              <View
                style={{ paddingLeft: '5%', paddingRight: '5%' }}
                key={Math.random()}
              >
                <TransactionItem
                  status={status}
                  description={description}
                  time={time}
                  amount={amount}
                  trimmed={true}
                />
              </View>
            ))}
          </View>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
              paddingBottom: 10
            }}
          >
            <TouchableOpacity
              style={{
                padding: 10
              }}
              onPress={() => alert('should show all transactions')}
            >
              <Text
                style={{
                  fontSize: theme.fonts.base,
                  fontFamily: theme.fonts.regular,
                  color: theme.colors.blue,
                  marginRight: 20
                }}
              >
                View All
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default CurrentAccount;
