import AuthProvider from './contexts/AuthContext';
import { NativeBaseProvider } from 'native-base';
import Screens from './components/Screens/Screens';
import styled from 'styled-components/native';
import './utils/i18n';

export default function App() {
  return (
    <AuthProvider>
      <NativeBaseProvider>
        <MainApp>
          <Screens />
        </MainApp>
      </NativeBaseProvider>
    </AuthProvider>
  );
}

const MainApp = styled.View`
  flex: 1;
  padding: 0 20px;
  background-color: #140c25;
  padding-bottom: 10px;
`;
