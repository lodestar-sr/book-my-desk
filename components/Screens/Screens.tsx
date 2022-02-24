import { Box } from 'native-base';
import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import Home from '../../screens/Home';
import Login from '../../screens/Login';

function Screens() {
  const { user }: any = useAuth();
  return <Box style={{ flex: 1 }}>{user ? <Home /> : <Login />}</Box>;
}

export default Screens;
