import { Box, Button } from 'native-base';
import { StyleSheet, Text } from 'react-native';
import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { EvilIcons } from '@expo/vector-icons';

function Home() {
  const { signOut, user }: any = useAuth();

  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      <EvilIcons
        name="user"
        size={100}
        color="#fff"
        style={{ marginBottom: 10 }}
      />
      <Text style={styles.textStyle}>{user.name}</Text>
      <Button mt={5} size="lg" onPress={() => signOut()}>
        Logout
      </Button>
    </Box>
  );
}

const styles = StyleSheet.create({
  textStyle: { color: '#f0f0f0', fontSize: 20 },
});

export default Home;
