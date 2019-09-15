import Swipeable from "react-native-gesture-handler/Swipeable";
import React from "react";
import { View, Text } from "react-native";

export default class Swipe extends React.Component {
  renderIcons = () => {
    return (
      <View
        style={{
          width: "50%",
          backgroundColor: "green",
          borderWidth: 1,
          borderColor: "red",
          height: '100%'
        }}
      />
    );
  };
  render() {
    return (
      // <View style={{ flex: 1 }}>
        <Swipeable open={this.renderIcons}>
          {/* <View
            style={{
              width: "100%",
              borderWidth: 1,
              height: 50,
              justifyContent: "center",
              backgroundColor: '#aaa'
            }}
          > */}
            <Text>Here..</Text>
          {/* </View> */}
        </Swipeable>
      // </View>
    );
  }
}
