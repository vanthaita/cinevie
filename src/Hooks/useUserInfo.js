import { useState, useEffect, useCallback } from 'react';

export default function useUserInfo() {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUserInfo = localStorage.getItem('User-Info');
    if (storedUserInfo) {
      try {
        const parsedUserInfo = JSON.parse(storedUserInfo);
        setUserInfo(parsedUserInfo);
      } catch (error) {
        console.error("Failed to parse user info from localStorage", error);
      }
    }
    setLoading(false);
  }, []);

  const updateUserInfo = useCallback((newUserInfo) => {
    setUserInfo(newUserInfo);
    if (newUserInfo) {
      localStorage.setItem('User-Info', JSON.stringify(newUserInfo));
      document.cookie = `user-info=${JSON.stringify(newUserInfo)}; path=/; max-age=${60*60*24*7}`;
    } else {
      localStorage.removeItem('User-Info');
      document.cookie = 'user-info=; Max-Age=0; path=/';
    }
  }, []);

  const clearUserInfo = useCallback(() => {
    setUserInfo(null);
    localStorage.removeItem('User-Info');
    document.cookie = 'user-info=; Max-Age=0; path=/';
  }, []);

  return { userInfo, loading, updateUserInfo, clearUserInfo };
}
