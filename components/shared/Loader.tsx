import { Box } from 'native-base';
import React from 'react';
import { ActivityIndicator } from 'react-native';

interface Props {
  color?: string;
  size?: 'large' | 'small';
}

function Loader({ color = '#fff', size = 'large' }: Props) {
  return (
    <Box style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ActivityIndicator color={color} size={size} />
    </Box>
  );
}

export default Loader;
