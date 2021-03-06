import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  HomeScreen,
  WishlistScreen,
  NewsfeedScreen,
  CartScreen,
  CategoryScreen,
} from "containers";
import { TabBar } from "components";

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Category" component={CategoryScreen} />
      <Tab.Screen name="Wishlist" component={WishlistScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Newsfeed" component={NewsfeedScreen} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
