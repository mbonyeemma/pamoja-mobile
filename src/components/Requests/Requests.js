import React from 'react';
import { View, ScrollView } from 'react-native';
import Request from './Request';

export default (props) => (
  <View style={{flex: 1, alignItems: 'center'}}>
    <View style={{borderWidth: 1, width: '5%', borderColor: '#ccc', marginTop: '4%'}}/>    
    <ScrollView style={{width: '100%'}}>
      {props.requests.map(request => (
        <Request 
          type={request.type}
          name={request.name}
          requestedBy={request.requestedBy}
          approvedBy={request.approvedBy}
          approvals={request.approvals}
          key={Math.random()}
        />
      ))}
    </ScrollView>
  </View>
);


