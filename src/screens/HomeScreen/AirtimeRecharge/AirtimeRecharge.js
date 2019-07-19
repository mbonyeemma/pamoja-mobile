import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FormField from './FormField';
import ScrollableCards from '../../../components/ScrollableCards/ScrollableCards';

const { height } = Dimensions.get('screen');

const AirtimeRecharge = ({
  prePaid,
  textChanged,
  subscription,
  setPre,
  setPost,
  renewSub = false,
  renewSubHandler = () => null
}) => (
  <View style={{ flex: 1, marginBottom: 10 }}>
    <ScrollView style={{ flex: 1, paddingTop: 10 }}>
      <View
        style={{
          // borderWidth: 1,
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: 'green',
          flexDirection: 'row'
          // top: height >= 720 ? 15 : 10
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Icon
            onPress={setPre}
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
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Icon
            onPress={setPost}
            name={!prePaid ? 'radio-button-checked' : 'radio-button-unchecked'}
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
          top: 5,
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
              marginTop: '2%',
              // top: 0,
              flexGrow: 1,
              color: 'rgb(0, 58, 238)'
            }}
          >
            Renewable subscription
          </Text>
          <Text
            allowFontScaling
            style={{
              fontSize: 12,
              marginTop: '-3%',
              color: 'rgba(35, 31,32, 0.74)'
            }}
          >
            Instant recharge after 3 months
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

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          // borderWidth: 1,
          width: '90%',
          alignSelf: 'center',
          marginTop: '1%'
          // position: 'absolute',
          // zIndex: 50
        }}
      >
        <Icon name="credit-card" size={20} color="rgba(0,0,0,.25)" />
        <Text allowFontScaling style={{ marginLeft: '3%', fontSize: 12 }}>
          Select Account
        </Text>
      </View>

      <View style={{ width: '100%', height: 130 }}>
        <ScrollableCards buttonTopHeight={height >= 720 ? 140 : 130} />
      </View>

      <View
        style={{
          // borderWidth: 1,
          alignItems: 'center',
          justifyContent: 'flex-start',
          top: height >= 720 ? 25 : 15,
          // marginBottom: 0,
          height: height >= 720 ? 90 : 90
          // borderWidth: 1
          // top: height >= 720 ? 5 : 15
        }}
      >
        <TouchableOpacity
          style={{
            width: '60%',
            borderRadius: 100,
            backgroundColor: 'blue',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 10,
            paddingBottom: 10
          }}
          onPress={() => alert('You are about')}
        >
          <Text allowFontScaling style={{ color: 'white' }}>
            Proceed to Recharge
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  </View>
);

export default AirtimeRecharge;
