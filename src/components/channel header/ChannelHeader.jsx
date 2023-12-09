import "./ChannelHeader.style"
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Header, Wrapper, Text, Icons} from "../channel header/ChannelHeader.style"
import {Link} from "react-router-dom"
export default function ChannelHeader(){
  
  
  return (
    <>
    <Header>
    <Wrapper>
    <Link to={"/"} style={{color:"white"}}> <KeyboardBackspaceIcon/></Link>
    <Text> Joe Doe </Text>
     </Wrapper>
     <Icons>
     <SearchIcon sx={{marginRight:"1.5rem"}}/>
     <MoreVertIcon/>
     </Icons>
    </Header>
    </>
    )
}