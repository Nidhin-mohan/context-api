import React from 'react'
import { useState, createContext } from "react";

import Component2 from './Components/Component2';


const UserContext = createContext();

const App = () => {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

export default App;






