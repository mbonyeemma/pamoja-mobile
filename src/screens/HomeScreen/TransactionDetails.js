import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ProfilePic from '../../../assets/profilepic.png';
import theme from '../../constants/theme';

const { width } = Dimensions.get('screen');

const TransactionDetails = ({
  showMore = true,
  name,
  status = 'pending',
  description,
  time,
  // first,
  // last,
  amount
}) => {
  const switchedStatus = _status => {
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
        // marginTop: first ? 0 : 4,
        flex: 1
      }}
    >
      <View style={{ width: '20%', height: '100%', justifyContent: 'center' }}>
        <Image source={ProfilePic} style={{ width: 40, height: 40 }} />
      </View>

      <View
        style={{
          width: showMore ? '40%' : '60%',
          height: '100%',
          justifyContent: 'center',
          borderBottomColor: '#eee',
          borderBottomWidth: 1
        }}
      >
        {showMore ? (
          <>
            <Text allowFontScaling style={{ fontSize: 14 }}>
              {`${description.substring(0, 13)}...`}
            </Text>
            <Text allowFontScaling style={{ fontSize: 10 }}>
              {time}
            </Text>
          </>
        ) : (
          <Text
            allowFontScaling
            style={{
              fontSize: theme.fonts.base + 1,
              fontFamily: theme.fonts.regular
            }}
          >
            {name}
          </Text>
        )}
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
        {showMore && (
          <View style={{ alignItems: 'flex-end', marginRight: '5%' }}>
            <Text
              allowFontScaling
              style={{ fontSize: 10, color: 'rgba(0,0,0,1)' }}
            >
              ugx{' '}
              <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{amount}</Text>
            </Text>
            <Text
              allowFontScaling
              style={{ fontSize: 12, color: switchedStatus(status) }}
            >
              {status}
            </Text>
          </View>
        )}

        <View>
          <Icon
            name='keyboard-arrow-right'
            size={20}
            color='#aaa'
            onPress={() => alert(`${description} details coming sson`)}
          />
        </View>
      </View>
    </View>
  );
};

export default TransactionDetails;
