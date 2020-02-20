import React, { useState } from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import {AuthContainer, Btn, Input, LoginWrapper, SignupWrapper} from './authStyled';
import auth from "@react-native-firebase/auth";

const Auth = () => {
    const [state, setState] = useState({
        type: "Login",
        email: "",
        password: "",
    });

    const _loginIn = () => {
        alert("user Logged in");
        // return auth().signInWithEmailAndPassword()
        //     .then(async user => {
        //
        //     })
    };

    const _signUp = () => {
        alert("User Signed Up!")
    };

    return (
        <AuthContainer>
            {
                state.type === "Login" ?
                    <LoginWrapper>
                        <Text style={{ fontSize: 40, textAlign: "center", color: "#fff", marginBottom: 30 }}>Login</Text>
                        <Input style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }} placeholder="Email"/>
                        <Input style={{ borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }} placeholder="Password" />
                    </LoginWrapper>
                    :
                    <SignupWrapper>
                        <Text style={{ fontSize: 40, textAlign: "center", color: "#fff", marginBottom: 30 }}>Sign Up</Text>
                        <Input style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }} placeholder="Email"/>
                        <Input style={{ margin: 0 }} placeholder="Password" />
                        <Input style={{ borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }} placeholder="Confirm Password" />
                    </SignupWrapper>
            }
            <View style={{ marginVertical: 20 }}>
                {
                    state.type === "Login"
                    ?
                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                            <Text style={{ color: "#fff" }}>
                                Don't have an account?
                            </Text>
                            <TouchableOpacity onPress={() => setState({ type: "Sign Up" }) }>
                                <Text style={{ color: "dodgerblue" }}> Create one</Text>
                            </TouchableOpacity>
                        </View>
                        :
                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                            <Text style={{ color: "#fff" }}>
                                Already have an account?
                            </Text>
                            <TouchableOpacity onPress={() => setState({ type: "Login" })}>
                                <Text style={{ color: "dodgerblue" }}> Login</Text>
                            </TouchableOpacity>
                        </View>
                }
            </View>
            <Btn onPress={() => state.type === "Login" ? _loginIn : _signUp}>
                <Text style={{ fontSize: 20, textAlign: "center", color: "#fff", }}>{state.type === "Login" ? "Login" : "Sign Up"}</Text>
            </Btn>
        </AuthContainer>
    )
};

export default Auth;
