import { createContext } from 'react';

const AuthContext = createContext({
  authInfo: {},
  setAuthInfo: () => {},
});

export default AuthContext;