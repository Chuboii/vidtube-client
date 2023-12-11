import './CommentPreview.style'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {Container, Header, Text, CommentNo, Main, Box, Image, Span} from "../comment preview/CommentPreview.style"
import img from "../../assets/dummy.jpeg"
import Comments from "../../components/comments/Comments"
import {useState, useEffect} from "react"
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import CommentForm from '../comment form/CommentForm';
import DesktopComment from '../desktop comment sec/DesktopComment';

export default function CommentPreview(){
  const dispatch = useDispatch()
  const location = useLocation()
  const videoId = location.pathname.split('/')[2]
  const commentPreview = useSelector((state) => state.comment.previewComment)  
  const allComment = useSelector((state) => state.comment.allComments)

  // https://vidtube-l48b.onrender.com
  useEffect(() => {

    const getData = async () => {
      try {
        const data = await axios.get(`http://localhost:8080/api/comment/find/${videoId}`, {
          withCredentials:true
        })
        
        dispatch({type:"GET_ALL_COMMENT", payload: data.data})
      }
      catch (e) {
        dispatch({type:"COMMENT_ERROR", payload:e.response.data})
      }
    }

    getData()

    const getCommentPreview = async () => {
      try {
        const data = await axios.get(`http://localhost:8080/api/comment/previewcomment/${videoId}`, {
        withCredentials:true
        })

        console.log(data)

        dispatch({type:"GET_COMMENT_PREVIEW", payload:data.data})
      }
      catch (e) {
        dispatch({ type: "COMMENT_ERROR", payload: e.response.data })
      }
    }
    getCommentPreview()
    
  },[])
  


  const enableComment = () => {
    dispatch({type:"TOGGLE_COMMENT_COMP", payload:true})
    dispatch({type:"DISABLE_BG", payload:true})
  }

  // const isAavailable = commentPreview.length > 0 ? commentPreview[0].photoURL : ''
  
  return (
    <>
      
      <Comments/>
<Container onClick={enableComment}>
  <Header>
   <Text> Comments </Text>
   <CommentNo>{allComment ? allComment.length : 0} </CommentNo>
  </Header>
  
  <Main>
               
                  <Box>
                    <Image src={commentPreview.length && commentPreview> 0 ? commentPreview[0].photoURL : ''} />
                    <Span>{commentPreview.length > 0 && commentPreview ? commentPreview[0].comment : ''} </Span>
                
                  </Box>
             
  <KeyboardArrowDownIcon/>
  </Main>
          </Container>
                
      </>
      
    )
}