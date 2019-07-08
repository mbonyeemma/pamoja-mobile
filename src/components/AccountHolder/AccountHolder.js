import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import profile from '../../../assets/profilepic.png';

import AdminButton from './AdminButton';
import ItemDetailEnd from './ItemDetailEnd';

import theme from '../../constants/theme';
import styles from './AccountHolderStyles';

class AccountHolder extends Component {
  adminButtonHandler = (
    <View style={styles.adminButtonContainer}>
      <AdminButton />
    </View>
  );

  transactionDetail = (
    <View style={styles.itemDetailContainer}>
      <ItemDetailEnd transactionDetailHandler={this.props.toggleItemDetails} transactionDetails={this.props.transactionDetails}/>
    </View>
  );

  renderTransactionDetailsIcon =
    this.props.iconDirection === 'arrowUp' ? (
      <Icon
        style={styles.iconDropdown}
        name='keyboard-arrow-up'
        size={25}
        color='gray'
        onPress={this.props.toggleItemDetails}
      />
    ) : (
      <Icon
        style={styles.iconDropdown}
        name='keyboard-arrow-down'
        size={25}
        color='gray'
        onPress={this.props.toggleItemDetails}
      />
    );

  render() {
    const { user, name, status, transaction, style } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={profile}
            resizeMode='cover'
            style={styles.imageStyles}
          />
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.regularText}>{name}</Text>
          <Text style={styles.regularText}>{status}</Text>
        </View>
        {user ? this.adminButtonHandler : null}
        {transaction ? this.transactionDetail : null}
        {status && transaction ? this.renderTransactionDetailsIcon : null}
      </View>
    );
  }
}
export default AccountHolder;
