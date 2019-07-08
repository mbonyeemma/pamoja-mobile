import React from 'react'
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import Modal from '../Modal/Modal';

class OutstandingRequests extends React.Component {

  state= {
    isModalOpen: true
  }
  comp = (
    <View style={{flex: 1, alignItems: 'center'}}>
    <View style={{borderWidth: 1, width: '5%', borderColor: '#ccc', marginTop: '4%'}}/>    
    <ScrollView style={{width: '100%'}}>
      {requests.map(request => (
        <Sample 
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
  )

  toggleModal = () => this.setState({isModalOpen: true})

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.toggleModal}>
        <Text>Click here</Text>

        </TouchableOpacity>
        <Modal 
        component={this.comp} 
        fullWidth 
        styles={{height: '75%'}}
        close={() => this.setState({isModalOpen: false})}
        showing={this.state.isModalOpen}/>
      </View>
    )
  }
}

export default OutstandingRequests;

export const Sample = ({type, name, requestedBy, approvedBy, approvals}) => (
  <View style={{}}>
    <View style={{padding: '5%'}}>

    <Text style={{fontWeight: 'bold'}}>{type}</Text>
    <Text>Make "{name}" Admin</Text>
    <Text><Text style={{color: '#aaa'}}>Requested by</Text>: {requestedBy}</Text>
    <Text><Text style={{color: '#bbb'}}>Approved by</Text>: {approvedBy} <Text style={{color: 'rgba(0, 58, 238, 0.87)'}}>({approvals && approvals.length || 0}/3)</Text></Text>
    </View>
    <View style={{height: 40, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', borderTopWidth: 1, borderBottomWidth: 1, borderTopColor: '#eee',borderBottomColor: '#eee', backgroundColor: 'rgba(0,0,0,.03)'}}>

    <TouchableOpacity style={{marginRight: '15%'}}>
      <Text style={{color: 'rgba(35, 31, 32, 0.74)'}}>Decline</Text>
    </TouchableOpacity>

    <TouchableOpacity style={{marginRight: '15%'}}>
      <Text style={{color: 'rgb(0, 58, 238)'}}>Approve</Text>
    </TouchableOpacity>
    </View >
  </View>
)

const requests = [
  {
    type: 'Make Admin Request',
    name: 'Adrea Lopez',
    requestedBy: "Alex Chopa",
    approvedBy: "Michael Akampa",
    // approvals: ["Michael Akampa"]
  },
  {
    type: 'Make Admin Request',
    name: 'Adrea Lopez',
    requestedBy: "Alex Chopa",
    approvedBy: "Michael Bravo",
    approvals: ["Kimberley Dennis", "Joshua Bogere", "Michael Akampa"]
  },
  {
    type: 'Make Admin Request',
    name: 'Adrea Lopez',
    requestedBy: "Alex Chopa",
    approvedBy: "",
    approvals: []
  },
  {
    type: 'Make Admin Request',
    name: 'Adrea Lopez',
    requestedBy: "Alex Chopa",
    approvedBy: "Michael Bravo",
    approvals: ["Kimberley Dennis", "Joshua Bogere", "Michael Akampa"]
  },
  {
    type: 'Make Admin Request',
    name: 'Adrea Lopez',
    requestedBy: "Alex Chopa",
    approvedBy: "Michael Bravo",
    approvals: ["Kimberley Dennis"]
  }
]
