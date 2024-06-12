'use client';

import AuthContext from '@/context/AuthContext';
import { useState } from 'react';

export function Providers({ children }) {
  const [authInfo, setAuthInfo] = useState(null);

  return (
    <AuthContext.Provider value={{ authInfo, setAuthInfo }}>
      {children}
    </AuthContext.Provider>
  );
}
