import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

import styles from './DepositPopupStyles';

const DepositAmountModal = (
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

export default DepositAmountModal;
