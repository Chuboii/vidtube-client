import HomeIcon from '@mui/icons-material/Home';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import {Footer, Box, Paragraph} from "./FooterMobile.style"
import Upload from "../mobile form upload/Upload"
import {useReducer} from "react"
import CropUpload from "../crop upload/CropUpload"
import { useNavigate } from 'react-router-dom';


const INITIAL_STATE = {
  toggle: false,
  animation: "-500px"
}

const reducer = (state, action) =>{
  const {type} = action

  switch(type){
    case "TOGGLE":
      return {...state, toggle: action.toggle}
    case "ANIMATE":
      return {...state, animation: "0"}
    default:
      return state
  }
}


export default function FooterMobile(){
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
  const navigate = useNavigate()

  

  return(
    <>
<Upload invoke={dispatch} animate={state}/> 
{/*<CropUpload/>*/}
    <Footer>
    <Box onClick={() => navigate("/") } > 
    <HomeIcon/>
    <Paragraph>Home </Paragraph>
    </Box>
    
        <Box>
    <SlowMotionVideoIcon/>
    <Paragraph>Shorts </Paragraph>
    </Box>
    
        <Box>
    <ControlPointIcon onClick={()=> dispatch({type:"TOGGLE", toggle:true})} sx={{fontSize:"40px"}}/>
    </Box>
    
        <Box onClick={() => navigate("/subscriptions") } >
          <SubscriptionsIcon/>
  <Paragraph>Subscriptions </Paragraph>
    </Box>
    
        <Box>
    <VideoLibraryOutlinedIcon/>
    <Paragraph>Library </Paragraph>
    </Box>
    </Footer>
    </>
    )
}