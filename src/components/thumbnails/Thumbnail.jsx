import { ThumbnailBox, Img, ImageBox,IconBox, Description,Icon, ProfilePhoto, PostDescript, Views, Title, Name, Box, MetaTags, Time, VideoLength } from "./Thumbnail.style"
import img from '../../assets/dummy.jpeg'
import {formatDistanceToNow} from 'date-fns'
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import axios from "axios"

function Thumbnail({ video }) {
  const navigate = useNavigate()
  const date = new Date(video ? video.createdAt : 0)
  const dispatch = useDispatch()
  
  const enableVideoPage = (id, userId) => {
    dispatch({type:"GET_VIDEO_DATA", payload:video})
    navigate(`/watch/${id}/${userId}`)
  }
   

  const deleteVideo = async (e) => {
    e.stopPropagation()
    try {
      const res = await axios.delete(`https://vidtube-l48b.onrender.com/api/video/delete/${video._id}`, {
        withCredentials:true
      })

      dispatch({type:'GET_CHANNEL_VIDEO', payload:res.data})

      
    }
    catch (e) {
      console.log(e)
    }
  }
  return (
    
    video ?
      <ThumbnailBox onClick={() => {
        enableVideoPage(video._id, video.userId)
      }} >
        <ImageBox>
          <Img src={video.thumbnail} />
          {/* <VideoLength>5:00</VideoLength> */}
          { location.pathname === '/manage/videos' ?
            <IconBox>
              <Icon onClick={deleteVideo}><DeleteForeverIcon sx={{ fontSize: "30px" }} /> </Icon>
              <Icon> <EditIcon sx={{ fontSize: "30px" }} /> </Icon>
            </IconBox>
          : ""}
        </ImageBox>
        <Description>
          <ProfilePhoto src={video.photoUrl} />
          <PostDescript>
            <Title h={50}>{video.title} </Title>
            <MetaTags>
              <Name>{video.name}</Name>
              <Box >
                <Views>{video.views} views</Views>
                <Time>{formatDistanceToNow(date, { addSuffix: true })}</Time>
              </Box>
            </MetaTags>
          </PostDescript>
        </Description>
      </ThumbnailBox >
      : ""
          
    
  )
}

export default Thumbnail