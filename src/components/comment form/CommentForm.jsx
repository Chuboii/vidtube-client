import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import "./CommentForm.style"
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import {
  Container,
  Span,
  Wrapper,
  Header,
  Box,
  Image,
  Profile,
  Name,
  Username,
  Form,
  Input,
  Terms,
  Emojis,
  Emo,
  Inner
} from "../comment form/CommentForm.style"
import img from "../../assets/dummy.jpeg"
import {
  useDispatch,
  useSelector
} from 'react-redux';
import {
  useState
} from 'react';
import axios from 'axios';
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import {
  useLocation
} from 'react-router-dom';

export default function CommentForm() {
  const currentUser = useSelector((state) => state.user.currentUser)
  const [value,
    setValue] = useState("")
  const dispatch = useDispatch()
  const location = useLocation()
  const userInfo = useSelector((state) => state.user.otherUser)
  const videoId = location.pathname.split("/")[2]
  const emojis = ["❤️",
    "😂",
    "🎉",
    "😮",
    "😥",
    "😅",
    "😊"]
  

  const submitComment = async (e) => {
    e.preventDefault()
    try {
      if (value) {
        const data = await axios.post(`https://vidtube-l48b.onrender.com/api/comment/${videoId}/new`, {
          comment: value,
          name: currentUser.name,
          userId: currentUser._id,
          videoId,
          photoURL: currentUser.img
        },
          {
            withCredentials: true
          })
        const allComment = await axios.get(`https://vidtube-l48b.onrender.com/api/comment/find/${videoId}`)

        const res = await axios.post("https://vidtube-l48b.onrender.com/api/notification", {
          userId: userInfo._id,
          name: currentUser.name,
          photoUrl: currentUser.img,
          desc: "just commented on your video",
        }, {
          withCredentials: true
        })

        dispatch({
          type: "TOGGLE_COMMENT_FORM", payload: false
        })
      

        dispatch({
          type: 'GET_ALL_COMMENT', payload: allComment.data
        })
        setValue("")
      }
      else {
        dispatch({
          type: "COMMENT_ERROR", payload: "Please provide an input"
        })
      }
    }
    catch (e) {
      console.log(e)
      dispatch({
        type: "COMMENT_ERROR", payload: e.response.data.message
      })
    }
  }

  const changeValues = (e) => {
    setValue(e.target.value)
  }

  const toggleCommentForm = () => dispatch({
    type: "TOGGLE_COMMENT_FORM", payload: false
  })

  const enableEmojis = (e) => {
    console.log(e)
    e.preventDefault()
    setValue(prev => {
      return [prev, e.target.innerHTML]
    })
  }

  return(
    <>
    <Container onClick={(e) => e.stopPropagation()}>
        <Header>
        <Span> Commenting as </Span>
          <CloseOutlinedIcon onClick={toggleCommentForm } />
          </Header>
    <Wrapper>
    <Box>
    <Image src={currentUser ? currentUser.img: ""} />
    <Profile>
    <Name> {currentUser ? currentUser.name: ""} </Name>
    <Username> @{currentUser ? currentUser.username: ""} </Username>
    </Profile>
    </Box>
    <EditOutlinedIcon />
    </Wrapper>
    <Form onSubmit={submitComment}>
    <Input placeholder="Add a comment..." name="comment" value={value} onChange={changeValues} autoFocus={true} />
          <SendOutlinedIcon type='submit' onClick={submitComment } />
    </Form>
    <Terms> By completing this action you are creating a <Inner> channel </Inner> and agree to <Inner>{`Vidtube's`} Terms of Service. </Inner>
    </Terms>
    <Emojis>
    {emojis.map((el, id) => <Emo key={id} onClick={enableEmojis}>{el}</Emo>)}
    </Emojis>
    </Container> < />
  )
}