import React from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import theme from "../../../constants/theme";
import LoanRequestBanner from "./LoanRequestBanner";
import FormField from "../AirtimeRecharge/FormField";
import LoanItemDetail from "./LoanItemDetail";
import LoanProceedButton from "./LoanProceedButton";
import SelectableList from "../../../components/SelectableList/SelectableList";

export default ({ currencyCode = "Ugx", proceed }) => {
  return (
    <ScrollView style={{ flex: 1, paddingTop: "5%" }}>
      <View style={{ width: "90%", marginLeft: 20 }}>
        <SelectableList title="Select 2-5 Admins as Guarantees" />
      </View>

      <View style={{marginTop: 10}}>
        <LoanRequestBanner />
      </View>

      <FormField
        header="Amount (Ugx)"
        placeholder="785,000"
        textChanged={() => null}
      />
      <FormField
        header="Return Period"
        placeholder="After 3 Months"
        textChanged={() => null}
      />
      {[
        { label: "Interest", value: "150,000" },
        { label: "Monthly Return", value: "233,700" }
      ].map(({ label, value }) => (
        <LoanItemDetail key={Math.random()} label={label} value={value} />
      ))}
      <View style={{ padding: "5%" }}>
        <Text
          style={{
            fontSize: theme.fonts.base + 2,
            fontFamily: theme.fonts.regular
          }}
        >
          Total Return
        </Text>
        <Text
          style={{
            fontSize: theme.fonts.base,
            fontFamily: theme.fonts.regular
          }}
        >
          {currencyCode}
          <Text
            style={{
              fontSize: theme.fonts.base + 2,
              fontFamily: theme.fonts.semibold,
              paddingLeft: 3
            }}
          >
            935,000
          </Text>
        </Text>
      </View>
      <LoanProceedButton label={`Proceed to Request`} confirmAction={proceed} />
    </ScrollView>
  );
};
