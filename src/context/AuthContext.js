import { createContext, useState } from 'react';

const AuthContext = createContext({
  userInfo: {},
  setUserInfo: () => {},
});

export default AuthContext;
