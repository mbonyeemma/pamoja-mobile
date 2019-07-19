import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Accounts from '../../screens/Accounts/Accounts';
import TransactionHistory from '../../screens/TransactionHistory';
import Homescreen from '../../screens/HomeScreen/Home';
import ProfileScreen from '../../screens/ProfileScreen/ProfileScreen';
import QrCodeScreen from '../QrCode/QrCode';

// config for the menu bar
export default createBottomTabNavigator(
  {
    Home: {
      screen: Homescreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name='home'
            color={tintColor}
            size={30}
            style={{ marginTop: '10%' }}
          />
        )
      }
    },
    Accounts: {
      screen: Accounts,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name='credit-card'
            color={tintColor}
            size={30}
            style={{ marginTop: '10%' }}
          />
        )
      }
    },
    BarCode: {
      screen: QrCodeScreen,
      navigationOptions: {
        title: '',
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name='camera'
            color={tintColor}
            size={60}
            style={{ marginTop: '10%' }}
          />
        )
      }
    },
    Transactions: {
      screen: TransactionHistory,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name='monetization-on'
            color={tintColor}
            size={30}
            style={{ marginTop: '10%' }}
          />
        )
      }
    },
    More: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name='more-horiz'
            color={tintColor}
            size={30}
            style={{ marginTop: '10%' }}
          />
        )
      }
    }
  },
  {
    tabBarOptions: {
      // text colors for active and inactive states
      activeTintColor: 'rgb(52, 168, 83)',
      inactiveTintColor: 'rgba(35, 31, 32, 0.5)',
      style: {
        // backgroundColor: 'green',
        borderTopColor: '#eee',
        // ==== begin shadow config
        shadowColor: '#eee',
        shadowOffset: {
          width: 10,
          height: 15
        },
        shadowOpacity: 0.4,
        shadowRadius: 18,
        elevation: 40
        // ===== end shadow config
      },
      labelStyle: {
        fontSize: 10,
        lineHeight: 20
        // fontFamily: 'Consolas'
      }
    },
    defaultNavigationOptions: {
      header: null
    }
  }
);
