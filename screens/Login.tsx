import { Box, Input } from 'native-base';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/Login/Header';
import LoginForm from '../components/Login/LoginForm';

function Login() {
  return (
    <View style={styles.container}>
      <Header />
      <Box flex={1} justifyContent="space-between">
        <LoginForm />
      </Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoStyle: {
    marginBottom: 20,
  },
});

export default Login;
