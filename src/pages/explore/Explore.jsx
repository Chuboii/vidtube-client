import Thumbnail from '../../components/thumbnails/Thumbnail'
import FooterMobile from "../../components/footer mobile/FooterMobile"
import {useEffect, useReducer, useState} from "react"
import Categories from '../../components/category/Categories'
import axios from 'axios'
import ThumbnailContainer from '../../components/thumbnail container/ThumbnailContainer'
import { useNavigate} from 'react-router-dom'
import SkeletonLoading from '../../components/skeleton/Skeleton'
import { useDispatch } from 'react-redux'



function Explore() {
  const [videos, setVideos] = useState(null)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch({ type: "GET_SEARCH_VALUE", payload: "" })
    // https://vidtube-l48b.onrender.com
    dispatch({
      type: "TOGGLE_MOBILE_VIDEO_COMP", payload: false
    })
    const getData = async () => {
      try {
        const res = await axios.get(" https://vidtube-l48b.onrender.com/api/video/random")
        const data = res.data

        setVideos(data)

      }
      catch (e) {
     
        if (e.response.data.status === 500) {
          navigate("/server-error")
       }
      }
    }
    getData()
  }, [])



    return (
      <>
        
        <Categories />
        
        <ThumbnailContainer>
          {videos ? videos.map((video) => (
            <Thumbnail key={video.id} video={video}/>
          )) : <SkeletonLoading/>}
          
        </ThumbnailContainer>
 
           <FooterMobile/>
</>
  )
}

export default Explore