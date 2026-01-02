import React, { useEffect, createContext, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({ employees: [] }); // Initialize with default

  useEffect(() => {
    setLocalStorage();
    const { employees } = getLocalStorage();
    setUserData({ employees });
  }, []);

  return (
    <AuthContext.Provider value={[userData, setUserData]}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;