import React, { useState } from "react";
import { View, Text } from 'react-native';
import {AuthContainer, Btn, Input, LoginWrapper, SignupWrapper} from './authStyled';
import auth from "@react-native-firebase/auth";

const Auth = () => {
    const [state, setState] = useState({
        type: "Login",
        email: "",
        password: "",
    });

    const _signIn = () => {
        return auth().signInWithEmailAndPassword()
            .then(async user => {

            })
    };

    return (
        <AuthContainer>
            {
                state.type === "Login" ?
                    <LoginWrapper>
                        <Text style={{ fontSize: 40, textAlign: "center" }}>Login</Text>
                        <Input placeholder="Email"/>
                        <Input placeholder="Password" />
                    </LoginWrapper>
                    :
                    <SignupWrapper>
                        <Text>Sign Up</Text>
                        <Input placeholder="Email"/>
                        <Input placeholder="Password" />
                        <Input placeholder="Confirm Password" />
                    </SignupWrapper>
            }
            <Btn>
                <Text style={{ fontSize: 20, textAlign: "center", color: "#fff" }}>{state.type === "Login" ? "Login" : "Sign Up"}</Text>
            </Btn>
            <View>

            </View>
        </AuthContainer>
    )
};

export default Auth;
