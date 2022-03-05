import { createContext, useState } from 'react';
import userData from '../DATA.json';

export const AuthContext = createContext({});

const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>(null);
  const [signingIn, setSigningIn] = useState<any>(false);

  const signIn = (email: string) => {
    setSigningIn(true);

    return new Promise((resolve: Function, reject: Function) => {
      setTimeout(() => {
        setSigningIn(false);
        if (userData.email === email) {
          setUser(userData);
          resolve(userData);
        } else {
          reject(new Error('Invalid email'));
        }
      }, 2000);
    });
  };

  const signOut = () => {
    setUser(null);
  };

  const data = {
    user,
    setUser,
    signIn,
    signOut,
    signingIn,
    setSigningIn,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
