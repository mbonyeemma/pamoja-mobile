import React from "react";
import { View, Text, Image } from "react-native";
import Img from "../../../../assets/birthday.png";

const CashReward = ({
  name = "Esther",
  message = "Happy Birthday",
  amount = 20000
}) => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      {/* <View style={{width: '50%', height: 150, borderWidth: 1}}> */}
      <Image source={Img} style={{ width: 200, height: 150, top: -50 }} />
      {/* </View> */}
      <View style={{ top: -35, alignItems: 'center'}}>
        <Text allowFontScaling style={{fontSize: 13, fontWeight: 'bold'}}>{`${message} ${name}`}</Text>
        <Text allowFontScaling style={{fontSize: 10}}>You have received</Text>
        <Text allowFontScaling style={{fontSize: 10}}>{`Ugx ${amount} cashback`}</Text>
      </View>
    </View>
  );
};

export default CashReward;
