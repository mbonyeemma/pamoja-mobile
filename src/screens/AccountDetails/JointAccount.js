import React, { Component } from 'react';
import {
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import TotalExpenses from '../../components/TotalExpenses/TotalExpenses';
import AccountHolder from '../../components/AccountHolder/AccountHolder';
import AccountDetailsHeader from '../../components/ActionHeader/AccountDetailsHeader';
import Modal from '../../components/Modal/Modal';
import OutstandingRequests from '../../components/Requests/Requests';
import RequestsData from './config';

import theme from '../../constants/theme';

width = Dimensions.get('screen').width;

class JointAccount extends Component {
  state= {
    isModalShowing: false
  }

  topHeader = <AccountDetailsHeader />;

  headerContent = (
    <View
      style={{
        // borderColor: 'red',
        flexDirection: 'row',
        width: '90%',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        marginTop: 5
      }}
    >
      <View
        style={{
          width: 20,
          // height: ,
          justifyContent: 'center',
          borderColor: theme.colors.white,
          borderWidth: 1,
          backgroundColor: theme.colors.magento,
          alignItems: 'center',
          borderRadius: 100
        }}
      >
        <Text
          style={{
            fontSize: 10,
            fontFamily: theme.fonts.regular,
            color: theme.colors.white
          }}
        >
          3
        </Text>
      </View>
      <View style={{ flex: 1, marginLeft: '3%' }}>
        <TouchableOpacity onPress={() => this.setState({isModalShowing: true})}>
          <Text
            style={{
              fontSize: theme.fonts.base,
              fontFamily: theme.fonts.regular,
              color: theme.colors.blue
            }}
          >
            View Outstanding Approvals
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  accountHolderTitle = (
    <View
      style={{
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 50,
        width: '90%'
      }}
    >
      <View style={{ height: 25 }}>
        <Text
          style={{
            fontSize: theme.fonts.base,
            fontFamily: theme.fonts.semibold,
            color: 'rgba(35,31,32,0.54)'
          }}
        >
          Account Members
        </Text>
        <Text
          style={{
            fontSize: theme.fonts.base,
            fontFamily: theme.fonts.regular,
            color: theme.colors.darkerGray
          }}
        >
          Each member is supposed to contribute towards clearing a defined
          amount of money as agreed by the admins.
        </Text>
      </View>
    </View>
  );

  showRequestsModalHandler = (
    <OutstandingRequests requests={RequestsData} />
  );

  render() {
    return (
      <View style={{ display: 'flex', flex: 1, height: '100%' }}>
        <Modal
          close={() => this.setState({isModalShowing: false})}
          styles={{height: '75%'}}
          showing={this.state.isModalShowing}
          component={<OutstandingRequests requests={RequestsData} />}
        />
        <View style={{ height: '15%' }}>
          <Header
            style={{
              borderWidth: 0
            }}
            topHeader={this.topHeader}
          />
        </View>
        <StatusBar backgroundColor={theme.colors.blue} />
        <View
          style={{
            zIndex: 99,
            position: 'absolute',
            marginTop: '18%',
            width: '100%'
          }}
        >
          <Card
            style={{
              height: 130,
              color: theme.colors.white,
              backgroundColor: theme.colors.black
            }}
            accountName='Mbuya Parents Association'
            accountType='Joint Account'
            totalMembers='3'
            time='25 Feb'
            amount='23,700,500'
          />
        </View>
        <ScrollView
          style={{ display: 'flex', width: '100%', marginTop: width > 320 ? '28%' : '35%' }}
        >
          {this.headerContent}
          <TotalExpenses />
          {this.accountHolderTitle}
          {[
            {
              id: 1,
              name: 'Me',
              status: 'Cleared 96,000 of 800,000',
              user: true
            },
            {
              id: 2,
              name: 'Timo Bravo',
              status: 'Cleared 23,000 of 800,000',
              user: true
            },
            {
              id: 3,
              name: 'Charlie Bogere',
              status: 'Cleared 750,000 of 800,000',
              user: true
            },
            {
              id: 4,
              name: 'Kiiza Andrea',
              status: 'Cleared 800,000 of 800,000',
              user: false
            }
          ].map(item => (
            <AccountHolder
              key={item.id}
              name={item.name}
              status={item.status}
              user={item.user}
            />
          ))}
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
              onPress={() => alert('should show 3 more account members')}
            >
              <Text
                style={{
                  fontSize: theme.fonts.base,
                  fontFamily: theme.fonts.regular,
                  color: theme.colors.blue,
                  marginRight: 20
                }}
              >
                3 More
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderTopColor: 'gray',
              borderTopWidth: 1,
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
                transaction: true,
                transactionDetails: {
                  amount: 4500,
                  position: 'Pending'
                }
              },
              {
                id: 2,
                name: 'Charlie TopUp bal...',
                status: '2 Days',
                transaction: true,
                transactionDetails: {
                  amount: 4500,
                  position: 'Pending'
                }
              },
              {
                id: 3,
                name: 'Andrea Extra fee',
                status: '22 Mar',
                transaction: true,
                transactionDetails: {
                  amount: 4500,
                  position: 'Pending'
                }
              },
              {
                id: 4,
                name: 'Brian Office rent',
                status: '19 Dec',
                transaction: true,
                transactionDetails: {
                  amount: 4500,
                  position: 'Pending'
                }
              }
            ].map(item => (
              <View
                key={item.id}
                style={{ paddingLeft: '5%', paddingRight: '5%' }}
              >
                <AccountHolder
                  name={item.name}
                  status={item.status}
                  transaction={item.transaction}
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
export default JointAccount;
