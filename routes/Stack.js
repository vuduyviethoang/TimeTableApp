import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Signup from '../screens/Signup';

const LoginStack = createStackNavigator();

function Stack() {
    return (
        <View>
        <NavigationContainer>
            <LoginStack.Navigator
                initialRouteName="Login">
                <LoginStack.Screen
                    name="Login"
                    component={Login}
                    options={{title: ''}}
                />
                <LoginStack.Screen
                    name="Signup"
                    component={Signup}
                    options={{title: 'Đăng ký'}}
                />  
            </LoginStack.Navigator>
        </NavigationContainer>
        </View>
    );
}

export default Stack;