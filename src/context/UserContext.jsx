import { createContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import {useState} from 'react'
export const UserContext = createContext()

const isUserLoggedIn = () => {
  const storage = sessionStorage.getItem("access_token")
  return storage ? storage : null
}
export const UserProvider = ({ children }) => {
    const dispatch = useDispatch()
  const [isLoggedIn, setIsLoggedIn] = useState(isUserLoggedIn)
  
  useEffect(() => {
    const d = () => {
      if (isLoggedIn) {
        //
      }
      else {
        return dispatch({ type: "GET_USER_DATA", payload: null })
      }
    }
    d()
    })


    return (
        
        <UserContext.Provider value={setIsLoggedIn}>
            {children}
        </UserContext.Provider>
    )
}

