import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react'
type User = {
    name: string;
    email: string;
}
export const AuthContext = createContext<User | null>(null);
export const useGetAuthContext = () => {
    let user = useContext(AuthContext);
    return {
        user
    }
}
export const AuthContextProvider = ({children}: {children: ReactNode}) => {
    const [user, setUser] = useState<User | null>(null);
    useEffect( () => {
        
    }, []);
  return (
    <AuthContext.Provider value={user}>
            {children}
    </AuthContext.Provider>
  )
}
export {}
