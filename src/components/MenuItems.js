import React from "react";
import { SectionList, StyleSheet } from "react-native";
import { View, Text } from "react-native";

const green = "#EE9972";
const yellow = "yellow";

const MenuItems = [
  {
    title: "Breakfast",
    data: [{
      name: "Eggs",
      price: 5.99,
    }],
    color: green,
  },
  // {
  //   title: "Lunch",
  //   data: ["Sandwich", "Chips", "Soda"],
  //   color: yellow,
  // },
  // {
  //   title: "Dinner",
  //   data: ["Steak", "Potatoes", "Salad", "Wine"],
  //   color: green,
  // },
  // {
  //   title: "Dessert",
  //   data: ["Ice Cream", "Cake", "Pie"],
  //   color: yellow,
  // },
  // {
  //   title: "Snacks",
  //   data: ["Chips", "Pretzels", "Fruit"],
  //   color: green,
  // },
  // {
  //   title: "Drinks",
  //   data: ["Water", "Soda", "Beer", "Wine"],
  //   color: yellow,
  // },
  // {
  //   title: "Sides",
  //   data: ["Fries", "Salad", "Bread"],
  //   color: green,
  // },
  // {
  //   title: "Appetizers",
  //   data: ["Chips", "Dip", "Chips and Dip"],
  //   color: yellow,
  // },
];

const Item = ({ name }) => {
  return (
    <View>
      <Text
        style={
          menuStyles.container
        }
      >{
          `${name.name} - $${name.price}`
          // render the key name and value of the object
        }
        {Object.keys(name).map((key) => {
          return `${key}: ${name[key]}`;
        })}
      </Text>
    </View>
  )
}

export const Menu = () => {
  const renderItem = ({ item }) => <Item name={item} />;
  const renderHeader = ({ section: { title, color } }) => (
    <View style={{ backgroundColor: color }}>
      <Text>{title}</Text>
    </View>
  );
  return (
    <View style={menuStyles.container}>
      <SectionList
        keyExtractor={(_, index) => index}
        sections={MenuItems}
        renderItem={renderItem}
        renderSectionHeader={renderHeader}
      />
    </View>
  );
};

const menuStyles = StyleSheet.create({
  container: {
    flex: 0.80,
    backgroundColor: 'orange',
    alignItems: "center",
    justifyContent: "center",
    fontSize: 30,
  }
})