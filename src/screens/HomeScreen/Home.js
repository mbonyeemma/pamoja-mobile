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
import Styles from './HomeStyles';
import TransactionDetail from './TransactionDetails';
import Modal from '../../components/Modal/Modal';
import AirtimeRecharge from './AirtimeRecharge/AirtimeRecharge';
import ScrollableCards from '../../components/ScrollableCards/ScrollableCards';

import TransferContactsModal from './Transfers/TransferContactsModal';
import TransferFormModal from './Transfers/TransferFormModal';
import TransactionComplete from '../../components/TransactionComplete/TransactionComplete';
import TransferSearchListModal from './Transfers/TransferSearchListModal';
import DepositModal from './Deposits/DepositModal';
import DepositAmountModal from './Deposits/DepositAmountModal';
import TransferToOwnAccount from './Transfers/TransferToOwnAccount';
import WithdrawalModal from './Withdrawals/WithdrawalModal';

import theme from '../../constants/theme';

const { width, height } = Dimensions.get('screen');

export default class Home extends Component {
  state = {
    modalProps: {
      height: '20%',
      component: null,
      modalProps: true,
      prepaid: false
    },
    isModalShowing: false,
    transferToOwn: false,
    transferring: false,
    transferred: false,
    openDepositForm: false,
    processingDeposit: false,
    doneDepositProcessing: false,
    transferToOwnDone: false
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

  renderModal = title => {
    let newProps = null;
    const { prepaid } = this.state;
    // eslint-disable-next-line default-case
    switch (title) {
      case 'Withdraw':
        newProps = this.setState({
          modalProps: {
            height: '80%',
            showCloseButton: true,
            component: (
              <WithdrawalModal
                submitTransfer={() =>
                  this.setState({
                    withdrawComplete: true,
                    isModalShowing: false
                  })
                }
              />
            ),
            fullWidth: true,
            title: 'Withdraw',
            showCloseButton: true
          },
          isModalShowing: true
        });
        break;
      case 'Deposit':
        newProps = this.setState({
          modalProps: {
            height: '80%',
            component: (
              <DepositModal
                openAmountField={() =>
                  this.setState({
                    openDepositForm: true,
                    isModalShowing: false
                  })
                }
              />
            ),
            title: 'Deposit',
            showCloseButton: true,
            fullWidth: true
          },
          isModalShowing: true
        });
        break;
      case 'Transfer':
        newProps = this.setState({
          modalProps: {
            height: '80%',
            component: (
              <TransferContactsModal
                pressed={() =>
                  this.setState({ isModalShowing: false, transferring: true })
                }
                transferToMyAccount={() =>
                  this.setState({ isModalShowing: false, transferToOwn: true })
                }
              />
            ),
            showCloseButton: true,
            title: 'Transfer',
            fullWidth: true
          },
          isModalShowing: true
        });
        break;
      case 'Airtime':
        newProps = this.setState({
          modalProps: {
            height: height >= 720 ? '80%' : '90%',
            component: this.renderAirtimeRechargeModal()
          },
          isModalShowing: true
        });
        break;
    }
    return newProps;
  };

  setPaymentMethod = () => {
    this.setState({
      prepaid: false
    });
  };

  renderAirtimeRechargeModal = () => (
    <AirtimeRecharge
      prePaid={this.state.prepaid}
      setPost={() => this.setState({ prepaid: false })}
      setPre={() => this.setState({ prepaid: true })}
    />
  );

  withdraw = () => <Text>This is withdraw</Text>;

  deposit = () => <Text>This is deposit</Text>;

  renderNextModals = () => {
    const {
      isModalShowing,
      transferToOwn,
      transferring,
      transferred,
      openDepositForm,
      processingDeposit,
      doneDepositProcessing,
      withdrawComplete,
      transferToOwnDone
    } = this.state;

    if (transferToOwn && !isModalShowing) {
      return this.setState({
        modalProps: {
          height: '80%',
          showCloseButton: true,
          title: 'Transfer',
          component: (
            <TransferToOwnAccount
              close={() =>
                this.setState({
                  isModalShowing: false,
                  transferToOwn: false,
                  transferToOwnDone: true
                })
              }
            />
          ),
          fullWidth: true
        },
        isModalShowing: true
      });
    }
    if (transferToOwnDone && !transferToOwn && !isModalShowing) {
      return this.setState({
        isModalShowing: true,
        modalProps: {
          height: '30%',
          component: (
            <TransactionComplete
              dueDate={true}
              status={`Verifying`}
              close={() =>
                this.setState({
                  isModalShowing: false,
                  transferToOwnDone: false
                })
              }
            />
          ),
          fullWidth: false
        }
      });
    }

    if (transferring && !isModalShowing) {
      return this.setState({
        modalProps: {
          height: '80%',
          showCloseButton: true,
          title: 'Transfer',
          component: (
            <TransferFormModal
              showDateField={true}
              submitTransfer={() =>
                this.setState({
                  isModalShowing: false,
                  transferring: false,
                  transferred: true
                })
              }
            />
          ),
          fullWidth: true
        },
        isModalShowing: true
      });
    }

    if (transferred && !transferring && !isModalShowing) {
      return this.setState({
        isModalShowing: true,
        modalProps: {
          height: '30%',
          component: (
            <TransactionComplete
              dueDate={true}
              status={`Verifying`}
              close={() =>
                this.setState({
                  isModalShowing: false,
                  transferring: false,
                  transferred: false
                })
              }
            />
          ),
          fullWidth: false
        }
      });
    }
    if (openDepositForm && !isModalShowing) {
      return this.setState({
        modalProps: {
          height: '25%',
          component: (
            <DepositAmountModal
              cancel={() =>
                this.setState({
                  isModalShowing: false,
                  openDepositForm: false
                })
              }
              goToDeposit={() =>
                this.setState({
                  isModalShowing: false,
                  openDepositForm: false,
                  processingDeposit: true
                })
              }
            />
          ),
          fullWidth: true
        },
        isModalShowing: true
      });
    }
    if (processingDeposit && !isModalShowing) {
      return this.setState({
        isModalShowing: true,
        modalProps: {
          height: '30%',
          component: (
            <TransactionComplete
              status={`Verifying`}
              close={() =>
                this.setState({
                  isModalShowing: false,
                  processingDeposit: false
                })
              }
            />
          ),
          fullWidth: false
        }
      });
    }

    if (withdrawComplete && !isModalShowing) {
      return this.setState({
        isModalShowing: true,
        modalProps: {
          height: '30%',
          component: (
            <TransactionComplete
              status={`Verifying`}
              close={() =>
                this.setState({
                  isModalShowing: false,
                  withdrawComplete: false
                })
              }
            />
          ),
          fullWidth: false
        }
      });
    }

    if (!doneDepositProcessing && processingDeposit && isModalShowing) {
      const param = {
        stateProp: { doneDepositProcessing: true },
        label: 'Processing',
        percent: '60%',
        time: 2000,
        color: 'blue'
      };
      this.processTransactionModal(param);
    }

    if (doneDepositProcessing && processingDeposit && isModalShowing) {
      this.processTransactionModal({
        stateProp: { processingDeposit: false, doneDepositProcessing: false },
        label: 'Done',
        percent: '100%',
        time: 4000,
        color: theme.colors.green
      });
    }
  };

  processTransactionModal = property => {
    const { stateProp, label, percent, time, color } = property;
    if (property) {
      setTimeout(() => {
        this.setState({
          isModalShowing: true,
          modalProps: {
            height: '30%',
            component: (
              <TransactionComplete
                status={label}
                progressColor={color}
                percentage={percent}
                close={() =>
                  this.setState({
                    isModalShowing: false,
                    stateProp
                  })
                }
              />
            ),
            fullWidth: false
          }
        });
      }, time);
    }
  };

  render() {
    const { isModalShowing, modalProps } = this.state;
    this.renderNextModals();
    return (
      <View
        style={{
          flex: 1,
          display: 'flex'
          // backgroundColor: "rgb(240, 240, 240)"
        }}
      >
        <Modal
          fullWidth={modalProps.fullWidth}
          styles={modalProps}
          showing={isModalShowing}
          close={() =>
            this.setState({
              isModalShowing: false,
              transferToOwn: false,
              transferring: false,
              transferred: false,
              openDepositForm: false,
              processingDeposit: false,
              withdrawComplete: false,
              doneDepositProcessing: false,
              transferToOwnDone: false
            })
          }
          component={modalProps.component || null}
          title={modalProps.title || null}
          showCloseButton={modalProps.showCloseButton || false}
        />
        <StatusBar backgroundColor='blue' />
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
          {/* <Card
            style={{
              height: width > 320 ? 140 : 110,
              backgroundColor: 'black'
            }}
          /> */}
          <ScrollableCards buttonTopHeight={height >= 720 ? 140 : 130} />
        </View>

        <View
          style={{
            alignItems: 'center',
            height: '3%',
            borderColor: 'red',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: height >= 720 ? 70 : 100,
            borderBottomColor: '#ccc',
            borderBottomWidth: 1
          }}
        >
          {/* <Text style={{ fontSize: 60, color: 'rgba(0,0,0,.2)' }}>&#183;</Text>
          <Text style={{ fontSize: 60, color: 'rgba(0,0,0,.2)' }}>&#183;</Text>
        <Text style={{ fontSize: 60, color: 'green' }}>&#183;</Text> */}
        </View>

        <View
          style={{
            marginTop: '1%',
            height: 90,
            borderBottomColor: '#ccc',
            borderBottomWidth: 1
            // borderWidth: 1
          }}
        >
          <Text
            allowFontScaling
            style={{
              marginLeft: '6%',
              fontSize: 18,
              fontWeight: 'bold',
              color: 'rgba(0,0,0,.5)',
              top: -5
            }}
          >
            Pay Bills
          </Text>
          <BottomCards
            clicked={e => this.renderModal(e)}
            style={
              {
                // position: "absolute",
                // height: "40%",
                // marginTop: width > 320 ? "-5%" : "-20%"
                // top: 5, borderWidth: 1
              }
            }
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
          <ScrollView style={{}}>
            {fixture.map((item, index) => (
              <View style={{ height: 60 }} key={Math.random()}>
                <TransactionDetail
                  // key={Math.random()}
                  status={item.status}
                  description={item.description}
                  time={item.time}
                  amount={item.amount}
                  first={index === 0}
                />
              </View>
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
