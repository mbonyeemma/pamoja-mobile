import React, { Component } from 'react';
import { View } from 'react-native';

import AccountHolder from './AccountHolder';
import TransactionDetail from '../TransactionDetail/TransactionDetail';

class AccountMember extends Component {
  state = {
    showingDetails: false
  };

  render() {
    const { showingDetails } = this.state;
    const { transactionStatus, name, status, transaction } = this.props;
    return (
      <View style={{ paddingRight: '5%', paddingLeft: '5%' }}>
        <AccountHolder
          name={name}
          status={status}
          transaction={transaction.status}
          toggleItemDetails={() => this.toggleItemDetails(transaction.id)}
          iconDirection={
            showingDetails === transaction.id ? 'arrowUp' : 'arrowDown'
          }
        />
        {transactionStatus && showingDetails === transaction.id ? (
          <TransactionDetail transaction={transaction} />
        ) : null}
      </View>
    );
  }
}

export default AccountMember;
