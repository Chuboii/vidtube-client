import { useDispatch, useSelector } from 'react-redux'
import ThumbnailContainer from '../../components/thumbnail container/ThumbnailContainer'
import Thumbnail from '../../components/thumbnails/Thumbnail'
import { } from './ManageVideos.style'
import { useEffect } from 'react'
import axios from 'axios'
import SkeletonLoading from '../../components/skeleton/Skeleton'


function ManageVideos() {

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
          <h1 style={{color:"white", marginTop:"6rem", marginLeft:"5rem"}}>MANAGE VIDEOS HERE</h1>
          <ThumbnailContainer>
              {channelVideo && channelVideo.length > 0 ?  channelVideo.map(vid => (
                  <Thumbnail key={vid._id} video={vid} />
              )) : <SkeletonLoading/>}
              
      </ThumbnailContainer>
      </>
  )
}

export default ManageVideos