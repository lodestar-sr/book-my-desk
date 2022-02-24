import { createContext, useState } from 'react';
import userData from '../DATA.json';

export const AuthContext = createContext({});

// Prop types
interface Props {
  children: React.ReactNode;
}

// user type
interface User {
  email?: string;
}

const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);
  const [signingIn, setSigningIn] = useState<any>(false);

  const signIn = (email: string) => {
    setSigningIn(true);

    setTimeout(() => {
      if (userData.email !== email) {
        alert('Invalid email');
        setUser(null);
      } else {
        setUser(userData);
      }
      setSigningIn(false);
    }, 2000);
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
