import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './FirstAndLastNameStyles';
// import user from '../../../assets/user.png';

export default () => (
  <View style={styles.container}>
    <View style={{ display: 'flex', height: '100%', width: '100%', flexDirection: 'row', alignItems: 'center'}}>
      <View style={{display: 'flex', width: '10%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
        <Icon name="md-person" size={25} color="rgb(167,165,166)" resizeMode="contain" />
        {/* <Image source={user} style={{width: '70%', height: '70%'}} resizeMode="contain"/> */}
      </View>
      <View style={{ width: '35%', display: 'flex', marginLeft: '3%' }}>
        <Text style={{fontSize: 10, height: '25%'}}>First Name</Text>
        <TextInput style={{borderBottomWidth: 2, borderBottomColor: 'rgb(240,240,240)'}}/>
      </View>
      <View style={{ width: '35%', display: 'flex', marginLeft: '15%' }}>
        <Text style={{fontSize: 10, height: '25%'}}>Last Name</Text>
        <TextInput style={{borderBottomWidth: 2, borderBottomColor: 'rgb(240,240,240)' }}/>
      </View>
    </View>
  </View>
);
