import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import{ createNativeStackNavigator } from '@react-navigation/native-stack'

import { Dashbaoad } from '../Dashboard/Dashbaoad';
import { Login } from '../Auth/Login';
import { AuthProvider, useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { StackActions, useNavigation } from '@react-navigation/native';
import { SignupScreen } from '../Auth/SignUp';
import { Audit } from '../Dashboard/Audit';
import { AuditDetail } from '../Dashboard/AuditDetails';


const Stack = createNativeStackNavigator();

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
        <NavigationContainer>
            <Stack.Navigator>
        {isLoggedIn === true ? (<>
          <Stack.Screen name="Dashboard" component={Dashbaoad} />
          <Stack.Screen name="Audit" component={Audit} />
          <Stack.Screen name="AuditDetail" component={AuditDetail} />
          </>
        ) : (<>
          <Stack.Screen
            name="LoginPage"
              component={Login}
            options={{
              title: 'Sign in',
              navigationBarHidden: true,
              headerShown: false,
              animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
            }}
            />
            <Stack.Screen
            name="SignUpPage"
            component={SignupScreen}
            options={{
              title: 'Sign Up',
              animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
            }}
          />
        </>
        )} 
       </Stack.Navigator>
      </NavigationContainer>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
