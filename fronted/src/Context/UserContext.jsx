import React, { createContext, useContext, useEffect, useState } from 'react'
import { authDataContext } from './AuthContext'
import axios from 'axios'

export const userDataContext = createContext()
const UserContext = ({children}) => {
    let {serverUrl} = useContext(authDataContext)
    const [userData, setUserData] = useState(null);

    const getCurrentUser  = async()=>{
        try {
            let result = await axios.get(serverUrl + "/api/user/currentuser",{withCredentials:true})
            setUserData(result.data)
        } catch (error) {
            setUserData(null)
            console.log(error);
        }
    }

    useEffect(() => {
        getCurrentUser()
    },[]);

    let value ={
        userData,
        setUserData,
        getCurrentUser
    }
  return (
    <div>
      <userDataContext.Provider value={value}  >
        {children}
      </userDataContext.Provider>
    </div>
  )
}

export default UserContext
