import { View } from 'native-base';
import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import Logo from '../shared/Logo/Logo';
import WebLogo from '../shared/Logo/WebLogo';
import LanguagePicker from './LanguagePicker';

function Header() {
  return (
    <View style={styles.container}>
      {Platform.OS === 'web' ? (
        <WebLogo />
      ) : (
        <Logo white style={styles.logoStyle} />
      )}
      <LanguagePicker />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  logoStyle: {
    marginBottom: 20,
  },
});

export default Header;
