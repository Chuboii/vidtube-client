import { Container, ThumbnailBox, ImageBox, Img, VideoLength, Description, PostDescript, Title, MetaTags, Name, Box, Views, Time} from "./Recommendations.style"
import img from '../../assets/dummy.jpeg'
import { useEffect } from "react"
import axios from "axios"
import { useLocation, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { formatDistanceToNow } from 'date-fns'

function Recommendations() {
    const location = useLocation()
    const videoId = location.pathname.split("/")[2]
    const dispatch = useDispatch()
    const recommendedVideo = useSelector((state) => state.video.recommendedVideo)
    const navigate = useNavigate()

     
    useEffect(() => {
        const getData = async () => {
            try {
                const data = await axios.get(`http://localhost:8080/api/video/${videoId}/recommendation`)
                dispatch({ type: "GET_RECOMMENDED_VIDEO_DATA", payload: data.data })
            }
            catch (e) {
                dispatch({ type: "RECOMMENDED_ERROR", payload: e.response.data})
            }
        }
        getData()
    }, [])

      
    const enableVideoPage = (data) => {
        console.log(data)
        dispatch({type:"GET_VIDEO_DATA", payload:data})
        navigate(`/watch/${data._id}/${data.userId}`)
    }
    
  return (
    <Container>
          {
              recommendedVideo ? recommendedVideo.map(data => {
                  const date = new Date(data.createdAt)
                  
              return (
                  <ThumbnailBox key={data._id} onClick={() => enableVideoPage(data)}>
                      <ImageBox>
                          <Img src={data.thumbnail} />
                          <VideoLength>5:00</VideoLength>
                          
                      </ImageBox>
                      <Description>
                          <PostDescript>
                        <Title h={50}>{data.title} </Title>
                              <MetaTags>
                                  <Name>{data.name }</Name>
                                  <Box>
                                      <Views>{data.views} views</Views>
                                      <Time>{formatDistanceToNow(date, { addSuffix: true })}</Time>
                                  </Box>
                              </MetaTags>
                          </PostDescript>
                      </Description>
                  </ThumbnailBox>
              )
          }) : "" }
      </Container>

  )
}

export default Recommendations