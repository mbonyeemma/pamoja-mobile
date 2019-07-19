import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import theme from '../../../constants/theme';
import { Sample } from '../../../components/OutstandingRequestsModal/OutstandingRequests';

const requests = [
  {
    type: 'Loan Request',
    name: 'Adrea Lopez',
    requestedBy: 'Joan Ester Kirabo',
    approvedBy: ['Timo Bravo', 'Mariam']
  },
  {
    type: 'Withdraw Request',
    name: '350,000',
    requestedBy: 'Charlie Bogere',
    approvedBy: '',
    approvals: []
  },
  {
    type: 'Withdraw Request',
    name: 'Adrea Lopez',
    requestedBy: 'Joan Ester Kirabo',
    approvedBy: ['Timo Bravo', 'Mariam']
  },
  ,
  {
    type: 'Withdraw Request',
    name: 'Adrea Lopez',
    requestedBy: 'Joan Ester Kirabo',
    approvedBy: ['Timo Bravo', 'Mariam']
  }
];

export default ({ label, approve }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <View
        style={{
          borderWidth: 1,
          width: '5%',
          borderColor: '#ccc',
          marginTop: '4%'
        }}
      />
      <ScrollView style={{ width: '100%' }}>
        {requests.map(request => (
          <Sample
            key={Math.random()}
            type={request.type}
            name={request.name}
            requestedBy={request.requestedBy}
            approvedBy={request.approvedBy}
            approvals={request.approvals}
            onApprove={approve || null}
          />
        ))}
      </ScrollView>
    </View>
  );
};
