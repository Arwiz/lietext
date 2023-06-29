import React from 'react';
import { View, TextInput, Button, StyleSheet, Text, KeyboardAvoidingView, Platform, SafeAreaView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import * as Yup from 'yup';
import { GlobalStyle } from '../styles/GlobalStyle';
import { yupResolver } from '@hookform/resolvers/yup';

interface SignUpFormData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  dob: string;
  mobileNumber: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  dob: Yup.date().required('Date of birth is required'),
  mobileNumber: Yup.string().required('Mobile number is required'),
});

interface SignupScreenProps {
  navigation: any; // Replace with the actual type for navigation prop
}

export const SignupScreen: React.FC<SignupScreenProps> = ({ navigation }) => {
  const onSubmit = (data: SignUpFormData) => {
    // Perform signup logic here
    console.log('data...', data);
    // You can make API calls or any other necessary actions
  };

  const goToLogin = () => {
    navigation.replace('LoginPage');
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm< SignUpFormData>({
  
    resolver: yupResolver(validationSchema) as any,
  });

  return (
    <SafeAreaView  style={styles.fullContainer}>
      <KeyboardAvoidingView
        style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0} // Adjust the value according to your app's layout
    >
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
              placeholderTextColor="gray"
              keyboardType="email-address"
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

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <TextInput
              style={styles.input}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="First Name"
              placeholderTextColor="gray"
            />
            {errors.firstName && <Text style={styles.error}>{errors.firstName.message}</Text>}
          </>
        )}
        name="firstName"
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
              placeholder="Last Name"
              placeholderTextColor="gray"
            />
            {errors.lastName && <Text style={styles.error}>{errors.lastName.message}</Text>}
          </>
        )}
        name="lastName"
        defaultValue=""
      />
      <Button title="Sign Up" onPress={handleSubmit(onSubmit)} />
      <Button title="Go to Login" onPress={goToLogin} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  
  );
};

const styles = StyleSheet.create({ ...GlobalStyle});