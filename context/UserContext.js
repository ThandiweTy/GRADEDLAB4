// src/context/UserContext.js
import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: 'Thando',
    email: 'tyana.thando@example.com',
    phone: '0114590945',
    address: '134 BelleView Street Doornfontein',
    city: 'Johannesburg',
    zipcode: '1475',
    state: 'SA',
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
