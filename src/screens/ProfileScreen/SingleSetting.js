import React from "react";
import { View, Text, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const { width } = Dimensions.get("screen");

const SingleSetting = ({ title, leftIcon, styles }) => (
  <View
    style={[
      { flexDirection: "row", height: width > 320 ? 60 : 50, top: "2%", width: "100%" },
      styles
    ]}
  >
    <View style={{ width: "10%", justifyContent: "center" }}>
      {leftIcon ? (
        <Icon
          name={leftIcon}
          size={width > 320 ? 25 : 20}
          color="rgb(167, 165, 166)"
          style={{ alignSelf: "flex-start" }}
        />
      ) : (
        <View style={{ width: 20 }} />
      )}
    </View>
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: "rgba(0,0,0,.095)",
        justifyContent: "center",
        flexGrow: 1
      }}
    >
      <Text>{title}</Text>
    </View>

    <View
      style={{
        width: "10%",
        borderBottomWidth: 1,
        borderBottomColor: "rgba(0,0,0,.125)",
        justifyContent: "center"
      }}
    >
      <Icon name="keyboard-arrow-right" size={20} color="rgb(167, 165, 166)" />
    </View>
  </View>
);

export default SingleSetting;
