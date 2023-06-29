import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackActions, useNavigation } from '@react-navigation/native';


import { Login } from '../Auth/Login';
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN_FETCH } from '../redux/reducers/auth.reducer';
import { Navigation } from '../Navigation/Navigation';

interface AuthContextType {
  isLoggedIn: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
}

interface AuthProviderProps {
  children: React.ReactNode;
}


export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  login: (email: string, password: string) => {} ,
  logout: () => {},
});

export const AuthProvider: React.FC<AuthProviderProps> = ({ children, navigation }: any): React.ReactElement => {

  const [isLoggedIn, setLoggedIn] = useState(false);

  const authData = useSelector((state: any) => {
    return state.auth;
  });


  const dispatch = useDispatch();
 
  useEffect(() => {
    checkLoginStatus();
  }, [authData]);
  
  const checkLoginStatus = async () => {
    try {
      console.log("checkLoginStatus called");
      // const value = await AsyncStorage.getItem('isLoggedIn');
      if (authData.isLoggedIn === true) {
        setLoggedIn(true);
      } else {
         navigation.dispatch(StackActions.popToTop());
      }
    } catch (error) {
      console.log('Error retrieving login status', error);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      dispatch(LOGIN_FETCH({ email, password }));
    } catch (error) {
      console.log('Error saving login status', error);
    }
  };

  const logout = async () => {
    setLoggedIn(false);
    try {
      await AsyncStorage.removeItem('isLoggedIn');
      console.log('Log out Called successfully');
    } catch (error) {
      console.log('Error removing login status', error);
    }
  };
  return (
    <AuthContext.Provider value= {{
      isLoggedIn,
      login,
      logout
    }}>
     {children}
    </AuthContext.Provider>
  )
};

export const useAuth = (): AuthContextType => useContext(AuthContext);