import React, { useEffect, createContext, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [userdata, setUserData] = useState(null);

  useEffect(() => {
    const { employees, admin } = getLocalStorage();

    if (!employees || employees.length === 0) {
      setLocalStorage();
      setUserData(getLocalStorage());
    } else {
      setUserData({ employees, admin });
    }
  }, []);
  return (
    <AuthContext.Provider value={userdata}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
