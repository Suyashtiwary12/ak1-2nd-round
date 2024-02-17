import { useContext, useState, useEffect } from "react";
import { createContext } from "react";
import axios from "axios";

const userContextCreator=createContext();

export function UserContext(props){
    const [users, setUsers] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("https://602e7c2c4410730017c50b9d.mockapi.io/users");
          setUsers(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, []);
  
    return(
        <userContextCreator.Provider value={{users}}>
            {props.children}
        </userContextCreator.Provider>
    )
}
export function useUserContext() {
    return useContext(userContextCreator);
  }