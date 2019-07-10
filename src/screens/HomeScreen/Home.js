import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  StatusBar,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import Header from '../../components/Header/Header';
import TopCards from './TopCardScroller';
import BottomCards from './BottomCardScroller';
import ProfilePic from '../../../assets/profilepic.png';
import Card from '../../components/Card/Card';
import Styles from './HomeStyles';
import TransactionDetail from './TransactionDetails';
import Modal from '../../components/Modal/Modal';
import AirtimeRecharge from './AirtimeRecharge/AirtimeRecharge';

const { width } = Dimensions.get('screen');

export default class Home extends Component {
  state = {
    modalProps: {
      height: '20%',
      component: null,
      modalProps: true
    },
    isModalShowing: false
  };

  renderTopHeader = (
    <View style={{ alignItems: 'flex-end' }}>
      <Image
        source={ProfilePic}
        style={{
          width: width > 320 ? 40 : 30,
          height: width > 320 ? 40 : 30,
          marginRight: '2%',
          borderRadius: 60
        }}
      />
    </View>
  );

  renderModal = (title) => {
    let newProps = null;
    // eslint-disable-next-line default-case
    switch (title) {
      case 'Withdraw':
        newProps = this.setState({
          modalProps: {
            height: '20%',
            component: this.withdraw(),
            fullWidth: false
          },
          isModalShowing: true
        });
        break;
      case 'Deposit':
        newProps = this.setState({
          modalProps: {
            height: '80%',
            component: this.deposit(),
          },
          isModalShowing: true
        });
        break;
      case 'Airtime':
        newProps = this.setState({
          modalProps: {
            height: '80%',
            component: <AirtimeRecharge />,
          },
          isModalShowing: true
        });
        break;
    }
    return newProps;
  }

  withdraw = () => (<Text>This is withdraw</Text>)

  deposit = () => (<Text>This is deposit</Text>)

  render() {
    const { isModalShowing, modalProps } = this.state;
    return (
      <View
        style={{
          flex: 1,
          display: 'flex',
          backgroundColor: 'rgb(240, 240, 240)'
        }}
      >
        <Modal
          fullWidth={modalProps.fullWidth}
          styles={modalProps}
          showing={isModalShowing}
          close={() => this.setState({ isModalShowing: false })}
          component={modalProps.component || null}
        />
        <StatusBar backgroundColor="blue" />
        <View style={{ height: '30%' }}>
          <Header topHeader={this.renderTopHeader} />
        </View>
        <TopCards
          clicked={title => this.renderModal(title)}
          styles={{ marginTop: '12%' }}
        />
        <View
          style={{
            height: '25%',
            position: 'absolute',
            marginTop: width > 320 ? '35%' : '32%',
            width: '100%'
          }}
        >
          <Card
            style={{
              height: width > 320 ? 140 : 110,
              backgroundColor: 'black'
            }}
          />
        </View>

        <View
          style={{
            alignItems: 'center',
            height: '3%',
            borderColor: 'red',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: '25%',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1
          }}
        >
          <Text style={{ fontSize: 60, color: 'rgba(0,0,0,.2)' }}>&#183;</Text>
          <Text style={{ fontSize: 60, color: 'rgba(0,0,0,.2)' }}>&#183;</Text>
          <Text style={{ fontSize: 60, color: 'green' }}>&#183;</Text>
        </View>

        <View
          style={{
            marginTop: '1%',
            height: '18%',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1
          }}
        >
          <Text
            allowFontScaling
            style={{
              marginLeft: '6%',
              fontSize: 18,
              fontWeight: 'bold',
              color: 'rgba(0,0,0,.5)'
            }}
          >
            Pay Bills
          </Text>
          <BottomCards
            clicked={e => this.renderModal(e)}
            style={{
              position: 'absolute',
              height: '40%',
              marginTop: width > 320 ? '-5%' : '-20%'
            }}
          />
        </View>

        <View
          style={[
            {
              flexShrink: 1,
              borderTopRightRadius: 30,
              borderTopLeftRadius: 30,
              paddingLeft: '5%',
              paddingRight: '5%',
              marginTop: width > 320 ? '2%' : 0
            },
            Styles.scrollShadow
          ]}
        >
          <View
            style={{
              height: '20%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              marginTop: '5%'
            }}
          >
            <Text
              allowFontScaling
              style={{
                color: 'rgba(35, 31, 32, 0.54)',
                fontSize: 18,
                fontWeight: 'bold'
              }}
            >
              Recent Transactions
            </Text>
            <TouchableOpacity onPress={() => alert('coming soon')}>
              <Text
                allowFontScaling
                style={{ color: 'rgb(0,58,238)', fontSize: 16 }}
              >
                View All
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView style={{ marginTop: '-5%' }}>
            {fixture.map((item, index) => (
              <TransactionDetail
                key={Math.random()}
                status={item.status}
                description={item.description}
                time={item.time}
                amount={item.amount}
                first={index === 0}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const fixture = [
  {
    status: 'pending',
    description: 'Account for boys',
    time: '25th May',
    amount: 240000
  },
  {
    status: 'recieved',
    description: 'Account for girls',
    time: '25th May',
    amount: 2000000
  },
  {
    status: 'sent',
    description: 'Account for sacco',
    time: '25th May',
    amount: 45000
  },
  {
    status: 'pending',
    description: 'Account for admin',
    time: '25th May',
    amount: 20000000
  },
  {
    status: 'pending',
    description: 'Home Account',
    time: '25th May',
    amount: 48000
  }
];
