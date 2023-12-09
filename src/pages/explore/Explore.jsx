import Thumbnail from '../../components/thumbnails/Thumbnail'
import FooterMobile from "../../components/footer mobile/FooterMobile"
import {useEffect, useReducer, useState} from "react"
import Categories from '../../components/category/Categories'
import axiosBase from 'axios'
import ThumbnailContainer from '../../components/thumbnail container/ThumbnailContainer'
import { useNavigate} from 'react-router-dom'
import SkeletonLoading from '../../components/skeleton/Skeleton'
import { useDispatch } from 'react-redux'

const axios = axiosBase.create({
  baseURL: "https://vidtube-ogzw.onrender.com/api/",
});

function Explore() {
  const [videos, setVideos] = useState(null)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch({type:"GET_SEARCH_VALUE", payload:""})
    const getData = async () => {
      try {
        const res = await axios.get("/video/random")
        const data = res.data

        setVideos(data)

      }
      catch (e) {
        console.log(e)
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