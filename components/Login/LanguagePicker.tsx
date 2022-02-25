import { Box } from 'native-base';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import RNPicker from 'react-native-picker-select';

function LanguagePicker() {
  const [lang, setLang] = useState<string>('en');
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  const langOtions = [
    {
      label: 'Netherlands',
      value: 'nl',
    },
    {
      label: 'Deutsch',
      value: 'dz',
    },
  ];

  return (
    <Box minW={100} maxW="100" h={20}>
      <RNPicker
        style={{
          inputWeb: {
            padding: 5,
            color: '#fff',
            backgroundColor: '#140C25',
            borderWidth: 0,
            width: 130,
            marginTop: 20,
            fontSize: 16,
            marginLeft: -30,
          },

          iconContainer: {
            marginLeft: 100,
          },
        }}
        value={lang}
        onValueChange={(value) => setLang(value)}
        items={langOtions}
        placeholder={{ label: 'English', value: 'en' }}
      />
    </Box>
  );
}

export default LanguagePicker;
