import React, { use } from 'react';
import { AuthContexts } from '../Contexts/AuthContexts';

const useAuth = () => {
    const authInformation =use(AuthContexts)
    return authInformation;
};

export default useAuth;