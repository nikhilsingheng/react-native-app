import { View, Image, Text, ScrollView } from "react-native";
import React from "react";

const item = [
  {
    image: require("../assets/shopping-bag.png"),
    text: "Pick-up",
    Categorie: [{}],
  },
  {
    image: require("../assets/soft-drink.png"),
    text: "Soft Drinks",
  },
  {
    image: require("../assets/bread.png"),
    text: "Bakery Items",
  },
  {
    image: require("../assets/fast-food.png"),
    text: "Fast Foods",
  },
  {
    image: require("../assets/deals.png"),
    text: "Deals",
  },
  {
    image: require("../assets/coffee.png"),
    text: "Coffee & Tea",
  },
  {
    image: require("../assets/desserts.png"),
    text: "Desserts",
  },
];

const Categories = () => {
  return (
    <View
      style={{
        marginTop: 5,
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingLeft: 20,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {item.map((item, index) => (
          <View key={index} style={{ alignItems: "center", marginRight: 30 }}>
            <Image
              source={item.image}
              style={{
                width: 50,
                height: 40,
                resizeMode: "contain",
              }}
            />
            <Text style={{ fontSize: 13, fontWeight: "900" }}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;
