import React from "react";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const encodedToken = localStorage.getItem("token");

  return (
    <AuthContext.Provider value={{ user, setUser, encodedToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
