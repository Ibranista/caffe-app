import React from "react";
import {View,Text,ScrollView} from "react-native";

const green = "#477009";
const yellow = "#F4CE14";

const MenuItems = [
    {
        title: "Breakfast",
        text: "Eggs, toast, bacon, coffee",
        color: green,
    },
    {
        title: "Lunch",
        text: "Soup, salad, sandwich",
        color: yellow,
    },
    {
        title: "Dinner",
        text: "Pasta, meat, wine",
        color: green,
    },
    {
        title: "Dessert",
        text: "Ice cream, cookies, cake",
        color: yellow,
    },
    {
        title: "Drinks",
        text: "Soda, water, beer",
        color: green,
    },
    {
        title: "Kids Menu",
        text: "Chicken fingers, fries, juice",
        color: yellow,
    
    },
    {
        title: "Orange",
        text: "Red, white, rose",
        color: green,
    },
    {
        title: "Cocktails",
        text: "Margarita, martini, mojito",
        color: yellow,
    },
    {
        title: "Beer",
        text: "IPA, lager, ale",
        color: green,
    },
    {
        title: "Coffee",
        text: "Latte, cappuccino, americano",
        color: yellow,
    },
    {
        title: "Tea",
        text: "Black, green, herbal",
        color: green,
    },
    {
        title: "Smoothies",
        text: "Strawberry, banana, mango",
        color: yellow,
    
    }
    

]

export const Menu =()=>{
    return(
        <View style={{flex:0.75}}>
            <ScrollView style={{
                padding:40,
                backgroundColor: '#495E57',
                indicatorStyle: 'white',
            }}
            horizontal={false}
            >
                <Text style={{fontSize:40,flexWrap:'wrap',color:'white'}}>View Menu</Text>
                {MenuItems.map((item,index)=>{
                    return(
                        <View
                            key={index}
                            style={{
                                backgroundColor: item.color,
                                padding: 20,
                                marginVertical: 8,
                                marginHorizontal: 16,
                            }}>
                            <Text style={{ fontSize: 32, color: "white" }}>
                                {item.title}
                            </Text>
                            <Text style={{ fontSize: 18, color: "white" }}>
                                {item.text}
                            </Text>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    )
}