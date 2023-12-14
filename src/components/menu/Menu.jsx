import "./Menu.style";
import { Container, Header, Wrap, Box, Span, Wrapper, Name, Username } from "../menu/Menu.style";
import CloseIcon from "@mui/icons-material/Close";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import DarkBg from "../dark bg/DarkBg";
import { useEffect, useState } from "react";
import GlobalStyles from "../../global style/GlobalStyle";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ProfileImage } from "../home header/HomeHeader.styles";
import SwitchAccountOutlinedIcon from '@mui/icons-material/SwitchAccountOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import NightlightRoundOutlinedIcon from "@mui/icons-material/NightlightRoundOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import axios from 'axios'
import { signInWitGoogle } from "../../utils/firebase/firebase";
import Loader from '../loader/Loader';
import {
  ToastContainer,
  toast
} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Menu() {
  const disableBgTouch = useSelector((state) => state.toggle.disableBg);
  const toggleMobileMenu = useSelector(
    (state) => state.toggle.toggleMobileMenu
  );
  const currentUser = useSelector((state)=> state.user.currentUser)
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const tabs = document.querySelectorAll('.tabs');
    
    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
       dispatch({type:"TOGGLE_MOBILE_MENU", payload:false})
     })
    })
})

// https://vidtube-l48b.onrender.com
  const initiateLogout = async () => {
    try {
      setIsLoaded(true)
      const res = await axios.post("https://vidtube-l48b.onrender.com/api/auth/logout", { withCredentials: true })
       setIsLoaded(false)
      sessionStorage.setItem("access_token", null)

      dispatch({ type: "GET_USER_DATA", payload: null })
      dispatch({type:"TOGGLE_MOBILE_MENU", payload:false})
    }
    catch (e) {
      dispatch({ type: "ERROR", payload: "Unable to logout due to server error"})
    }
  }

  const initiateSwitchingAcct = async () => {
    try {
      const { user } = await signInWitGoogle()
      const currUser = await axios.post("https://vidtube-l48b.onrender.com/api/auth/google", {
        name: user.displayName,
        email: user.email,
        img: user.photoURL
      }, {
        withCredentials:true
      })
      sessionStorage.setItem("access_token", currUser.data._id)
      
      dispatch({ type: "GET_USER_DATA", payload: currUser.data })
      dispatch({type:"TOGGLE_MOBILE_MENU", payload:false})
    }
    catch (e) {
      toast.error('Unable to logout due to server error!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });   
    }
  }

  return (
    <>
      <ToastContainer/>
      { isLoaded && <Loader /> }
      {disableBgTouch && <GlobalStyles overflow={"hidden"} />}
      {/* {disableBgTouch && <DarkBg />} */}
      <Container r={toggleMobileMenu ? "0" : "-5000px"}>
        <Header>
          <ProfileImage src={currentUser? currentUser.img : '' } />
          <Wrapper>
            <Name>{currentUser ? currentUser.name :"" }</Name>
            <Username>@{currentUser ? currentUser.username :"" }</Username>
            <Link className="tabs" to={'channel'} style={{
              color: "red",
              textDecoration: "none",
              width: "100%",
              display: "flex",
              alignItems: "center",
            }}>view your Channel</Link>
          </Wrapper>
        </Header>

        {currentUser ? <Box  onClick={initiateSwitchingAcct}>
          <Wrap>
            <SwitchAccountOutlinedIcon />
            <Span>Switch account</Span>
          </Wrap>
          <KeyboardArrowRightOutlinedIcon />
        </Box> : ''}

        {currentUser ? <Box  onClick={initiateLogout}>
          <Wrap>
            <ExitToAppOutlinedIcon />
            <Span>Sign out</Span>

          </Wrap>
      
        </Box> : ""}
        {currentUser ? "" : <Box className="tabs">
          <Wrap>
            <AccountBoxOutlinedIcon />
            <Span> Sign in </Span>
          </Wrap>
        </Box>}

        <Box className="tabs">
          <Wrap>
            <NightlightRoundOutlinedIcon />
            <Span>Light Mode</Span>
            </Wrap>
        </Box>

        <Box className="tabs">
          <Wrap>
          <SettingsOutlinedIcon />
            <Span> Settings </Span>
            </Wrap>
        </Box>

        <Box className="tabs">
          <Wrap>
            <HelpOutlineOutlinedIcon />
            <Span> Help </Span>
            </Wrap>
        </Box>

        
   
      </Container>
    </>
  );
}
