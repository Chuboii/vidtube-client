import { useDispatch, useSelector } from 'react-redux'
import ThumbnailContainer from '../../components/thumbnail container/ThumbnailContainer'
import Thumbnail from '../../components/thumbnails/Thumbnail'
import {Span } from './ManageVideos.style'
import { useEffect } from 'react'
import axios from 'axios'
import SkeletonLoading from '../../components/skeleton/Skeleton'
import FooterMobile from '../../components/footer mobile/FooterMobile'


function ManageVideos() {

    const dispatch = useDispatch()
  const channelVideo = useSelector((state) => state.video.channelVideo)
  const error = useSelector((state) => state.video.channelError)
    
    useEffect(() => {
      const getData = async () => {
        try {
          const data = await axios.get("https://vidtube-l48b.onrender.com/api/video/channel", {
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
          <h1 style={{color:"white", marginTop:"6rem", marginLeft:"5rem", fontSize:"14px"}}>MANAGE VIDEOS HERE</h1>
          <ThumbnailContainer>
              {channelVideo && channelVideo.length > 0 ?  channelVideo.map(vid => (
                  <Thumbnail key={vid._id} video={vid} />
              )) : error ? <Span>Create videos to be able to manage them </Span> :  <SkeletonLoading/>}
              
      </ThumbnailContainer>

      <FooterMobile/>
      </>
  )
}

export default ManageVideos