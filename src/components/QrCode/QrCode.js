import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
// import ImagePicker from 'react-native-image-picker';
import Icon from "react-native-vector-icons/MaterialIcons";

export default class QrCode extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={{ flexDirection: "row", width: "90%" }}>
          <View style={{ width: "50%" }}>
            <Text>Show QR Code</Text>
          </View>

          <View
            style={{ alignItems: "flex-end", width: "50%" }}
          >
            <Icon name="close" size={20} color="black" style={{}}onPress={() => alert('QR scanner in development')}  />
          </View>
        </View>
        <View style={{ width: "90%", borderWidth: 1, flexGrow: 1, borderColor: "#ccc", marginBottom: 10 }} />
        <View
          style={{
            backgroundColor: "rgb(66,133,244)",
            bottom: 0,
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            width: "100%",
            justifyContent: "center"
          }}
        >
          <TouchableOpacity onPress={() => alert("coming soon")}>
            <Text
              allowFontScaling
              style={{ padding: 25, color: "white", alignSelf: "center" }}
            >
              {" "}
              Show QR Code{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
