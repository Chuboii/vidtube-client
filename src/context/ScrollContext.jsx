import {createContext, useReducer, useState, useEffect} from "react"
import {useLocation} from "react-router-dom"
export const ScrollContext = createContext()



const INITIAL_VALUE = {

    pos: "0", 
    scroll:0
}
const scrollReducer = (state, action) =>{
  const {type} = action 
  
  switch (type) {
    case "POSITION":
     return {pos: "relative", ...state};
    break;
    case "SCROLL":
    return {pos:"relative", scroll: action.scroll};
    default:
      return state
  }
  
}

export const ScrollProvider = ({children}) =>{
  const [state, dispatch] = useReducer(scrollReducer, INITIAL_VALUE)

  const [pos, setPos] = useState("0")
 const location = useLocation()
  const [scrolly, setScrolly] = useState(0)
  
  function handleScroll(){
    const pageHeight = window.scrollY
    
    setScrolly(pageHeight)
    
    if(pageHeight > 150){
    if(pageHeight < scrolly){
      setPos("0")
      
    }else{
      if(location.pathname === "/watch"){
      setPos("0")
      }
      else{
        setPos("0")
      }
   }
    }
  
    
  }
  
  useEffect(()=>{
    window.addEventListener("scroll", handleScroll)
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[scrolly])
  
  const value = {setPos, pos}
  
  return (
    <ScrollContext.Provider value={value}>
    {children}
    </ScrollContext.Provider>
    )
}