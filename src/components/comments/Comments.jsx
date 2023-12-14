import CloseIcon from '@mui/icons-material/Close';
import "./Comments.style"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import {
  Container,
  Header,
  H3,
  Main,
  Alert,
  Comment,
  Image,
  Form,
  ProfileImg,
  Input,
  Inner,
  Box,
  Wrapper,
  Name,
  Dot,
  Time,
  Text,
  Span,
  Icon
} from "../comments/Comments.style"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import GlobalStyle from "../../global style/GlobalStyle"
import CommentForm from "../comment form/CommentForm"
import {
  useEffect,
  useState
} from "react"
import {
  useDispatch,
  useSelector
} from 'react-redux';
import axios from 'axios';
import {
  formatDistanceToNow
} from 'date-fns'
import {
  useLocation,
  useNavigate
} from 'react-router-dom';
import {
  ToastContainer,
  toast
} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Comments() {
  const currentUser = useSelector((state) => state.user.currentUser)
  const commentData = useSelector((state) => state.comment.allComments)
  const toggleCommentForm = useSelector((state) => state.toggle.toggleCommentForm)
  const toggleCommentComp = useSelector((state) => state.toggle.toggleCommentComp)
  const disableBgTouch = useSelector((state) => state.toggle.disableBg)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const disableComment = () => {
    dispatch({
      type: "TOGGLE_COMMENT_COMP", payload: false
    })
    dispatch({
      type: "DISABLE_BG", payload: false
    })
  }


  const enableCommentForm = () => {
    if (currentUser) {
      dispatch({
        type: 'TOGGLE_COMMENT_FORM', payload: true
      })
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
  const disableCommentForm = () => dispatch({
    type: 'TOGGLE_COMMENT_FORM', payload: false
  })

  return(
    <>
    <ToastContainer theme="colored" />
    {
      disableBgTouch && <GlobalStyle overflow={"hidden"} />
    } < Container b = {
      toggleCommentComp ? "0": "-5000px"
    } onClick = {
      disableCommentForm
    } >
    <Header>
    <H3> Comments</H3>
    <CloseIcon onClick={disableComment} />
    </Header>
    <Main>
    <Alert> Remember to keep comments respectful and to follow our <Inner> Community Guidelines </Inner></Alert>
       
          {commentData ? commentData.map(data => {
      const date = new Date(data.createdAt)
      return (
        <Comment key={data._id}>
                <Image src={data.photoURL} />
                <Box>
                  <Wrapper>
                    <Name> {data.name}</Name>
                    <Dot> . </Dot>
                    <Time> {formatDistanceToNow(date, {
          addSuffix: true
        })} </Time>
                  </Wrapper>
                  <Text>
                   {data.comment}
                  </Text>
                  {/* <Icon>
                    <ThumbUpIcon sx={ { fontSize: "15px" }} />
                    <Span> 7.5K </Span>
                  </Icon> */}
                </Box>
                <MoreVertIcon sx={ { position: "absolute", right: ".5rem" }} />
              </Comment>
      )
    }): ""}

        </Main>

    <Form>
            <ProfileImg src={currentUser ? currentUser.img: ""} />
            <Input onClick={(e) => {
      e.stopPropagation()
      enableCommentForm()
    }}
      placeholder="Add a comment..."
      readOnly />
          </Form>
    {
      toggleCommentForm && <CommentForm />
        }
      </Container>
      </>
  )
}