import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  StatusBar,
  TouchableOpacity,
  Dimensions
} from "react-native";
import Header from "../../components/Header/Header";
import TopCards from "./TopCardScroller";
import BottomCards from "./BottomCardScroller";
import ProfilePic from "../../../assets/profilepic.png";
import Styles from "./HomeStyles";
import TransactionDetail from "./TransactionDetails";
import Modal from "../../components/Modal/Modal";
import AirtimeRecharge from "./AirtimeRecharge/AirtimeRecharge";
import ScrollableCards from "../../components/ScrollableCards/ScrollableCards";

import TransferContactsModal from "./Transfers/TransferContactsModal";
import TransferFormModal from "./Transfers/TransferFormModal";
import TransactionComplete from "../../components/TransactionComplete/TransactionComplete";
import TransferSearchListModal from "./Transfers/TransferSearchListModal";
import DepositModal from "./Deposits/DepositModal";
import DepositAmountModal from "./Deposits/DepositAmountModal";
import TransferToOwnAccount from "./Transfers/TransferToOwnAccount";
import WithdrawalModal from "./Withdrawals/WithdrawalModal";
import TvModal from "./Tv/TvModal";
import { items } from "../../components/SelectableList/SelectableList";
import Advert from "../../../assets/advert.png";
import LoanRequest from './Loans/LoanRequest';
import LoanPendingApprovals from './Loans/LoanPendingApprovals';
import LoanAmountField from './Loans/LoanAmountField';
import StarTimesDetails from './UtilityPayments/StarTimesDetails';

import theme from "../../constants/theme";
import CashReward from "./CashReward/CashReward";

const { width, height } = Dimensions.get("screen");

export default class Home extends Component {
  state = {
    modalProps: {
      height: "20%",
      component: null,
      modalProps: true,
      prepaid: false
    },
    loanRequestList: false,
    isModalShowing: false,
    transferToOwn: false,
    transferring: false,
    transferred: false,
    openDepositForm: false,
    processingDeposit: false,
    doneDepositProcessing: false,
    transferToOwnDone: false,
    list: items,
    subscription: true
  };

  componentDidMount() {
    setTimeout(() => {
      this.renderModal("Reward");
    }, 50);
  }

  switchSelectedTvSubscription = index => {
    const { list } = this.state;
    const newList = [...list];
    newList[index].selected = !list[index].selected;
    return this.setState({
      list: newList
    });
  };

  calcCount = () => {
    const { list } = this.state;
    let c = 0;
    list.map(el => {
      if (el.selected) {
        c += 1;
        return c;
      }
    });
    return c;
  };

  renderTopHeader = (
    <View style={{ alignItems: "flex-end" }}>
      <Image
        source={ProfilePic}
        style={{
          width: width > 320 ? 40 : 30,
          height: width > 320 ? 40 : 30,
          marginRight: "2%",
          borderRadius: 60
        }}
      />
    </View>
  );

  renderModal = title => {
    let newProps = null;
    const { list, subscription, prepaid } = this.state;
    // eslint-disable-next-line default-case
    switch (title) {
      case "Withdraw":
        newProps = this.setState({
          modalProps: {
            height: "80%",
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
            title: "Withdraw",
            showCloseButton: true
          },
          isModalShowing: true
        });
        break;
      case "Deposit":
        newProps = this.setState({
          modalProps: {
            height: "80%",
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
            title: "Deposit",
            showCloseButton: true,
            fullWidth: true
          },
          isModalShowing: true
        });
        break;
      case "Transfer":
        newProps = this.setState({
          modalProps: {
            height: "80%",
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
            title: "Transfer",
            fullWidth: true
          },
          isModalShowing: true
        });
        break;
      case 'LoanRequest':
        newProps = this.setState({
          modalProps: {
            height: computedHeight,
            component: (
              <LoanPendingApprovals approve={() => this.setState({}, () => this.renderModal('LoanApprove'))} />
            )
          },
          isModalShowing: true,
          title: 'Loan Request',
          showCloseButton: true
        });
      break;
      case 'LoanApprove':
          newProps = this.setState({
            modalProps: {
              height: computedHeight,
              component: (
                <LoanAmountField onDone={() => this.setState({ isModalShowing: false })}/>
              )
            },
            isModalShowing: true
          });
      break;
      case 'Dstv':
          newProps = this.setState({
            modalProps: {
              height: computedHeight,
              component:( <StarTimesDetails /> )
            },
            isModalShowing: true
          });
      break;
      case 'Airtime':
        newProps = this.setState({
          modalProps: {
            height: computedHeight,
            component: this.renderAirtimeRechargeModal()
          },
          isModalShowing: true
        });
        break;
      case "Tv":
        newProps = this.setState({
          modalProps: {
            height: "80%",
            component: (
              <TvModal
                subscription={subscription}
                renewSubHandler={this.toggleSubscription}
                closeModal={() => this.setState({ isModalShowing: false })}
              />
            ),
            showCloseButton: true,
            fullWidth: true
          },
          isModalShowing: true
        });
        break;
      case "Reward":
        newProps = this.setState({
          modalProps: {
            height: "30%",
            component: <CashReward />,
            showCloseButton: true,
            fullWidth: false
          },
          isModalShowing: true
        });
        break;
      case 'Loan':
        newProps = this.setState({
          modalProps: {
            //height: '35%',
            height: height >= 720 ? '80%' : '90%',
            component: (
              <LoanRequest
                proceed={() =>
                  this.setState({}, () => this.renderModal('LoanRequest'))
                }
              />
            )
          },
          isModalShowing: true,
          title: 'Loan Request',
          showCloseButton: true
        });
        break;
    }
    return newProps;
  };

  toggleSubscription = () => {
    console.log("xxxxxxxxxxxxx");
    this.setState(prevState => ({
      subscription: !prevState.subscription
    }));
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
          height: "80%",
          showCloseButton: true,
          title: "Transfer",
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
          height: "30%",
          component: (
            <TransactionComplete
              dueDate
              status="Verifying"
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
          height: "80%",
          showCloseButton: true,
          title: "Transfer",
          component: (
            <TransferFormModal
              showDateField
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
          height: "30%",
          component: (
            <TransactionComplete
              dueDate
              status="Verifying"
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
          height: "25%",
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
          height: "30%",
          component: (
            <TransactionComplete
              status="Verifying"
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
          height: "30%",
          component: (
            <TransactionComplete
              status="Verifying"
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
        label: "Processing",
        percent: "60%",
        time: 2000,
        color: "blue"
      };
      this.processTransactionModal(param);
    }

    if (doneDepositProcessing && processingDeposit && isModalShowing) {
      this.processTransactionModal({
        stateProp: { processingDeposit: false, doneDepositProcessing: false },
        label: "Done",
        percent: "100%",
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
            height: "30%",
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
            this.setState({ isModalShowing: false, loanRequestList: false })
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
          styles={{ marginTop: "12%" }}
        />
        <View
          style={{
            height: width > 320 ? 130 : 120,
            position: "absolute",
            // marginTop: width > 320 ? "35%" : "32%",
            width: "100%",
            zIndex: 90,
            top: width > 320 ? 120 : 95
          }}
        >
          <ScrollableCards buttonTopHeight={height >= 720 ? 145 : 135} />
        </View>

        <ScrollView style={{ marginTop: width > 320 ? 90 : 100 }}>
          <View
            style={{
              alignItems: "center",
              // height: "3%",
              borderColor: "red",
              flexDirection: "row",
              justifyContent: "center",
              marginTop: height >= 320 ? 5 : 20,
              borderBottomColor: "#ccc",
              borderBottomWidth: 1
            }}
          />
          <Text
            allowFontScaling
            style={{
              marginLeft: "6%",
              fontSize: 18,
              fontWeight: "bold",
              color: "rgba(0,0,0,.5)",
              top: 5
            }}
          >
            Pay Bills
          </Text>

          <View style={{ marginTop: 10 }}>
            <BottomCards clicked={e => this.renderModal(e)} />
          </View>

          <View
            style={{
              alignItems: "center",
              // height: "3%",
              borderColor: "red",
              flexDirection: "row",
              justifyContent: "center",
              // marginTop: height >= 720 ? 70 : 100,
              borderBottomColor: "#ccc",
              borderBottomWidth: 1,
              marginTop: 10
            }}
          />

          <View
            style={{
              width: "100%",
              alignItems: "center",
              height: width > 320 ? 90 : 70,
              marginTop: 10
            }}
          >
            <Image
              source={Advert}
              style={{ width: "90%", height: "100%", borderRadius: 10 }}
              resizeMethod="auto"
              resizeMode="cover"
            />
          </View>
          <View
            style={[
              {
                // flexShrink: 1,
                borderTopRightRadius: 30,
                borderTopLeftRadius: 30,
                paddingLeft: "5%",
                paddingRight: "5%",
                marginTop: 10
                // marginTop: width > 320 ? "2%" : 0
              },
              Styles.scrollShadow
            ]}
          >
            <View
              style={{
                // height: "20%",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                marginTop: 15
              }}
            >
              <Text
                allowFontScaling
                style={{
                  color: "rgba(35, 31, 32, 0.54)",
                  fontSize: 18,
                  fontWeight: "bold"
                }}
              >
                Recent Transactions
              </Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Transactions")}
              >
                <Text
                  allowFontScaling
                  style={{ color: "rgb(0,58,238)", fontSize: 16 }}
                >
                  View All
                </Text>
              </TouchableOpacity>
            </View>

            {fixture.map((item, index) => (
              <View style={{ height: 60 }} key={Math.random()}>
                <TransactionDetail
                  status={item.status}
                  description={item.description}
                  time={item.time}
                  amount={item.amount}
                  first={index === 0}
                />
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const fixture = [
  {
    status: "pending",
    description: "Account for boys",
    time: "25th May",
    amount: 240000
  },
  {
    status: "recieved",
    description: "Account for girls",
    time: "25th May",
    amount: 2000000
  },
  {
    status: "sent",
    description: "Account for sacco",
    time: "25th May",
    amount: 45000
  },
  {
    status: "pending",
    description: "Account for admin",
    time: "25th May",
    amount: 20000000
  },
  {
    status: "pending",
    description: "Tweyambe",
    time: "25th May",
    amount: 48000
  }
];
