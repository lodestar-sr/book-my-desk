import Loader from '../shared/Loader';
import React, { useEffect, useRef, useState } from 'react';
import { Box, Button, Input, Image } from 'native-base';
import {
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Platform,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../hooks/useAuth';

function LoginForm() {
  const [email, setEmail] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const { signingIn, signIn }: any = useAuth();
  const { t } = useTranslation();
  const inputRef = useRef<any>();

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const handleClick = () => {
    signIn(email).catch(() => {
      setErrorMessage('Invalid Email!');
      setEmail('');
    });

    dismissKeyboard();
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setErrorMessage('');
    }, 2000);

    return () => clearInterval(timer);
  }, [errorMessage]);

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <Box
        flex={1}
        justifyContent={'space-between'}
        paddingBottom="2"
        paddingTop={Platform.OS === 'web' ? 0 : '2/6'}
      >
        <Box mt={120}>
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
          <TouchableWithoutFeedback onPress={() => inputRef.current.focus}>
            <Input
              ref={inputRef}
              placeholder={t('loginInputPlaceholder')}
              size="lg"
              variant="underlined"
              color={'#fff'}
              borderBottomColor="#fff"
              placeholderTextColor={'#fff'}
              style={{ fontWeight: 'bold', color: '#fff' }}
              mb={2}
              onChange={(e) => setEmail(e.nativeEvent.text)}
              value={email}
              autoFocus
            />
          </TouchableWithoutFeedback>
          {errorMessage && (
            <Text
              style={{ color: '#B33030', paddingLeft: 10, fontWeight: 'bold' }}
            >
              {errorMessage}
            </Text>
          )}
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
                <Text style={{ fontSize: 18 }}>Sign in With Microsoft</Text>
              </Box>
            </Button>
          </Box>
        </Box>
      </Box>
    </TouchableWithoutFeedback>
  );
}

export default LoginForm;
