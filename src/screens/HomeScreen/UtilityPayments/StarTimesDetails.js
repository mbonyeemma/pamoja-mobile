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

export default class StarTimesDetails extends Component {
  state = {
      mode: 2
    };
  render() {
    return (
        <SafeAreaView
        style={{
          flex: 1,
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          backgroundColor: theme.colors.darkGray
        }}
      >
        <ScrollView
          horizontal
          style={{
            flex: 1,
            marginTop: 60,
            backgroundColor: theme.colors.darkGray
          }}
        >
          {[{ id: 1, label: 'Monthly Pack'}, {id: 2, label: '3 Month Packs'}, 
          {id: 3, label: '6 Month Packs'}, {id: 4, label: 'Annual Packs'} ].map(
            ({ id, label }) => {
              return (
                <TouchableOpacity
                  style={{
                    flex: 1,
                    borderRadius: 10,
                    backgroundColor: this.state.mode === id ? theme.colors.white : theme.colors.darkGray,
                    padding: 12
                  }}
                  key={Math.random()}
                  onPress={() => this.setState({ mode: id  })}
                >
                  <Text
                    allowFontScaling
                    style={{
                      fontSize: theme.fonts.base + 2,
                      fontFamily: theme.fonts.regular,
                      color: this.state.mode === id ? theme.colors.blue : theme.colors.darkerGray
                    }}
                  >
                    {label}
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
}


