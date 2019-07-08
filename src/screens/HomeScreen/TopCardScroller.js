import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Styles from './HomeStyles';

export default ({data, styles}) => {
  return (
    <ScrollView horizontal style={[{height: '13%', position: 'absolute', width: '100%', paddingRight: 5, marginTop: '15%' }, styles ]}>
      {dataS.map(item => (
      <View key={Math.random()} style={{alignSelf: 'center', borderRadius: 10, marginLeft: 15, justifyContent: 'flex-start', alignItems: 'center', width: 60, height: 55, marginTop: -30}}>
        <Icon name={item.iconName} color="#bbb" size={30}
        style={[{backgroundColor: 'white', padding: 3, borderRadius: 10}, Styles.iconShadow]} onPress={() => alert('coming soon')} />
        <Text allowFontScaling style={{marginTop: 5, color: '#fff', fontSize: 10}}>{item.title}</Text> 
        
      </View>
      ))}
    </ScrollView>
  )
}


const dataS = [
  {
    iconName: "delete",
    title: "Deposit"
  },
  {
    iconName: "person",
    title: "Withdraw"
  },
  {
    iconName: "people",
    title: "Transfer"
  },
  {
    iconName: "phone",
    title: "Loan"
  },
  {
    iconName: "camera",
    title: "Post-office"
  },
  {
    iconName: "adb",
    title: "Repay"
  }
]