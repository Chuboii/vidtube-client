import {
  Container,
  Time,
  H2,
  VideoText,
  VideoName,
  Video,
  Header,
  Wrapper,
  Image,
  Img,
  Box,
  Text,
  Icon,
  Wrap
} from './Notification.style'
import img from '../../assets/dummy.jpeg'
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import {
  useDispatch,
  useSelector
} from 'react-redux';
import {
  useEffect
} from 'react';
import axios from 'axios';
import CloseIcon from "@mui/icons-material/Close";
import DarkBg from '../dark bg/DarkBg';
import {
  formatDistanceToNow
} from 'date-fns'


function Notification() {
  const dispatch = useDispatch()
  const notify = useSelector((state) => state.notify.notification)
  const currentUser = useSelector((state) => state.user.currentUser)
  const toggleNotify = useSelector((state) => state.toggle.toggleNoti)
  const toggleNotification = () => dispatch({
    type: "TOGGLE_NOTIFICAION", payload: false
  })

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await
          axios.get(`https://vidtube-l48b.onrender.com/api/notification`, {
            params: {
              userId: currentUser._id
            }
          })

        dispatch({
          type: 'GET_NOTIFICATION', payload: data.data
        })
      }
      catch (e) {
        dispatch({
          type: 'NOTIFICATION_ERROR', payload: e
        })
      }

    }

    getData()
  },
    [])


  return (
    <>
    <DarkBg />
    <Container r={toggleNotify ? 0: "-500px" }>
          <Header>
              <CloseIcon sx={ { fontSize: "30px" }} onClick={ toggleNotification} />
           <H2>Notifications</H2>
          </Header>
              <Wrap>
              {notify && notify.length > 0 ? notify.map(data => {
      const date = new Date(data.createdAt)
      return(
        <Wrapper key={data._id}>
                      <Image>
                          <Img src={data.photoUrl} />
                      </Image>
                      <Box>
                              <Text>
                              <span style={ { marginRight: ".5rem", fontWeight: "700" }}>
                                      {data.name}      {data.desc}
                                  </span>
                              </Text>
                              {data.videoName && data.thumbnail ? <VideoText>
                                  <VideoName>{data.videoName}</VideoName> <Video src={data.thumbnail}></Video>
                              </VideoText>: ''}
                              <Time>{formatDistanceToNow(date, {
          addSuffix: true
        })}</Time>
                      </Box>
                  </Wrapper>
      )}): "" }
              </Wrap>
      </Container>
    </>
  )
}

export default Notification