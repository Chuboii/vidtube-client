import ThumbnailContainer from '../thumbnail container/ThumbnailContainer'
import Thumbnail from '../thumbnails/Thumbnail'
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import SkeletonLoading from '../skeleton/Skeleton'

function ChannelVideos() {
    const location = useLocation()
    const dispatch = useDispatch()
    const channelVideo = useSelector((state) => state.video.channelVideo)
    
    useEffect(() => {
      const getData = async () => {
        try {
          const data = await axios.get("http://localhost:8080/api/video/channel", {
            withCredentials: true
          })
  
          dispatch({ type: "GET_CHANNEL_VIDEO", payload: data.data })
  
        }
        catch (e) {
          dispatch({type:"CHANNEL_ERROR", payload:e.response.data})
        }
      }
  
      getData()
    }, [])
    

  return (
    <>
          <ThumbnailContainer>
              {channelVideo && channelVideo.length > 0 ? channelVideo.map(video => { 
                  return(
                    <Thumbnail video={video} key={video._id}  />

                  )
              }) : <SkeletonLoading/>}
          </ThumbnailContainer>          
          </>
  )
}

export default ChannelVideos