import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';

import Modal from '../../components/Modal/Modal';
import DepositModal from './DepositModal';
import styles from './DepositPopupStyles';

import theme from '../../constants/theme';

class DepositPopup extends Component {
  state = {
    showModal: false,
    isEntering: false
  };
  renderDepositAmountModal = (
    <View
      style={{
        height: '15%'
      }}
    >
      <View style={styles.amountNewFieldContainer}>
        <Text style={styles.phoneLabelText}>Amount(Ugx)</Text>
        <TextInput
          style={styles.amountNewField}
          placeholder='5000'
          keyboardType='numeric'
        />
      </View>
      <View style={styles.actionButtonsContainer}>
        <TouchableOpacity onPress={() => alert('cancelled')}>
          <Text style={styles.actionButtonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => alert('amount deposited')}
          style={styles.positiveActionButton}
        >
          <Text style={styles.actionButtonText}>Ok</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  render() {
    const { showModal, isEntering } = this.state;
    return (
      <View
        style={{
          display: 'flex',
          flex: 1,
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Modal
          fullWidth
          styles={{ height: '90%', backgroundColor: theme.colors.darkGray }}
          component={
            isEntering ? (
              this.renderDepositAmountModal
            ) : (
              <DepositModal
                handleFocus={() => this.setState({ isEntering: true })}
              />
            )
          }
          showing={showModal}
          close={() => this.setState({ showModal: false, isEntering: false })}
        />

        <TouchableOpacity
          style={{ borderColor: 'red', borderWidth: 1, padding: 10 }}
          onPress={() => this.setState({ showModal: true })}
        >
          <Text>Deposit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default DepositPopup;
