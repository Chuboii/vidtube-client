import './VideoDescript.style'
import {
  Container,
  Description,
  FirstPart,
  Title,
  SecondPart,
  UserInfo,
  Img,
  Box,
  Name,
  SubscribeButton,
  Icons,
  Views,
  LikeButton,
  Span,
  ShareButton,
  MoreButton,
  Tags,
  More,
  SubscriberCount,
  Time
} from '../../components/video descript/VideoDescript.style'
import img from '../../assets/dummy.jpeg'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import RedoIcon from '@mui/icons-material/Redo';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import {
  formatDistanceToNow
} from 'date-fns'
import {
  useLocation,
  useNavigate
} from 'react-router-dom';
import {
  useEffect,
  useState
} from 'react';
import axios from 'axios';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import DescriptionVideo from '../description/Description';
import {
  ToastContainer,
  toast
} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function VideoDescript() {
  const videoInfo = useSelector((state) => state.video.videoData)
  const date = new Date(videoInfo !== null ? videoInfo.createdAt: '')
  const location = useLocation()
  const pathId = location.pathname.split('/')[3]
  const videoId = location.pathname.split('/')[2]
  const dispatch = useDispatch()
  const userInfo = useSelector((state) => state.user.otherUser)
  const currentUser = useSelector((state) => state.user.currentUser)
  const [isSubscribed,
    setIsSubscribed] = useState(false)
  const [isLiked,
    setIsLiked] = useState(false)
  const navigate = useNavigate()
  //   setShareUrl(`https://localhost:5173/watch/${videoId}${pathId}`);





  useEffect(() => {
    dispatch({
      type: "OTHER_USER_DATA", payload: null
    })

    const getData = async () => {
      try {
        const userData = await axios.get(`http://localhost:8080/api/user/find/${pathId}`)

        dispatch({
          type: "OTHER_USER_DATA", payload: userData.data
        })

      }
      catch (e) {
        dispatch({
          type: "ERROR", payload: e
        })
      }
    }
    getData()


  }, [])

  useEffect(() => {
    const getSubscribedData = async () => {
      try {
        if (currentUser) {
          const data = await axios.get(`http://localhost:8080/api/user/find/${currentUser._id}`, {
            withCredentials: true
          })

          const duplicate = data.data.subscribedUsers.some(el => el === pathId)

          if (duplicate) {
            setIsSubscribed(true)
          } else {
            setIsSubscribed(false)
          }
        }
      }
      catch (e) {
        console.log(e)
      }
    }

    getSubscribedData()

    const getIsLikedData = async () => {
      try {
        if (currentUser) {
          const data = await axios.get(`http://localhost:8080/api/video/find/${videoId}`, {
            withCredentials: true
          })

          const duplicate = data.data.likes.some(el => el === videoId)

          console.log("liked", duplicate)
          if (duplicate) {
            setIsLiked(true)
          } else {
            setIsLiked(false)
          }
        }
      }
      catch (e) {
        console.log(e)
      }
    }

    getIsLikedData()
  },
    [dispatch,
      isLiked])

  const increaseSubscribers = async () => {

    try {

      if (currentUser) {
        const data = await axios.get(`http://localhost:8080/api/user/find/${currentUser._id}`, {
          withCredentials: true
        })

        const duplicate = data.data.subscribedUsers.some(el => el === pathId)

        if (duplicate) {
          setIsSubscribed(false)
          const newData = await
          axios.put(`http://localhost:8080/api/user/decresub/${pathId}`, {
            userId: currentUser._id
          },
            {
              withCredentials: true
            }
          )
          dispatch({
            type: "OTHER_USER_DATA", payload: newData.data
          })
        } else {
          setIsSubscribed(true)
          const newData = await axios.put(`http://localhost:8080/api/user/incresub/${pathId}`, {
            userId: currentUser._id
          },
            {
              withCredentials: true
            }
          )

          dispatch({
            type: "OTHER_USER_DATA", payload: newData.data
          })


          const res = await axios.post("http://localhost:8080/api/notification", {
            userId: userInfo._id,
            name: newData.data.name,
            photoUrl: newData.data.img,
            desc: "just subscribed to your channel",
          }, {
            withCredentials: true
          })

          console.log(res)
        }
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
        })

      }

    }
    catch(e) {
      console.log(e)
    }
  }

  const incrementLikes = async () => {
    try {
      if (currentUser) {
        const data = await axios.get(`http://localhost:8080/api/video/find/${videoId}`, {
          withCredentials: true
        })

        const duplicate = data.data.likes.some(el => el === videoId)

        if (duplicate) {
          setIsLiked(false)
          const newData = await axios.put(`http://localhost:8080/api/video/delike/${videoId}`, {
            body: ""
          },
            {
              withCredentials: true
            }
          )
          dispatch({
            type: "GET_VIDEO_DATA", payload: newData.data
          })
        } else {
          setIsLiked(true)
          const newData = await axios.put(`http://localhost:8080/api/video/like/${videoId}`, {
            body: ""
          },
            {
              withCredentials: true
            }
          )
          dispatch({
            type: "GET_VIDEO_DATA", payload: newData.data
          })

          const res = await axios.post("http://localhost:8080/api/notification", {
            userId: userInfo._id,
            name: newData.data.name,
            photoUrl: newData.data.img,
            desc: "just liked your video",
            thumbnail: videoInfo ? videoInfo.thumbnail: '',
            videoName: videoInfo ? videoInfo.title: ''
          }, {
            withCredentials: true
          })

          console.log(res)

        }
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
    catch (e) {
      console.log(e)
    }
  }

  const handleShareBtn = async () => {
    try {
      await navigator.share({
        url: location.pathname,
        name: videoInfo ? videoInfo.name: "",
        text: videoInfo ? videoInfo.desc: "",
        img: videoInfo ? videoInfo.thumbnail: ""
      })
    }
    catch (e) {
      console.log(e)
    }
  }

  return (
    <>
    <ToastContainer
      theme="colored"
      />

    <Container>
            <Description>
                    <FirstPart>
                        <Title>
                        {videoInfo ? videoInfo.title: ""}
                </Title>
               <Box>
               <Views>
               {videoInfo ? videoInfo.views: ""} views
               </Views>
               <Time> {videoInfo ? formatDistanceToNow(date, {
      addSuffix: true
    }): ""}</Time>
                        </Box>
                        <DescriptionVideo />
            </FirstPart>

                <SecondPart>

                        <UserInfo>
                        <Box>
                            <Img src={userInfo ? userInfo.img: ""} />
                            <Name>
                                {userInfo ? userInfo.name: ""}
                              </Name>
                              <SubscriberCount>
                                {userInfo ? userInfo.subscribers: 0}
                                <span style={ { marginLeft: ".4rem" }}> subscribers </span>
                              </SubscriberCount>
                            </Box>
                        <SubscribeButton onClick={increaseSubscribers}>
                            {isSubscribed ? "subscribed": "subscribe"}
                        </SubscribeButton>
                        </UserInfo>

                        <Icons>
                        <LikeButton onClick={incrementLikes}>
                            {isLiked ?
      <ThumbUpIcon sx={ { fontSize: "20px" }} />: <ThumbUpOffAltIcon />
      }
                            <Span>{videoInfo ? videoInfo.likesCount: "" }</Span>
                        </LikeButton>
                        <ShareButton onClick={handleShareBtn}>
                       <RedoIcon sx={ { fontSize: "20px" }} />
                            <Span>Share</Span>
                        </ShareButton>

                        <MoreButton>

                        </MoreButton>
                    </Icons>
                    </SecondPart>
            </Description>
            </Container> < />
  )
}

export default VideoDescript