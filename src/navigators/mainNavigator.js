import React from "react";
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';

import Home from '../views/home';
import Categories from '../views/categories';

const NotesTab = createStackNavigator(
    {
        Notes: {
            screen: Home,
        },
    }
);

const CategoriesTab = createStackNavigator(
    {
        Categories: {
            screen: Categories,
        }
    }
);

const MainNavigator = createBottomTabNavigator(
    {
        Notes: NotesTab,
        Categories: CategoriesTab,
    }
);

export default createAppContainer(MainNavigator, {headerMode: "none"})
