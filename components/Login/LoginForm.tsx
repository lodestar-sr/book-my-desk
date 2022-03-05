import Loader from '../shared/Loader';
import React, { useEffect, useRef, useState } from 'react';
import { Box, Button, Input, Image } from 'native-base';
import { TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../hooks/useAuth';
import { useFonts } from 'expo-font';
import styled from 'styled-components/native';

function LoginForm() {
  const [email, setEmail] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const { signingIn, signIn }: any = useAuth();
  const { t } = useTranslation();
  const inputRef = useRef<any>();
  const [] = useFonts({
    'Open Sans': require('../../assets/fonts/OpenSans-Regular.ttf'),
  });

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
            <TitleText>{t('title')}</TitleText>
            <DescText> {t('subtitle')}</DescText>
          </Box>
          <TouchableWithoutFeedback onPress={() => inputRef.current.focus}>
            <Input
              ref={inputRef}
              placeholder={t('loginInputPlaceholder')}
              fontWeight="bold"
              size="lg"
              variant="underlined"
              color={'#fff'}
              borderBottomColor="#605A6B"
              borderBottomWidth={2}
              style={{ fontWeight: '800', color: '#fff' }}
              mb={2}
              onChange={(e) => setEmail(e.nativeEvent.text)}
              value={email}
              autoFocus
              fontFamily={'Open Sans'}
            />
          </TouchableWithoutFeedback>
          {errorMessage && <ErrorMessage> {errorMessage}</ErrorMessage>}
        </Box>

        <Box alignItems="center">
          <Box>
            <Button
              height={12}
              width={140}
              colorScheme="dark"
              fontWeight="bold"
              fontFamily={'Open Sans'}
              rounded={'3xl'}
              background="#fff"
              size="lg"
              onPress={handleClick}
            >
              {signingIn ? (
                <Loader color="#000" size="small" />
              ) : (
                <LoginButtonText>{t('loginButtonText')}</LoginButtonText>
              )}
            </Button>
          </Box>

          <Box alignItems={'center'} mt={3} mb={2}>
            <OrText>{t('orText')}</OrText>
          </Box>

          <Box mt={2}>
            <Button
              width={250}
              background={'#fff'}
              rounded={'full'}
              colorScheme="dark"
              size={'lg'}
              flexDirection="column"
              justifyContent={'space-between'}
              paddingRight="1/2"
            >
              <Box flexDirection={'row'} alignItems="center" height={8}>
                <Image
                  alt="mslogo"
                  width={6}
                  mr={3}
                  height={6}
                  source={require('../../assets/ms-logo.png')}
                />
                <MSLoginButtonText>Sign in With Microsoft</MSLoginButtonText>
              </Box>
            </Button>
          </Box>
        </Box>
      </Box>
    </TouchableWithoutFeedback>
  );
}

const LoginButtonText = styled.Text`
  font-family: 'Open Sans';
  font-weight: 600;
  font-size: 16px;
`;

const MSLoginButtonText = styled.Text`
  font-size: 18px;
  font-family: 'Open Sans';
  font-weight: 500;
`;

const TitleText = styled.Text`
  font-size: 30px;
  color: #fff;
  font-family: 'Open Sans';
  font-weight: 500;
`;

const DescText = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 16px;
  margin-top: 20px;
  font-weight: 500;
  font-family: 'Open Sans';
`;

const ErrorMessage = styled.Text`
  color: #b33030;
  padding-left: 10px;
  font-weight: bold;
  font-family: 'Open Sans';
`;

const OrText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-family: 'Open Sans';
  font-weight: 500;
`;

export default LoginForm;
