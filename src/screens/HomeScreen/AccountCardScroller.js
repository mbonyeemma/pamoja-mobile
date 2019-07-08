import React from 'react'
import { View, Text, ScrollView} from 'react-native';
import Card from '../../components/Card/Card';

const AccountCardScroller = () => {
  return (
    // <ScrollView horizontal style={{flex: 1, position: 'absolute', borderWidth: 2, borderColor: 'brown', width: '100%', height: '20%'}}> 
    //   {/* <View> */}
    //     {[0, 1, 2].map(el => (
    //       <Card style={{backgroundColor: 'green'}}/>
    //     ))}
    //   {/* </View> */}
    // </ScrollView>
    <View style={{width: '100%', height: '20%'}}>
      <ScrollView style={{height: '100%', width: '100%'}}>
        <Card style={{backgroundColor: 'green', height: 130}}/>
        <Card style={{backgroundColor: 'green', height: 130}}/>
        <Card style={{backgroundColor: 'green', height: 130}}/>
        <Card style={{backgroundColor: 'green', height: 130}}/>
      </ScrollView>
    </View>
  )
}

export default AccountCardScroller
