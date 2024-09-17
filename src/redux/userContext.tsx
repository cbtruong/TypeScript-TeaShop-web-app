import React, { createContext, useContext, useState, ReactNode } from 'react';
import { user } from '../query/type/user.ts';

interface UserContextType {
  user: user;
  setUser: React.Dispatch<React.SetStateAction<user>>;
}


const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<user>({
    _id: 0,
    userName: '',
    email: '',
    password: '',
    role: ''
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
