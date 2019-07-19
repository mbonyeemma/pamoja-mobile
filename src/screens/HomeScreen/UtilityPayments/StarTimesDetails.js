import React, { Component } from 'react';
import {
  Text,
  SafeAreaView,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import TVListItem from './TVListItem';
import theme from '../../../constants/theme';

export default class StartTimesDetails extends Component{
  state = {
      monthly: {
        name: 'Monthly Packs',
        data:[ 
          {
            firstText :'Recharge with Ugx 328,000 for a',
            secondText :'Monthly and get 35 Channels',
            amount :'328,000'
          },
          {
            firstText :'Recharge with Ugx 328,000 for a',
            secondText :'Monthly and get 35 Channels',
            amount :'328,000'
          },
          {
            firstText :'Recharge with Ugx 328,000 for a',
            secondText :'Monthly and get 35 Channels',
            amount :'328,000'
          }
        ]
      },
      threeMonths: {
        name: '3 Months Packs',
        data:[ 
          {
            firstText :'Recharge with Ugx 328,000 for a',
            secondText :'3 Months and get 35 Channels',
            amount :'328,000'
          },
          {
            firstText :'Recharge with Ugx 328,000 for a',
            secondText :'3 Months and get 35 Channels',
            amount :'328,000'
          },
          {
            firstText :'Recharge with Ugx 328,000 for a',
            secondText :'3 Months and get 35 Channels',
            amount :'328,000'
          }
        ]
      }
    }
  }
  render(){
    return (
      <SafeAreaView
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          backgroundColor: theme.colors.darkGray
        }}
      >
        <ScrollView
          horizontal
          style={{
            flex: 1,
            paddingTop: '15%',
            backgroundColor: theme.colors.darkGray
          }}
        >
          {['Monthly Pack', '3 Month Packs', '6 Month Packs', 'Annual Packs'].map(
            (value, index) => {
              return (
                <TouchableOpacity
                  style={{
                    flex: 1,
                    padding: 2,
                    //borderWidth: 1,
                    borderRadius: 20,
                    backgroundColor: theme.colors.darkGray,
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 5
                  }}
                  key={Math.random()}
                  onPress={() => alert('1')}
                >
                  <Text
                    allowFontScaling
                    style={{
                      fontSize: theme.fonts.base + 2,
                      fontFamily: theme.fonts.regular
                    }}
                  >
                    {value}
                  </Text>
                </TouchableOpacity>
              );
            }
          )}
        </ScrollView>
        <View style={{ flex: 6, backgroundColor: theme.colors.white }}>
          <ScrollView>
            <TVListItem />
            <TVListItem />
            <TVListItem />
            <TVListItem />
            <TVListItem />
          </ScrollView>
        </View>
        <View
          style={{
            flex: 1.5,
            backgroundColor: theme.colors.darkGray,
            borderTopColor: theme.colors.darkGray,
            borderLeftColor: 'orange',
            borderLeftWidth: 8
            // justifyContent: 'center',
            // alignItems: 'center'
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Icon name={`md-alert`} size={25} color={`orange`} />
            <View style={{ paddingLeft: 10, paddingTop: 10 }}>
              <Text
                allowFontScaling
                style={{
                  fontSize: theme.fonts.base,
                  fontFamily: theme.fonts.semibold,
                  color: theme.colors.black
                }}
              >
                Disclaimer
              </Text>
              <Text
                allowFontScaling
                style={{
                  fontSize: 10,
                  fontFamily: theme.fonts.regular
                }}
              >
                {`While we support most recharges, we request you to\n verify with your operator once before proceeding.`}
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    )
  }
};
