import React, { useEffect, createContext, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [userdata, setUserData] = useState(null);

  useEffect(() => {
      setLocalStorage();
const { employees } = getLocalStorage();  
      setUserData({ employees });
     
  }, []);
  return (
    <AuthContext.Provider value={[userdata, setUserData]}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
