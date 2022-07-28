import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import Banner from "../components/Banner";
import HeaderTab from "../components/HeaderTab";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import BottomTabs from "../components/BottomTabs";
import RestaurantItems, {
  localRestaurants,
} from "../components/RestaurantItems";
const YELP_API_KEY =
  "bdRJutLhFAQJ36t7b89CWjHFBU4OKzjt9wvZzcY-nkgmvTqlNMjZWV1eG7iBQ9R74SyfxRg9LWnBAkZY06BtAZAe4d2dfX-2vuX8a1l5V7foctHfX9UKEyoM5ts3YXYx";

const Home = ({ navigation }) => {
  const [restaurantData, setrestaurantData] = useState(localRestaurants);

  // const getapi = () => {
  //   const api_url = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=SanDiego`;

  //   const apidata = {
  //     headers: {
  //       Authorization: `Bearer ${YELP_API_KEY}`,
  //     },
  //   };
  //   return fetch(api_url, apidata)
  //     .then((res) => res.json())
  //     .then((json) => setrestaurantData(json.businesses));
  // };
  // useEffect(() => {
  //   getapi();
  // }, []);
  return (
    <SafeAreaView
      style={{
        marginTop: 40,
        backgroundColor: "#eee",
        flex: 1,
      }}
    >
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTab />
        <SearchBar />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Banner />
        <Categories />
        <RestaurantItems
          restaurantData={restaurantData}
          navigation={navigation}
        />
      </ScrollView>

      <BottomTabs navigation={navigation} />
    </SafeAreaView>
  );
};

export default Home;
