import {Container, Box} from "./ChannelLinkHolder.style"
import {Link} from "react-router-dom"
import {useState} from "react"
import EmptyContent from "../empty content/EmptyContent"


const style = {
  color:"white",
  textDecoration:"none"
}

export default function ChannelLinkHolder(){
  const [switchLinks, setSwitchLinks] = useState("")

  
  return(
    <>
    <Container>
    <Box to={"/channel"} b={location.pathname === "/channel" ? "2px solid white" : "2px solid gray"}>
    <Link to={"/channel"} style={style}>
    Home
</Link>
    </Box>
    
    <Box to={"about"} b={location.pathname === "/channel/about" ? "2px solid white" : "2px solid gray"}>
    <Link to={"about"} style={style}>
    About 
    </Link>
        </Box>
        
        
      </Container>

    </>
    )
}