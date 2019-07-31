import React from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ProfilePic from '../../../assets/profilepic.png';
import theme from '../../constants/theme';
import { toTitleCase } from '../../constants/utils';

const { width } = Dimensions.get('screen');

export default ({
  showMore = true,
  name,
  status = 'pending',
  description,
  time,
  user = false,
  amount,
  trimmed = false
}) => {
  const switchedStatus = _status => {
    let statusColor = '';
    // eslint-disable-next-line default-case
    switch (_status) {
      case 'pending':
        statusColor = 'rgb(251, 188, 5)';
        break;
      case 'completed':
        statusColor = 'green';
        break;
      case 'cancelled':
        statusColor = 'red';
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
        flex: 1
      }}
    >
      <View style={{ width: '20%', height: '100%', justifyContent: 'center' }}>
        <Image source={ProfilePic} style={{ width: 40, height: 40 }} />
      </View>

      <View
        style={{
          width: user ? '60%' : '40%',
          height: '100%',
          justifyContent: 'center',
          borderBottomColor: '#ddd',
          borderBottomWidth: 1
        }}
      >
        {showMore ? (
          <>
            <Text
              allowFontScaling
              style={{
                fontFamily: theme.fonts.regular,
                color: theme.colors.lightBlack,
                fontSize: theme.fonts.base
              }}
            >
              {trimmed ? `${description.substring(0, 13)}...` : description}
            </Text>
            <Text
              allowFontScaling
              style={{
                fontFamily: theme.fonts.regular,
                color: theme.colors.darkerGray,
                fontSize: 10
              }}
            >
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
          borderBottomColor: '#ddd',
          borderBottomWidth: 1
        }}
      >
        {!user && showMore ? (
          <View style={{ alignItems: 'flex-end', marginRight: '5%' }}>
            <Text
              allowFontScaling
              style={{
                fontSize: 10,
                fontFamily: theme.fonts.regular,
                color: 'rgba(0,0,0,1)'
              }}
            >
              Ugx{' '}
              <Text
                style={{
                  fontSize: theme.fonts.base,
                  fontFamily: theme.fonts.semibold
                }}
              >
                {amount}
              </Text>
            </Text>
            <Text
              allowFontScaling
              style={{
                fontSize: theme.fonts.base,
                color: switchedStatus(status.toLowerCase()),
                fontFamily: theme.fonts.regular
              }}
            >
              {toTitleCase(status)}
            </Text>
          </View>
        ) : (
          <Text>2</Text>
        )}

        <View>
          {!user ? (
            <Icon
              name="keyboard-arrow-right"
              size={20}
              color="#aaa"
              onPress={() => alert(`${description} details coming soon`)}
            />
          ) : (
            <Text />
          )}
        </View>
      </View>
    </View>
  );
};
