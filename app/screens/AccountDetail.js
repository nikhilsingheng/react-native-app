import { View, Text } from "react-native";
import React from "react";
import Account from "../components/Account/Account";
const AccountDetail = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        onPress={() => navigation.navigate("Account")}
        style={{ fontSize: 26, fontWeight: "bold" }}
      >
        <Account />
      </Text>
    </View>
  );
};

export default AccountDetail;
