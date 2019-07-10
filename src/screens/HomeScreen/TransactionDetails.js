import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import ProfilePic from '../../../assets/profilepic.png';

const { width } = Dimensions.get('screen');

const TransactionDetails = ({
  status = 'pending',
  description,
  time,
  first,
  // last,
  amount
}) => {
  const switchedStatus = (_status) => {
    let statusColor = '';
    // eslint-disable-next-line default-case
    switch (_status) {
      case 'pending':
        statusColor = 'rgb(251, 188, 5)';
        break;
      case 'recieved':
        statusColor = 'rgb(52, 168, 83)';
        break;
      case 'sent':
        statusColor = 'rgb(234, 67, 53)';
        break;
    }

    return statusColor;
  };

  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        height: width > 320 ? 60 : '25%',
        marginTop: first ? 0 : 4,
        flex: 1
      }}
    >
      <View style={{ width: '20%', height: '100%', justifyContent: 'center' }}>
        <Image source={ProfilePic} style={{ width: 40, height: 40 }} />
      </View>

      <View
        style={{
          width: '40%',
          height: '100%',
          justifyContent: 'center',
          borderBottomColor: '#eee',
          borderBottomWidth: 1
        }}
      >
        <Text
          allowFontScaling
          style={{ fontSize: 14, color: 'rgba(0,0,0,.8)' }}
        >
          {`${description.substring(0, 13)}...`}
        </Text>
        <Text
          allowFontScaling
          style={{ fontSize: 10, color: 'rgba(0,0,0,.3)' }}
        >
          {time}
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          height: '100%',
          alignItems: 'center',
          flexGrow: 1,
          justifyContent: 'flex-end',
          borderBottomColor: '#eee',
          borderBottomWidth: 1
        }}
      >
        <View style={{ alignItems: 'flex-end', marginRight: '5%' }}>
          <Text
            allowFontScaling
            style={{ fontSize: 10, color: 'rgba(0,0,0,1)' }}
          >
            ugx
            {' '}
            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{amount}</Text>
          </Text>
          <Text
            allowFontScaling
            style={{ fontSize: 12, color: switchedStatus(status) }}
          >
            {status}
          </Text>
        </View>
        <View style={{}}>
          <Icon
            name="keyboard-arrow-right"
            size={20}
            color="#aaa"
            onPress={() => alert(`${description} details coming sson`)}
          />
        </View>
      </View>
    </View>
  );
};

export default TransactionDetails;
