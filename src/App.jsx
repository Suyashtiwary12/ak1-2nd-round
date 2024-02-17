import './App.css'
import { UserContext } from './store/userContext'
import { Dashboard } from './dashboard';
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import DisplayBar from './displaybar';
function App() {

  //   const getUsers=async ()=>{
  //     await axios.get("https://602e7c2c4410730017c50b9d.mockapi.io/users ")
  //     .then((data)=>{
  //        console.log(data);
  //     })
  // }

  // getUsers()

 
  return (
    <>
      <UserContext>
        <Dashboard></Dashboard>

      </UserContext>

    </>
  )
}

export default App
