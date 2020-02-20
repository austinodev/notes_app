import React, { useEffect, useState } from "react";
import { View } from "react-native";
import auth from "@react-native-firebase/auth"
import MainNavigator from './mainNavigator';
import Auth from '../views/auth';

const AppLoading = () => {
    const [isAuthenticated, setAuth] = useState(false);

    useEffect(() => {
        auth().onAuthStateChanged(user => {
            if(user) {
               return setAuth(true)
            } else {
                return setAuth(false)
            }
        })
    });

    return (
        <>
            {isAuthenticated ? <MainNavigator/> : <Auth/>}
        </>
    )
};

export default AppLoading;
