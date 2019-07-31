import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Header from '../../components/Header/Header';
import Profile from '../../../assets/profilepic.png';
import AccountHolder from '../../components/AccountHolder/AccountHolder';
import ActionBottomHeader from '../../components/ActionHeader/ActionBottomHeader';
import TransactionDetail from '../../components/TransactionDetail/TransactionDetail';
import TransactionItem from '../../components/TransactionItem/TransactionItem';

import theme from '../../constants/theme';

import config from './config';
import styles from './TransactionHistoryStyles';

const {
  buttonsData,
  completedData,
  transactionsData,
  PendingData,
  CancelledData
} = config;

class TransactionHistory extends Component {
  state = {
    mode: 1,
    showingDetails: undefined
  };

  topHeader = (
    <View style={styles.topHeaderContainer}>
      <View style={styles.headerImageContainer}>
        <Image source={Profile} style={styles.imageStyles} resizeMode="cover" />
      </View>
    </View>
  );

  bottomHeader = <ActionBottomHeader bottomText="Transaction History" />;

  changeData = () => {
    const { mode } = this.state;
    if (mode === 1) {
      return transactionsData;
    }
    if (mode === 2) {
      return completedData;
    }
    if (mode === 3) {
      return CancelledData;
    }
    if (mode === 4) {
      return transactionsData;
    }
  };

  toggleItemDetails = id => {
    const { showingDetails } = this.state;
    if (id === showingDetails) {
      return this.setState({ showingDetails: undefined });
    }
    this.setState({ showingDetails: id });
  };

  render() {
    const { mode, showingDetails } = this.state;
    const data = this.changeData();
    return (
      <View style={styles.container}>
        <View style={{ height: '15%' }}>
          <Header
            style={{
              borderWidth: 0,
              backgroundColor: theme.colors.darkGray
            }}
            topHeader={this.topHeader}
            bottomHeader={this.bottomHeader}
          />
        </View>

        <View style={styles.sortContainer}>
          <View style={styles.sortButton}>
            <Text style={styles.sortText}>Sort</Text>
            <Icon
              style={{ paddingLeft: '1%' }}
              name="md-arrow-dropdown"
              size={20}
              color={theme.colors.black}
              onPress={() => alert('dropdown list')}
            />
          </View>
        </View>

        <View style={styles.transactionButtonContainer}>
          {buttonsData.map(({ id, status }) => {
            const textStyles =
              mode === id ? { color: theme.colors.blue } : null;
            const btnStyles =
              mode === id ? { backgroundColor: theme.colors.white } : null;
            return (
              <TouchableOpacity
                style={[styles.transactionButton, btnStyles]}
                key={id}
                onPress={() => this.setState({ mode: id })}
              >
                <Text style={[styles.sortText, textStyles]}>{status}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        {/* {this.changeData()} */}
        <ScrollView style={styles.scrollViewContainer}>
          <View>
            {data.map(
              ({
                id,
                name,
                status,
                transaction,
                transactionDetails,
                time,
                amount
              }) => {
                const { transactionStatus } = transaction;
                return (
                  <View
                    key={Math.random()}
                    style={{ paddingLeft: '5%', paddingRight: '5%' }}
                  >
                    <TransactionItem
                      key={id}
                      status={status}
                      description={name}
                      time={time}
                      amount={amount}
                      trimmed={true}
                    />
                  </View>
                  // <View key={id}>
                  //   <View style={{ paddingRight: '5%', paddingLeft: '5%' }}>
                  //     <AccountHolder
                  //       name={name}
                  //       transactionDetails={transactionDetails}
                  //       status={status}
                  //       transaction={transaction.status}
                  //       toggleItemDetails={() =>
                  //         this.toggleItemDetails(transaction.id)
                  //       }
                  //       iconDirection={
                  //         showingDetails === transaction.id
                  //           ? 'arrowUp'
                  //           : 'arrowDown'
                  //       }
                  //     />
                  //   </View>
                  //   <View>
                  //     {transactionStatus &&
                  //     showingDetails === transaction.id ? (
                  //       <TransactionDetail transaction={transaction} />
                  //     ) : null}
                  //   </View>
                  // </View>
                );
              }
            )}
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default TransactionHistory;
