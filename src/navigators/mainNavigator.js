import React from "react";
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import AntDesign from "react-native-vector-icons/AntDesign"
import Feather from "react-native-vector-icons/Feather"
import Home from '../views/home';
import Categories from '../views/categories';
import TabBarComponent from '../components/tabBar';
import CreateNote from '../views/createNote';

const MainNavigator = createBottomTabNavigator(
    {
        Notes: {
            screen: Home,
            navigationOptions: {
                headerShown: false,
                tabBarLabel: null,
                tabBarIcon: ({focused, tintColor: color}) => (
                    <AntDesign name="appstore-o" color={color} size={30} />
                )
            },
        },
        Categories: {
            screen: Categories,
            navigationOptions: {
                headerShown: false,
                tabBarIcon: ({focused, tintColor: color}) => (
                    <Feather name="hash" color={color} size={30} />
                )
            }
        },
    },
    {
        initialRouteName: "Notes",
        tabBarOptions: { showLabel: false }
    }
);

const MainAppNavigator = createStackNavigator({
    CreateNote: {
        screen: CreateNote,
    },
    MainNavigator,
},{ initialRouteName: "MainNavigator", headerMode: "none" })

export default createAppContainer(MainAppNavigator)
