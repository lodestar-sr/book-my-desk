import { View } from 'native-base';
import React from 'react';
import { SvgXml } from 'react-native-svg';
import { logoXml } from '../../../utils/assets/logoXml';

interface Props {
  white?: boolean;
  style?: any;
}

function Logo({ white, ...props }: Props) {
  const logoXmlSoure = logoXml(white ? 'white' : 'black');
  return (
    <View>
      <SvgXml xml={logoXmlSoure} {...props} />
    </View>
  );
}

export default Logo;
