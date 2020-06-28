import React, { createContext, useReducer, useContext, useEffect } from "react";
import { authReducer } from "./authReducer";

const AuthContext = createContext();

const initialState = JSON.parse(localStorage.getItem("user")) || {
  logged: false,
};

export const Provider = ({ children }) => {
  return (
    <AuthContext.Provider value={useReducer(authReducer, initialState)}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
