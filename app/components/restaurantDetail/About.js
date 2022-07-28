import { View, Text, Image } from "react-native";
import React from "react";

const restrontinformation = {
  name: "indian",
  image1:
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
  price: "$$",
  reviews: "1500",
  rating: "5",
  category: [
    {
      title: "foood",
    },
    {
      title: "foood data",
    },
    {
      title: "foood data",
    },
  ],
};

const { name, image1, price, reviews, rating, category } = restrontinformation;

const formatedcategories = category.map((cat) => cat.title).join(".");
const discriptiondata = `${formatedcategories} ${
  price ? "." + price : ""
}.${rating}.${reviews}`;
const image =
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80";
const title = "Restaurant take good food";
const discription = "Lorem Ipsum, *  Lorem Ipsum, * Lorem Ipsum, * Lorem Ipsum";
export default function About() {
  return (
    <View>
      <Restaurantimg image={image} />
      <Restauranttitle title={name} />
      <RestaurantDescription description={discriptiondata} />
    </View>
  );
}

const Restaurantimg = (props) => (
  <Image
    source={{
      uri: props.image,
    }}
    style={{ width: "100%", height: 180 }}
  />
);

const Restauranttitle = (props) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "600",
      marginTop: 5,
      marginHorizontal: 15,
    }}
  >
    {props.title}
  </Text>
);

const RestaurantDescription = (props) => (
  <Text
    style={{
      fontSize: 14,
      fontWeight: "400",
      marginTop: 5,
      marginHorizontal: 15,
    }}
  >
    {props.description}
  </Text>
);
