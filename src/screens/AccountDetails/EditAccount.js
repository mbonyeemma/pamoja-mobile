import React, { Component } from 'react';
import {
  Text,
  View,
  StatusBar,
  ScrollView,
  TextInput,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Header from '../../components/Header/Header';
import AccountHolder from '../../components/AccountHolder/AccountHolder';
import ActionTopHeader from '../../components/ActionHeader/ActionTopHeader';
import ActionBottomHeader from '../../components/ActionHeader/ActionBottomHeader';
import UserPermissionItem from '../../components/UserPermissionItem/UserPermissionItem';

import theme from '../../constants/theme';

class EditAccount extends Component {
  topHeader = <ActionTopHeader alertText='done editing account' />;

  bottomHeader = <ActionBottomHeader bottomText='Edit Account' />;

  render() {
    return (
      <View style={{ display: 'flex', flex: 1, height: '100%' }}>
        <View style={{ height: '15%' }}>
          <Header
            style={{
              borderWidth: 0
            }}
            topHeader={this.topHeader}
            bottomHeader={this.bottomHeader}
          />
        </View>
        <ScrollView style={{ display: 'flex', width: '100%' }}>
          <View
            style={{
              flexDirection: 'row',
              width: '90%',
              height: 50,
              marginLeft: 20,
              marginRight: 20,
              marginTop: 20,
              alignItems: 'flex-end'
            }}
          >
            <Icon name='md-person' size={35} color={theme.colors.black} />
            <View style={{ flex: 3, marginLeft: 15 }}>
              <Text
                style={{
                  flex: 1.8,
                  fontSize: theme.fonts.base,
                  fontFamily: theme.fonts.regular,
                  paddingLeft: 4
                }}
              >
                Account name
              </Text>
              <TextInput
                style={{
                  flex: 2,
                  fontSize: theme.fonts.base + 2,
                  fontFamily: theme.fonts.regular,
                  paddingBottom: 0,
                  borderBottomColor: theme.colors.darkGray,
                  borderBottomWidth: 1
                }}
                value='Mbuya Parents Assocation'
              />
            </View>
          </View>
          <View
            style={{
              borderTopColor: theme.colors.darkGray,
              borderTopWidth: 1,
              width: '100%'
            }}
          >
            <Text
              style={{
                width: '90%',
                marginLeft: 20,
                marginRight: 20,
                marginBottom: 20,
                marginTop: 20,
                fontSize: theme.fonts.base,
                fontFamily: theme.fonts.semibold
              }}
            >
              Account Members
            </Text>
            {[
              {
                id: 1,
                name: 'Me',
                status: 'Clear 800,000',
                user: true
              },
              {
                id: 2,
                name: 'Timo Bravo',
                status: 'Clear 300,000',
                user: true
              },
              {
                id: 3,
                name: 'Charles Bogere',
                status: 'Clear 800,000',
                user: true
              },
              {
                id: 4,
                name: 'Andrea Kiiza',
                status: 'Clear 300,000',
                user: true
              }
            ].map(item => (
              <AccountHolder
                key={item.id}
                name={item.name}
                status={item.status}
                transaction={item.transaction}
              />
            ))}
          </View>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
              paddingBottom: 10
            }}
          >
            <TouchableOpacity
              style={{
                padding: 10
              }}
              onPress={() => alert('should show more members')}
            >
              <Text
                style={{
                  fontSize: theme.fonts.base,
                  fontFamily: theme.fonts.regular,
                  color: theme.colors.blue,
                  marginRight: 20
                }}
              >
                3 More
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: '90%',
              marginLeft: 20,
              marginRight: 20,
              marginTop: 10,
              paddingTop: 10,
              borderTopColor: theme.colors.darkGray,
              borderTopWidth: 1
            }}
          >
            <Text
              style={{
                fontSize: theme.fonts.base + 2,
                fontFamily: theme.fonts.regular
              }}
            >
              Admin Rules
            </Text>
            <Text
              style={{
                fontSize: theme.fonts.base,
                fontFamily: theme.fonts.regular
              }}
            >
              These are the administrator rules specifying the "number of admins
              required to"
            </Text>
            {[
              {
                id: 1,
                name: 'add a member',
                number: 1
              },
              {
                id: 2,
                name: 'make a member an admin',
                number: 2
              },
              {
                id: 3,
                name: 'make a withdrawal',
                number: 1
              },
              {
                id: 4,
                name: 'make payment',
                number: 2
              },
              {
                id: 5,
                name: 'change rules',
                number: 2
              },
              {
                id: 6,
                name: 'remove an admin',
                number: 0
              }
            ].map(item => (
              <UserPermissionItem
                key={item.id}
                name={item.name}
                number={item.number}
              />
            ))}
          </View>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
              paddingBottom: 10
            }}
          >
            <TouchableOpacity
              style={{
                padding: 10
              }}
              onPress={() => alert('should show more')}
            >
              <Text
                style={{
                  fontSize: theme.fonts.base,
                  fontFamily: theme.fonts.regular,
                  color: theme.colors.blue,
                  marginRight: 20
                }}
              >
                4 More
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: '90%',
              marginLeft: 20,
              marginRight: 20,
              marginTop: 20,
              paddingTop: 20,
              paddingBottom: 20,
              borderTopColor: theme.colors.darkGray,
              borderTopWidth: 1
            }}
          >
            <Text
              style={{
                fontSize: theme.fonts.base + 2,
                fontFamily: theme.fonts.regular
              }}
            >
              Account Limitations
            </Text>
            <Text
              style={{
                fontSize: theme.fonts.base,
                fontFamily: theme.fonts.regular
              }}
            >
              This account is limited to...
            </Text>
            {[
              {
                id: 1,
                name: 'withdrawal per week',
                icon: 'md-arrow-dropdown',
                number: 1
              },
              {
                id: 2,
                name: 'payments per week',
                icon: 'md-arrow-dropdown',
                number: 4
              }
            ].map(item => (
              <UserPermissionItem
                key={item.id}
                name={item.name}
                number={item.number}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default EditAccount;
