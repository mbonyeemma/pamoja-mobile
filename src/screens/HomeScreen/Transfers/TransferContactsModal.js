import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import theme from '../../../constants/theme';
import ContactListItem from '../../../components/ContactListItem/ContactListItem';

const data = [
  {
    active: true,
    name: 'Andrea Kiiza'
  },
  {
    active: false,
    name: 'Cardi Nuwamanya'
  },
  {
    active: true,
    name: 'Charlie Bogere'
  },
  {
    active: false,
    name: 'Jeremy Oketayot'
  },
  {
    active: false,
    name: 'Mariam Namuyimba'
  },
  {
    active: true,
    name: 'Timo Bravo'
  },
  {
    active: true,
    name: 'Vanesa Babirye'
  }
];

export default class TransferContactsModal extends Component {
  render() {
    return (
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: theme.colors.lightWhite,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingLeft: '10%',
          paddingRight: '10%'
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            paddingTop: '10%'
          }}
        >
          <Icon style={{ flex: 1 }} name='md-card' size={20} />
          <Text
            allowFontScaling
            style={{
              flex: 5,
              fontSize: theme.fonts.base,
              fontFamily: theme.fonts.regular,
              color: theme.colors.lightBlack
            }}
          >
            Transfer to my Pamoja Account
          </Text>
          <Icon style={{ flex: 0.5 }} name='md-arrow-forward' size={20} />
        </View>
        <View
          style={{
            flex: 10,
            borderTopWidth: 1,
            paddingTop: '5%',
            borderTopColor: theme.colors.gray
          }}
        >
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Icon name='md-contacts' size={20} />
            <Text
              allowFontScaling
              style={{
                marginLeft: 10,
                fontFamily: theme.fonts.regular,
                fontSize: theme.fonts.base,
                color: theme.colors.lightBlack
              }}
            >
              Contacts
            </Text>
          </View>
          <View style={{ flex: 8 }}>
            <ScrollView>
              {data.map((item, index) => (
                <ContactListItem
                  key={Math.random()}
                  active={item.active}
                  name={item.name}
                  pressed={this.props.pressed}
                />
              ))}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    );
  }
}
