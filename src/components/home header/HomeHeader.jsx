import {
  DesktopVert,
  SearchBtnMobile,
  H3,
  Container,
  ThirdPart,
  MobileVert,
  Icon,
  DesktopVideo,
  Img,
  Header,
  FirstPart,
  Logo,
  SigninBtn,
  MenuBar,
  Form,
  ProfileImage,
  Input,
  SearchBtn,
} from "./HomeHeader.styles";
import MenuIcon from "@mui/icons-material/Menu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Categories from "../../components/category/Categories";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import YouTubeIcon from "@mui/icons-material/YouTube";
import {
  Outlet,
  Link,
  useNavigate
} from "react-router-dom";
import Menu from "../menu/Menu";
import {
  useEffect,
  useState
} from "react";
import DesktopNav from "../desktop nav/DesktopNav";
import Notification from "../notification/Notification";
import {
  useDispatch,
  useSelector
} from "react-redux";
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import DesktopVideoUpload from "../desktop video upload/DesktopVideoUpload";
import axios from "axios";
import AlertToaster from "../alert toaster/AlertToaster"
import {
  ToastContainer,
  toast
} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function HomeHeader( {
  pos
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toggleNotification = useSelector((state) => state.toggle.toggleNoti);
  const toggleMenu = useSelector((state) => state.toggle.toggleMobileMenu)
  const currentUser = useSelector((state) => state.user.currentUser)
  const toggleVideoCompp = useSelector((state) => state.toggle.toggleVideo)
  const searchValue = useSelector((state) => state.search.searchValue)
  const [isOnline,
    setIsOnline] = useState(false)

  const enableToggle = () => {
    dispatch({
      type: "TOGGLE_MOBILE_MENU", payload: !toggleMenu
    })
  };



  const toggleNavbar = () => dispatch({
    type: "TOGGLE_NAVBAR", payload: true
  });

  const toggleNotifications = () => {
    if (currentUser) {
      dispatch({
        type: "TOGGLE_NOTIFICAION", payload: true
      });
    } else {
      toast.error(' You must be logged in!', {
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

  const toggleVideoCompBtn = () => {
    if (currentUser) {
      dispatch({
        type: "TOGGLE_VIDEO_COMP", payload: true
      });
    } else {
      navigate("/signup");
    }
  }

  const changeValues = (e) => {
    dispatch({
      type: "GET_SEARCH_VALUE", payload: e.target.value
    })
  }


  const submitFormData = async (e) => {

    try {
      dispatch({
        type: "SEARCH_ERROR", payload: null
      })
      dispatch({
        type: "GET_SEARCH_DATA", payload: null
      });
      const data = await axios.get("https://vidtube-l48b.onrender.com/api/video/search", {
        params: {
          q: searchValue
        }
      })
      dispatch({
        type: 'GET_SEARCH_DATA', payload: data.data
      })
    }
    catch (e) {
      dispatch({
        type: 'SEARCH_ERROR', payload: e.response.data.message
      })
    }
  }
  return (
    <>
    <ToastContainer
      theme="colored"
      />
    {
      toggleNotification && <Notification />
    } < DesktopNav />
    {
      toggleMenu && <Menu />
    }
    {
      toggleVideoCompp && <DesktopVideoUpload />
    } < Header position = {
      location.pathname === '/channel' ? "0": pos
    } >
    <Container>
          <FirstPart>
            <MenuBar onClick={toggleNavbar}>
              <MenuIcon />
            </MenuBar>
            <Logo>
              <Link to={"/"} style={ { color: "red" }}>
                <YouTubeIcon sx={ { fontSize: "40px" }} />
              </Link>
              <H3>Vidtube</H3>
            </Logo>
          </FirstPart>

          <Form
      onSubmit={(e) => {
        e.preventDefault();
        submitFormData()
        navigate(`/search?q=${searchValue}`);
      }}
      method='get'
      >
            <Input placeholder="Search videos" name='q' value={searchValue} onChange={changeValues } />
            <SearchBtn>
              <SearchIcon sx={ { fontSize: "23px" }} />
            </SearchBtn>
          </Form>

          <ThirdPart>
            <SearchBtnMobile onClick={() => navigate("/search")}>
              <SearchIcon sx={ { fontSize: "23px" }} />
            </SearchBtnMobile>

             <DesktopVideo onClick={toggleVideoCompBtn}>
              <VideoCallOutlinedIcon />
            </DesktopVideo>
            <Icon>
            <NotificationsNoneOutlinedIcon
        onClick={toggleNotifications}
        sx={ { marginRight: "1rem", fontSize: "23px", cursor: "pointer" }}
        />
              </Icon>
            {currentUser ? <ProfileImage onClick={enableToggle} src={currentUser ? currentUser.img: ''} />:
      <SigninBtn onClick={() => navigate("/signup")}>
              <AccountCircleIcon sx={ { color: "blue", marginRight: ".5rem" }} />
              <p>
Sign in
      </p>
            </SigninBtn>
      }
            {/*currentUser ? "" : <MobileVert onClick={enableToggle}>
              <AccountCircleIcon />
            </MobileVert>  */}
          </ThirdPart>
        </Container>
  </Header>
  <Outlet /> < />
);
}

export default HomeHeader;