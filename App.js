import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';
import Signup from './screens/Signup';
import ProfileScreen from './screens/Profile'
import EditProfileScreen from './screens/EditProfile'

function App() {
  return (
    <View style={styles.container}>
      <ProfileScreen />
    </View>
  );
}

const LoginStack = createStackNavigator();

function Stack() {
  return (
      <NavigationContainer>
          <LoginStack.Navigator
              initialRouteName="ProfileScreen">
              <LoginStack.Screen
                  name="ProfileScreen"
                  component={ProfileScreen}
                  options={{title: ''}}
              />
              <LoginStack.Screen
                  name="EditProfileScreen"
                  component={EditProfileScreen}
                  options={{title: 'Thông tin'}}
              />  
          </LoginStack.Navigator>
      </NavigationContainer>
  );
}

export default Stack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginBottom: -50,
  },
});
