import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FormField from './FormField';
import ScrollableCards from '../../../components/'

const AirtimeRecharge = ({
  prePaid = true,
  postPaid = false,
  textChanged,
  subscription,
  renewSub = false,
  renewSubHandler = () => null
}) => (
  <View style={{ flex: 1 }}>
    <View
      style={{
        // borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'green',
        flexDirection: 'row',
        marginTop: '3%'
      }}
    >
      <TouchableOpacity
        onPress={() => alert('prepaid')}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Icon
          name={prePaid ? 'radio-button-checked' : 'radio-button-unchecked'}
          color="rgb(34,50,176)"
          size={15}
        />
        <Text
          allowFontScaling
          style={{ fontSize: 15, color: 'rgba(0,0,0,.3)', marginLeft: '1%' }}
        >
          Pre-Paid
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => alert('postpaid')}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Icon
          name={postPaid ? 'radio-button-checked' : 'radio-button-unchecked'}
          color="rgb(34,50,176)"
          size={15}
        />
        <Text
          allowFontScaling
          style={{ fontSize: 15, color: 'rgba(0,0,0,.3)', marginLeft: '1%' }}
        >
          Pre-Paid
        </Text>
      </TouchableOpacity>
    </View>
    <ScrollView>
      <FormField
        header="Select Operator"
        placeholder="MTN"
        textChanged={textChanged}
        canEdit={false}
      />
      <FormField
        mobile
        textChanged={textChanged}
        placeholder="774904567"
        header="Phone Number"
      />
      <FormField
        header="Amount (Ugx)"
        placeholder="50,000"
        textChanged={textChanged}
        rightIcon={false}
      />

      <View
        style={{
          flexDirection: 'row',
          width: '90%',
          justifyContent: 'flex-start',
          alignSelf: 'center',
          // borderWidth: 1,
          top: '1%',
          paddingBottom: '1%'
        }}
      >
        <Icon
          name={!renewSub ? 'check-box-outline-blank' : 'check-box'}
          size={20}
          color={subscription}
          onPress={renewSubHandler}
          style={{ color: 'rgb(34, 50, 176)' }}
        />
        <View style={{ height: '100%', paddingLeft: '3%' }}>
          <Text
            allowFontScaling
            style={{
              fontSize: 17,
              marginTop: '-2%',
              flexGrow: 1,
              color: 'rgb(0, 58, 238)'
            }}
          >
            Renewable subscription
          </Text>
          <Text allowFontScaling style={{ fontSize: 12, marginTop: '-3%', color: 'rgba(35, 31,32, 0.74)' }}>
            Instant recharge after 1 week
          </Text>
        </View>
        <TouchableOpacity style={{ justifyContent: 'flex-start', flexGrow: 1 }}>
          <Text
            allowFontScaling
            style={{
              fontSize: 12,
              alignSelf: 'flex-end',
              color: 'rgb(66, 133, 244)'
            }}
          >
            Change
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center', borderWidth: 1, width: '90%', alignSelf: 'center', marginTop: '1%'}}>
        <Icon name="credit-card" size={20} color="rgba(0,0,0,.25)" />
        <Text allowFontScaling style={{marginLeft: '3%', fontSize: 12}}>Select Account</Text>
      </View>
    </ScrollView>
  </View>
);

export default AirtimeRecharge;
