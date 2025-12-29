import React, {   useEffect } from "react";
import { getLocalStorage } from "../utils/LocalStorage";
import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userdata, setUserData] = useState(null);

  useEffect(() => {
    const { employees, admin } = getLocalStorage();
    setUserData({ employees, admin });
  }, []);

  return (
    <AuthContext.Provider value={userdata}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
  