import React, { Component } from "react";
import {
  View,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
  Text,
  Dimensions
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Ionicon from "react-native-vector-icons/Ionicons";
import AccountCard from "./Card";
import Header from "../../components/Header/Header";
// import camera from '../../../assets/camera.png';
import Profile from "./female.png";
import Swipeable from "react-native-swipeable";

class Accounts extends Component {
  constructor(props) {
    super(props);
  }

  width = Dimensions.get("screen").width;

  cards = [
    {
      accountName: "Tusasanye Spending",
      accountType: "Current account",
      totalMembers: 0,
      time: "25 mins ago",
      amount: "40,300",
      style: { backgroundColor: "blue" }
    },
    {
      accountName: "Mbuya Parents Association",
      accountType: "Joint Account",
      totalMembers: 3,
      time: "25 Feb",
      amount: "23,700,523",
      style: { backgroundColor: "black" }
    },
    {
      accountName: "James Associates",
      accountType: "Limbo Account",
      totalMembers: 100,
      time: "30 Jan 2019",
      amount: "1,800,050",
      style: { backgroundColor: "rgb(13, 207, 218)" }
    },
    {
      accountName: "Isaac Associates",
      accountType: "Fixed Account",
      totalMembers: 0,
      time: "1 Sept",
      amount: 0,
      style: { backgroundColor: "rgb(238, 103, 35)" }
    },
    {
      accountName: "Fashion Custom",
      accountType: "custom Account",
      totalMembers: 0,
      time: "Unknown",
      amount: "140,300",
      style: {}
    }
  ];

  topHeaderComponent = (
    <View
      style={{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "flex-end"
      }}
    >
      <View
        style={{
          width: this.width > 320 ? 45 : 35,
          height: this.width > 320 ? 45 : 35,
          // borderWidth: 1,
          borderColor: "white",
          borderRadius: this.width > 320 ? 25 : 20,
          alignItems: "center",
          justifyContent: "center",
          marginRight: "1%"
        }}
      >
        <Image
          source={Profile}
          style={{ width: "98%", height: "98%", borderRadius: 50 }}
          resizeMode="cover"
        />
      </View>
    </View>
  );

  bottomHeaderComponent = (
    <View
      style={{
        width: "100%",
        height: "100%",
        alignItems: "flex-end",
        display: "flex",
        flexDirection: "row"
      }}
    >
      <View
        style={{
          width: "80%",
          height: "100%",
          left: 0,
          justifyContent: "center",
          marginLeft: "5%"
        }}
      >
        <Text
          allowFontScaling
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "rgba(255,255,255,.7)"
          }}
        >
          Pamoja Accounts
        </Text>
      </View>
      <View
        style={{
          width: this.width > 320 ? 30 : 20,
          height: this.width > 320 ? 30 : 20,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 15,
          position: "absolute",
          backgroundColor: "rgb(66, 133, 244)",
          bottom: "5%",
          right: "2%"
        }}
      >
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("CreateAccount")}
        >
          <Icon
            name="add"
            size={this.width > 320 ? 25 : 15}
            color="white"
            style={{ padding: 5 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );

  renderActions = (
    <View>
      <Text>Something </Text>
    </View>
  );

  rightButtons = [
    <View
      style={{
        height: "100%",
        width: 47,
        // borderWidth: 1,
        justifyContent: "center"
      }}
    >
      <Icon
        onPress={() => this.props.navigation.navigate("EditAccount")}
        name="edit"
        color="black"
        size={25}
        style={{
          textAlign: "center",
          backgroundColor: "#eee",
          padding: 10,
          borderRadius: 50
        }}
      />
    </View>,
    <View
      style={{
        height: "100%",
        width: 47,
        // borderWidth: 1,
        justifyContent: "center"
      }}
    >
      <Icon
        onPress={() => this.props.navigation.navigate("EditAccount")}
        name="lock"
        color="black"
        size={25}
        style={{
          textAlign: "center",
          backgroundColor: "#eee",
          padding: 10,
          borderRadius: 50
        }}
      />
    </View>,
    <View
      style={{
        height: "100%",
        width: 47,
        // borderWidth: 1,
        justifyContent: "center"
      }}
    >
      <Ionicon
        onPress={() => this.props.navigation.navigate("EditAccount")}
        name="md-trash"
        color="white"
        size={25}
        style={{
          textAlign: "center",
          padding: 10,
          borderRadius: 50,
          backgroundColor: "red"
        }}
      />
    </View>
  ];

  navigateToAccountDetails = ({ navigation } = this.props) =>
    navigation.navigate("AccountDetails");

  render() {
    const { navigation } = this.props;
    return (
      <View
        style={{ display: "flex", height: "100%", backgroundColor: "white" }}
      >
        <StatusBar backgroundColor="blue" />
        <View style={{ height: "15%" }}>
          <Header
            topHeader={this.topHeaderComponent}
            bottomHeader={this.bottomHeaderComponent}
          />
        </View>
        <View style={{ backgroundColor: "#eee", display: "flex" }}>
          <ScrollView
            style={{ display: "flex", height: "85%", backgroundColor: "white" }}
          >
            {this.cards.map((item, ind) => (
              // <TouchableOpacity onPress={this.navigateToAccountDetails} key={Math.random()}>
              <Swipeable rightButtons={this.rightButtons} key={Math.random()}>
                <TouchableOpacity
                  onPress={() =>
                    alert(`Taking you to ${item.accountName} account`)
                  }
                >
                  <AccountCard
                    onSwipeFromLeft={this.renderActions}
                    accountName={item.accountName}
                    accountType={item.accountType}
                    totalMembers={item.totalMembers}
                    time={item.time}
                    amount={item.amount}
                    navigation={navigation}
                    style={{
                      ...item.style,
                      height: 130,
                      marginTop: ind === 0 ? "3%" : 0
                    }}
                  />
                </TouchableOpacity>
              </Swipeable>
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default Accounts;
