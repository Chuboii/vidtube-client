import HomeIcon from '@mui/icons-material/Home';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import {
  Footer,
  Box,
  Paragraph
} from "./FooterMobile.style"
import Upload from "../mobile form upload/Upload"
import {
  useReducer
} from "react"
import CropUpload from "../crop upload/CropUpload"
import {
  useNavigate
} from 'react-router-dom';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import {
  ToastContainer,
  toast
} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function FooterMobile() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const currentUser = useSelector((state) => state.user.currentUser)

  const enableVideoUploadComp = () =>
  dispatch({
    type: "TOGGLE_MOBILE_VIDEO_COMP", payload: true
  })

  const navigateToSubscription = () => {
    if (currentUser) {
      navigate("/subscriptions")
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

  const navigateToLibrary = () => {
    if (currentUser) {
      toast.info('Library will be available soon!', {
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
    else {
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

  const navigateToShorts = () => {
    if (currentUser) {
      toast.info('Shorts will be available soon!', {
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
    else {
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
  return(
    <>
    <ToastContainer theme="colored" />
    <Upload />
    {
      /*<CropUpload/>*/
    } < Footer >
    <Box onClick={() => navigate("/") }>
    <HomeIcon />
    <Paragraph>Home </Paragraph>
    </Box>

    <Box onClick={navigateToShorts}>
    <SlowMotionVideoIcon />
    <Paragraph>Shorts </Paragraph>
    </Box>

    <Box>
    <ControlPointIcon onClick={enableVideoUploadComp} sx={ { fontSize: "40px" }} />
    </Box>

    <Box onClick={navigateToSubscription }>
          <SubscriptionsIcon />
  <Paragraph>Subscriptions </Paragraph>
    </Box>

    <Box onClick={navigateToLibrary}>
    <VideoLibraryOutlinedIcon />
    <Paragraph>Library </Paragraph>
    </Box>
      </Footer>
      </>
)
}