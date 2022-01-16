import React, {
    createContext,
} from 'react';

import {  useLocalStorage } from 'react-use'

const UserContext = createContext();

export const UserProvider = ({
    children
}) => {
    const [user, setUser, del] = useLocalStorage('user', undefined);

    const login = setUser
    const logout = del

    return <UserContext.Provider value={{login, logout, user}}>{children}</UserContext.Provider>;
}

export const useUserContext = () => React.useContext(UserContext);