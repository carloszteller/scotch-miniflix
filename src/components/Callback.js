import React, { useEffect } from 'react';
import { setIdToken, setAccessToken } from '../utils/AuthService';

const Callback = () => {
    useEffect(() => {
        setAccessToken();
        setIdToken();
        window.location.href = "/";
    });

    return null;
}

export default Callback;