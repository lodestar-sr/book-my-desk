import AuthProvider from './contexts/AuthContext';
import { Box, NativeBaseProvider } from 'native-base';
import { StyleSheet } from 'react-native';
import Screens from './components/Screens/Screens';
import './utils/i18n';

export default function App() {
  return (
    <AuthProvider>
      <NativeBaseProvider>
        <Box style={styles.container} safeAreaTop>
          <Screens />
        </Box>
      </NativeBaseProvider>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 0,
    marginTop: 31,
    backgroundColor: '#140C25',
  },
});
