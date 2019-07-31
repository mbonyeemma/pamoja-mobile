import React, { Component } from 'react';
import {
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Dimensions
} from 'react-native';

import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import AccountHolder from '../../components/AccountHolder/AccountHolder';
import AccountDetailsHeader from '../../components/ActionHeader/AccountDetailsHeader';
import TransactionItem from '../../components/TransactionItem/TransactionItem';
import Modal from '../../components/Modal/Modal';

import theme from '../../constants/theme';

const { width } = Dimensions.get('screen');
class LimboAccount extends Component {
  state = {
    showModal: false,
    showingDetails: undefined
  };

  renderModalDetails = (
    <>
      <View
        style={{
          padding: '5%',
          width: '100%',
          height: '100%',
          display: 'flex',
          marginTop: '5%'
        }}
      >
        <Text allowFontScaling style={{ fontSize: 9.8 }}>
          <Text style={{ fontWeight: 'bold' }}>Note:</Text> According to the{' '}
          <Text style={{ color: 'blue' }}>admin rules</Text>
          ,2 admins required to make a{'\n'}
          member an admin. 1 admin required to remove a member
        </Text>
        <View style={{ marginLeft: -5 }}>
          <AccountHolder
            name="Louis Musanje"
            status="Mbuya Parents Association"
          />
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginTop: '3%'
          }}
        >
          <TouchableOpacity onPress={() => alert('removing admin')}>
            <Text
              style={{
                color: 'rgba(0,0,0,.5)',
                marginRight: '5%',
                fontSize: 12
              }}
            >
              Remove
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('making admin')}>
            <Text style={{ color: 'blue', fontSize: 12 }}>Make Admin</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );

  topHeader = <AccountDetailsHeader navigation={this.props.navigation} />;

  toggleItemDetails = id => {
    const { showingDetails } = this.state;
    if (id === showingDetails) {
      return this.setState({ showingDetails: undefined });
    }
    this.setState({ showingDetails: id });
  };

  closeModal = () => this.setState({ showModal: false });

  render() {
    const { showModal, showingDetails } = this.state;
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
          fullWidth
          styles={{ height: width > 320 ? '28%' : '37%' }}
          component={this.renderModalDetails}
          showing={showModal}
          close={() => this.setState({ showModal: false })}
        />
        <View style={{ height: '15%' }}>
          <Header topHeader={this.topHeader} />
        </View>
        <StatusBar backgroundColor="blue" />
        <View
          style={{
            zIndex: 99,
            position: 'absolute',
            marginTop: '18%',
            width: '100%'
          }}
        >
          <Card
            whiteCard
            style={{
              height: 130,
              color: theme.colors.black,
              backgroundColor: theme.colors.white
            }}
            accountName="Virtual Cash"
            accountType="Limbo Account"
            totalMembers="5"
            time="5 mins"
            amount="2,471,900"
          />
        </View>
        <ScrollView
          style={{
            display: 'flex',
            width: '100%',
            marginTop: width > 320 ? '35%' : '42%'
          }}
        >
          <View
            style={{
              borderBottomColor: '#ddd',
              borderBottomWidth: 1,
              width: '100%',
              paddingBottom: 20
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                marginBottom: 20,
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <Text
                style={{
                  marginLeft: 20,
                  fontSize: theme.fonts.base,
                  fontFamily: theme.fonts.semibold
                }}
              >
                Incoming Transactions
              </Text>
              <View
                style={{ backgroundColor: theme.colors.lightGreen, padding: 4 }}
              >
                <Text
                  style={{
                    fontSize: theme.fonts.base,
                    fontFamily: theme.fonts.medium,
                    color: theme.colors.white
                  }}
                >
                  Ugx 1,500,000
                </Text>
              </View>
            </View>
            {[
              {
                id: 1,
                description: 'Timo Loan for renting items',
                time: '25 Mins ago',
                status: 'Completed',
                amount: '350,000'
              },
              {
                id: 2,
                status: 'Pending',
                description: 'Andrea Extra fee',
                time: '22 Mar',
                amount: '250,000,000'
              }
            ].map(({ status, description, time, amount }) => (
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
              paddingBottom: 20
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                marginBottom: 20,
                marginTop: 20,
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <Text
                style={{
                  marginLeft: 20,
                  fontSize: theme.fonts.base,
                  fontFamily: theme.fonts.semibold
                }}
              >
                Outgoing Transactions
              </Text>
              <View
                style={{ backgroundColor: theme.colors.lightRed, padding: 4 }}
              >
                <Text
                  style={{
                    fontSize: theme.fonts.base,
                    fontFamily: theme.fonts.medium,
                    color: theme.colors.white
                  }}
                >
                  Ugx 621,900
                </Text>
              </View>
            </View>
            {[
              {
                id: 1,
                name: 'Brenda TP payments',
                time: '5 Mins ago',
                amount: '140,000,000',
                status: 'Pending',
                transaction: {
                  id: 234435,
                  status: true,
                  transactionStatus: 'Pending',
                  title: 'Kane Car repair charges',
                  refId: 'Ref ID: 93774374',
                  time: '19:00 . 23 Mar',
                  transactionDate: '23 Mar',
                  dueDate: 'Due Date: 23rd Jun 2019',
                  from: 'Tusasanya Spending',
                  to: 'Kane Wanyana',
                  description: 'Car repairs'
                }
              },
              {
                id: 2,
                name: 'Kane Car repairs for the team',
                time: '23 Mar',
                amount: '500,000',
                status: 'Completed',
                transaction: {
                  id: 120,
                  status: true,
                  transactionStatus: 'Pending',
                  title: 'Kane Car repair charges',
                  refId: 'Ref ID: 93774374',
                  time: '19:00 . 23 Mar',
                  transactionDate: '23 Mar',
                  dueDate: 'Due Date: 23rd Jun 2019',
                  from: 'Tusasanya Spending',
                  to: 'Kane Wanyana',
                  description: 'Car repairs'
                }
              },
              {
                id: 3,
                name: 'karen payments to the team',
                time: '25 Mins ago',
                amount: '1,500,000',
                status: 'Cancelled',
                transaction: {
                  id: 120,
                  status: true,
                  transactionStatus: 'Pending',
                  title: 'Kane Car repair charges',
                  refId: 'Ref ID: 93774374',
                  time: '19:00 . 23 Mar',
                  transactionDate: '23 Mar',
                  dueDate: 'Due Date: 23rd Jun 2019',
                  from: 'Tusasanya Spending',
                  to: 'Kane Wanyana',
                  description: 'Car repairs'
                }
              },
              {
                id: 4,
                name: 'Agents payments to the team',
                time: '1 Min ago',
                amount: '25,500,000',
                status: 'Pending',
                transaction: {
                  id: 120,
                  status: true,
                  transactionStatus: 'Pending',
                  title: 'Kane Car repair charges',
                  refId: 'Ref ID: 93774374',
                  time: '19:00 . 23 Mar',
                  transactionDate: '23 Mar',
                  dueDate: 'Due Date: 23rd Jun 2019',
                  from: 'Tusasanya Spending',
                  to: 'Kane Wanyana',
                  description: 'Car repairs'
                }
              }
            ].map(item => {
              const { id, name, status, transaction, amount, time } = item;
              const { transactionStatus } = transaction;
              return (
                <TouchableOpacity
                  key={id}
                  onPress={() => this.setState({ showModal: true })}
                >
                  <View
                    style={{ paddingLeft: '5%', paddingRight: '5%' }}
                    key={Math.random()}
                  >
                    <TransactionItem
                      status={status}
                      description={name}
                      time={time}
                      amount={amount}
                      trimmed={true}
                    />
                  </View>
                  {/* <View
                    key={id}
                    style={{ paddingRight: '5%', paddingLeft: '5%' }}
                  >
                    <AccountHolder
                      name={name}
                      status={status}
                      transaction={transaction.status}
                      toggleItemDetails={() =>
                        this.toggleItemDetails(transaction.id)
                      }
                      iconDirection={
                        showingDetails === transaction.id
                          ? 'arrowUp'
                          : 'arrowDown'
                      }
                    />
                    {transactionStatus && showingDetails === transaction.id ? (
                      <TransactionDetail transaction={transaction} />
                    ) : null}
                  </View> */}
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default LimboAccount;
