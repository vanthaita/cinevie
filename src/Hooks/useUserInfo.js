import { useState, useEffect } from "react";

export default function useUserInfo() {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        const storedUserInfo = localStorage.getItem('User-Info');
        if (storedUserInfo) {
            const parsedUserInfo = JSON.parse(storedUserInfo);
            setUserInfo(parsedUserInfo);
        }
    }, []);

    return userInfo;
}
