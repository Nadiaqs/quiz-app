import React, { createContext, useContext, useState } from "react";
// import { auth } from "../firebase";
// import { onAuthStateChanged } from "firebase/auth";


const UserContext = createContext();


export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); 
 


  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);