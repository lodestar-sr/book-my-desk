import { View } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import Logo from '../shared/Logo/Logo';
import LanguageSelector from './LanguageSelector';

function Header() {
  return (
    <View style={styles.container}>
      <Logo white style={styles.logoStyle} />
      <LanguageSelector />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  logoStyle: {
    marginBottom: 20,
  },
});

export default Header;
