import { View } from 'native-base';
import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import Logo from '../shared/Logo/Logo';
import WebLogo from '../shared/Logo/WebLogo';
import LanguagePicker from './LanguagePicker';
import styled from 'styled-components/native';

function Header() {
  return (
    <Container>
      {Platform.OS === 'web' ? (
        <WebLogo />
      ) : (
        <Logo white style={styles.logoStyle} />
      )}
      <LanguagePicker />
    </Container>
  );
}

const Container = styled.View`
  height: 60px;
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const styles = StyleSheet.create({
  logoStyle: {
    marginBottom: 20,
  },
});

export default Header;
