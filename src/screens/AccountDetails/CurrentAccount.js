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
import AccountDetailsHeader from '../../components/ActionHeader/AccountDetailsHeader';
import Card from '../../components/Card/Card';

import theme from '../../constants/theme';

class CurrentAccount extends Component {
  topHeader = <AccountDetailsHeader />;

  render() {
    return (
      <View style={{ display: 'flex', flex: 1, height: '100%' }}>
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
            accountName='Tusasanya Spending'
            accountType='Current Account'
            time='25 mins ago'
            amount='40,300'
          />
        </View>
        <ScrollView style={{ display: 'flex', width: '100%' }}>
          <TotalExpenses />
          <View
            style={{
              // borderTopColor: 'gray',
              // borderTopWidth: 1,
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
                name: 'Timo Loan for rent..',
                status: '25 Mins ago',
                transaction: true
              },
              {
                id: 2,
                name: 'Charlie TopUp bal...',
                status: '2 Days',
                transaction: true
              },
              {
                id: 3,
                name: 'Andrea Extra fee',
                status: '22 Mar',
                transaction: true
              },
              {
                id: 4,
                name: 'Brian Office rent',
                status: '19 Dec',
                transaction: true
              }
            ].map(item => (
              <AccountHolder
                key={item.id}
                name={item.name}
                status={item.status}
                transaction={item.transaction}
              />
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
