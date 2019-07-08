import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';



export default ({type, name, requestedBy, approvedBy, approvals}) => {
  
  return (
  <View style={{}}>
    <View style={{padding: '5%'}}>

    <Text style={{fontWeight: 'bold'}}>{type}</Text>
    <Text>Make "{name}" Admin</Text>
    <Text><Text style={{color: '#aaa'}}>Requested by</Text>: {requestedBy}</Text>
    <Text><Text style={{color: '#bbb'}}>Approved by</Text>: {approvedBy} <Text style={{color: 'rgba(0, 58, 238, 0.87)'}}>({approvals && approvals.length || 0}/3)</Text></Text>
    </View>
    <View style={{height: 40, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', borderTopWidth: 1, borderBottomWidth: 1, borderTopColor: '#eee',borderBottomColor: '#eee', backgroundColor: 'rgba(0,0,0,.03)'}}>

    <TouchableOpacity style={{marginRight: '15%'}} onPress={() => alert('feature coming soon...')}>
      <Text style={{color: 'rgba(35, 31, 32, 0.74)', fontSize: 12}}>Decline</Text>
    </TouchableOpacity>

    <TouchableOpacity style={{marginRight: '15%'}} onPress={() => alert('feature coming soon...')}>
      <Text style={{color: 'rgb(0, 58, 238)', fontSize: 12}}>Approve</Text>
    </TouchableOpacity>
    </View >
  </View>
)};
