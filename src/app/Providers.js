'use client';

import AuthContext from '@/context/AuthContext';
import { useState } from 'react';

export function Providers({ children }) {
  const [userInfo, setUserInfo] = useState(null);
  return (
    <AuthContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </AuthContext.Provider>
  );
}
