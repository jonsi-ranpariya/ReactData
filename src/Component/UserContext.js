import React, { useState } from "react";

const initialContext = {};

const UserContext = React.createContext(initialContext);

function UserProvider({ children }) {
  const [data, setData] = useState();
  console.log("data===>",data);
  const dataSet = (data) => {
    setData(data);  
  };
  return (
    <UserContext.Provider value={{ data: data, setData: dataSet }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
