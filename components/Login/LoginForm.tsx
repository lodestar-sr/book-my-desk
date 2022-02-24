import Loader from '../shared/Loader';
import React, { useState } from 'react';
import { Box, Button, Input, Image } from 'native-base';
import { Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../hooks/useAuth';

function LoginForm() {
  const [email, setEmail] = useState('');
  const { signingIn, signIn }: any = useAuth();
  const { t } = useTranslation();

  const handleClick = () => signIn(email);

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <Box
        flex={1}
        justifyContent={'space-between'}
        paddingBottom="2"
        paddingTop="2/6"
      >
        <Box>
          <Box alignItems="center" mb={8}>
            <Text
              style={{ fontSize: 40, color: '#E4EFE7', fontWeight: 'bold' }}
            >
              {t('title')}
            </Text>
            <Text
              style={{
                color: '#D3E0EA',
                textAlign: 'center',
                fontSize: 15,
                marginTop: 5,
                fontWeight: 'bold',
              }}
            >
              {t('subtitle')}
            </Text>
          </Box>
          <Input
            placeholder={t('loginInputPlaceholder')}
            size="lg"
            variant="underlined"
            color={'#fff'}
            borderBottomColor="#fff"
            placeholderTextColor={'#fff'}
            style={{ fontWeight: 'bold', color: '#fff' }}
            mb={2}
            onChangeText={(text) => setEmail(text)}
          />
        </Box>

        <Box alignItems="center">
          <Box>
            <Button
              height={10}
              width={120}
              colorScheme="dark"
              fontWeight="bold"
              rounded={'3xl'}
              background="#fff"
              size="lg"
              onPress={handleClick}
            >
              {signingIn ? (
                <Loader color="#000" size="small" />
              ) : (
                t('loginButtonText')
              )}
            </Button>
          </Box>

          <Box alignItems={'center'} mt={2}>
            <Text style={{ color: '#fff' }}>{t('orText')}</Text>
          </Box>

          <Box mt={2}>
            <Button
              width={240}
              background={'#fff'}
              rounded={'3xl'}
              colorScheme="dark"
              size={'lg'}
              flexDirection="column"
              justifyContent={'space-between'}
            >
              <Box flexDirection={'row'}>
                <Image
                  alt="mslogo"
                  width={6}
                  mr={3}
                  height={6}
                  source={require('../../assets/ms-logo.png')}
                />
                <Text style={{ fontSize: 18 }}>Sign in with microsft</Text>
              </Box>
            </Button>
          </Box>
        </Box>
      </Box>
    </TouchableWithoutFeedback>
  );
}

export default LoginForm;
