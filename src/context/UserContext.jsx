import { createContext, useEffect } from "react";
import { useDispatch } from "react-redux";

export const UserContext = createContext()


export const UserProvider = ({ children }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        function isUserLoggedIn() {
            var loggedInCookieName = 'access_token';
            var allCookies = document.cookie;
            var cookiesArray = allCookies.split(';');
          
            for (var i = 0; i < cookiesArray.length; i++) {
              var cookie = cookiesArray[i].trim();
          
              if (cookie.indexOf(loggedInCookieName + '=') === 0) {
                return true; // User is logged in
              }
            }
          
            return false; // User is logged out
          }
          
          if (!isUserLoggedIn()) {
              dispatch({ type: "GET_USER_DATA", payload: null})
          }
    })


    return (
        
        <UserContext.Provider>
            {children}
        </UserContext.Provider>
    )
}

