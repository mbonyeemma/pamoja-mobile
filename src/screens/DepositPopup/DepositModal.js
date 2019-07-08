import React from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import phone from '../../../assets/phone.png';

import Card from '../../components/Card/Card';
import theme from '../../constants/theme';
import styles from './DepositPopupStyles';

const DepositModal = ({ handleFocus }) => {
  return (
    <>
      <KeyboardAvoidingView
        style={styles.modalContainer}
        behavior='position'
        enabled
      >
        <Text style={styles.popUpHeadings}>From</Text>
        <View style={[styles.phone, { height: '20%' }]}>
          <Image
            source={phone}
            style={{ width: '10%', height: '30%' }}
            resizeMode='contain'
          />
          <View style={styles.phoneContainer}>
            <View style={styles.countryCodes}>
              <Text style={styles.phoneLabelText}>MM No.</Text>
            </View>
            <View style={styles.iconDropdown}>
              <Icon
                name='md-arrow-dropdown'
                size={20}
                color={theme.colors.black}
                onPress={() => alert('dropdown list')}
              />
            </View>
            <TextInput
              style={styles.phoneLabelText}
              keyboardType='numeric'
              placeholder='+256 788 888 888'
            />
          </View>
        </View>
        <View
          style={{
            borderTopWidth: 1,
            height: '18%'
          }}
        >
          <Text style={styles.popUpHeadings}>To</Text>
          <View style={styles.iconCardContainer}>
            <Icon name='md-card' size={20} color={theme.colors.gray} />
            <Text style={styles.selectAccountText}>Select Account</Text>
          </View>
        </View>
        <Card
          style={styles.cardComponent}
          accountName={`Tusasanya Spending`}
          accountType={`Current Account`}
          time={`25 mins ago`}
          amount={`40,300`}
        />
        <KeyboardAvoidingView
          style={{
            flexDirection: 'row',
            width: '100%',
            paddingLeft: 20,
            paddingRight: 20,
            marginTop: 10
          }}
          behavior='padding'
          enabled
        >
          <KeyboardAvoidingView
            style={styles.amountFieldContainer}
            behavior='padding'
            enabled
          >
            <TextInput
              style={styles.phoneLabelText}
              keyboardType='numeric'
              placeholder='Amount(Ugx)'
              onFocus={handleFocus}
            />
          </KeyboardAvoidingView>
          <TouchableOpacity style={styles.depositAmountContainer}>
            <Icon name='md-cash' size={25} color='white' />
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </KeyboardAvoidingView>
    </>
  );
};
export default DepositModal;
