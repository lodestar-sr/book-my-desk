import { Box, Select } from 'native-base';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';

function LanguageSelector() {
  const [lang, setLang] = useState<string>('en');
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  const langOtions = [
    {
      label: 'English',
      value: 'en',
    },
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
      <Select
        mt={1}
        color={'#fff'}
        variant="unstyled"
        selectedValue={lang}
        width="100%"
        fontSize={13}
        onValueChange={(value) => setLang(value)}
        dropdownIcon={<Ionicons name="chevron-down" color={'#fff'} />}
      >
        {langOtions.map((option, index) => (
          <Select.Item key={index} label={option.label} value={option.value} />
        ))}
      </Select>
    </Box>
  );
}

export default LanguageSelector;
