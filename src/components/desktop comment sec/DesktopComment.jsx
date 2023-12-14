import {
  Container,
  Header,
  H2,
  Form,
  ProfileImage,
  Button,
  Input,
  Main,
  Wrapper,
  ImageBox,
  Img,
  Span,
  Box,
  Username,
  Time,
  Comment
} from './DesktopComment.style'
import img from '../../assets/dummy.jpeg'
import {
  useDispatch,
  useSelector
} from 'react-redux'
import {
  useEffect,
  useState
} from 'react'
import {
  formatDistanceToNow
} from 'date-fns'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import axios from 'axios'


function DesktopComment() {
  const dispatch = useDispatch()
  const allComments = useSelector((state) => state.comment.allComments)
  const currentUser = useSelector((state) => state.user.currentUser)
  const [value,
    setValue] = useState("")
  const videoId = location.pathname.split("/")[2]

  const changeValue = (e) => {
    setValue(e.target.value)
  }


  const submitComment = async (e) => {
    e.preventDefault()
    try {
      if (value) {
        await axios.post(`https://vidtube-l48b.onrender.com/api/comment/${videoId}/new`, {
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

        dispatch({
          type: 'GET_ALL_COMMENT', payload: allComment.data
        })
        setValue("")
      } else {
        dispatch({
          type: "COMMENT_ERROR", payload: "Please provide an input"
        })
      }
    }
    catch (e) {
      dispatch({
        type: "COMMENT_ERROR", payload: e.response.data.message
      })
    }

  }
  return (
    <>
    <Container>
              <Header>
              <H2>{allComments ? allComments.length: 0} comments</H2>
              </Header>

              <Form onSubmit={submitComment}>
                  <ProfileImage src={ currentUser ? currentUser.img: ""} />
                  <Input placeholder="Add a comment" value={value} onChange={changeValue} name='postComment' />
                  <Button><SendOutlinedIcon sx={ { position: 'relative', right: "2rem" }} /></Button>
              </Form>

              <Main>
                  {allComments && allComments.length > 0 ?
      allComments.map(comment => {
        const date = new Date(comment.createdAt)
        return (
          <Wrapper key={comment._id}>
                              <ImageBox>
                                  <Img src={comment.photoURL} />
                              </ImageBox>
                              <Box>
                                  <Span>
                                      <Username>
                                          @{comment.name}
                                      </Username>

                                      <Time>{formatDistanceToNow(date, {
            addSuffix: true
          })}</Time>
                                  </Span>
                                  <Comment>
                                      {comment.comment}
                                  </Comment>
                              </Box>
                          </Wrapper>
        )}): '' }
              </Main>
        </Container> < />
  )
}

export default DesktopComment