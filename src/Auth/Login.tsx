import React, { useState, useContext } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Text, Image, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../context/AuthContext';
import { Navigation } from '../Navigation/Navigation';
import * as Yup from 'yup';
import { useForm, Controller, FieldValues } from 'react-hook-form';
import { GlobalStyle  } from '../styles/GlobalStyle';
import { InputBox } from '../shared';
import { ButtonCustomPrimary } from '../shared';
import { useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';

interface LoginFormData {
  email: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});


export const Login: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 
const { control, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    resolver: yupResolver(validationSchema),
  });

  const handleLogin = (data: LoginFormData): void => {
    const { email, password } = data;
    login(email, password);
  };

  const handleSignUp = (): void => {
    navigation.replace('SignUpPage');
  };

  return (
     <SafeAreaView style={styles.container}>
      <Image source={require('./../../assets/images/logo.png')} />
      <Text style={styles.heading}>Ocesys</Text>
      
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <TextInput
              style={styles.input}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="Email"
              keyboardType="email-address"
              placeholderTextColor="gray"
            />
            {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}
          </>
        )}
        name="email"
        defaultValue=""
      />

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <TextInput
              style={styles.input}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="Password"
              placeholderTextColor="gray"
              secureTextEntry
            />
            {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}
          </>
        )}
        name="password"
        defaultValue=""
      />

      <ButtonCustomPrimary title="Login" onPress={handleSubmit(handleLogin)} />
      <ButtonCustomPrimary title="SignUp" onPress={handleSignUp} />
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  ...GlobalStyle,
  heading: {
    fontSize: 40,
    color: '#BE2490',
    fontWeight: 'bold',
    marginBottom: 20
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});