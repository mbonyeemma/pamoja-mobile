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
import TransactionItem from '../../components/TransactionItem/TransactionItem';
import AccountHeaderContent from './AccountHeaderContent';
import RequestsData from './config';
import theme from '../../constants/theme';

const { height, width } = Dimensions.get('screen');
const jointAccountData = [
  {
    status: 'pending',
    description: 'Me',
    time: 'Cleared 96,000 of 800,000',
    amount: 240000
  },
  {
    status: 'pending',
    description: 'Kiiza',
    time: 'Cleared 96,000 of 800,000',
    amount: 240000
  },
  {
    status: 'pending',
    description: 'Charles Bogere',
    time: 'Cleared 96,000 of 800,000',
    amount: 240000
  },
  {
    status: 'pending',
    description: 'Timo Bravo',
    time: 'Cleared 96,000 of 800,000',
    amount: 240000
  }
];

class JointAccount extends Component {
  state = {
    isModalShowing: false
  };

  topHeader = <AccountDetailsHeader />;

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

  showRequestsModalHandler = <OutstandingRequests requests={RequestsData} />;

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
        <Modal
          close={() => this.setState({ isModalShowing: false })}
          styles={{ height: '75%' }}
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
            accountName="Mbuya Parents Association"
            accountType="Joint Account"
            totalMembers="3"
            time="25 Feb"
            amount="23,700,500"
          />
        </View>
        <ScrollView
          style={{
            display: 'flex',
            width: '100%',
            marginTop: width > 320 ? '28%' : '35%'
          }}
        >
          <AccountHeaderContent
            openApprovalsModal={() => this.setState({ isModalShowing: true })}
          />
          <TotalExpenses showText={true} />
          {this.accountHolderTitle}
          {jointAccountData.map(({ description, status, time, user }) => (
            <View
              key={Math.random()}
              style={{ paddingLeft: '5%', paddingRight: '5%' }}
            >
              <TransactionItem
                status={status}
                description={description}
                time={time}
                user={true}
              />
            </View>
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
              borderTopColor: '#ddd',
              borderTopWidth: 1,
              width: '100%'
            }}
          >
            <Text
              style={{
                width: '100%',
                marginLeft: 30,
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
                id: 2,
                description: 'Andrea Extra fee',
                time: '21 Feb',
                amount: '500,000',
                status: 'Completed'
              },
              {
                id: 3,
                description: 'Andrea Extra fee',
                time: '22 Mar',
                amount: '4,000,000',
                status: 'Cancelled'
              },
              {
                id: 4,
                description: 'Brian Office rent',
                time: '19 Dec',
                amount: '203,000,000',
                status: 'Pending'
              }
            ].map(({ description, time, status, amount }) => (
              <View
                key={Math.random()}
                style={{ paddingLeft: '5%', paddingRight: '5%' }}
              >
                <TransactionItem
                  status={status}
                  description={description}
                  time={time}
                  amount={amount}
                />
              </View>
              // <View
              //   key={item.id}
              //   style={{ paddingLeft: '5%', paddingRight: '5%' }}
              // >
              //   <AccountHolder
              //     name={item.name}
              //     status={item.status}
              //     transaction={item.transaction}
              //   />
              // </View>
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
