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
import { useDispatch } from 'react-redux';




export default function FooterMobile(){
  const navigate = useNavigate()
  const dispatch = useDispatch()

  

  return(
    <>
<Upload/> 
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
    <ControlPointIcon onClick={()=> dispatch({type:"TOGGLE_MOBILE_VIDEO_COMP", payload:true})} sx={{fontSize:"40px"}}/>
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