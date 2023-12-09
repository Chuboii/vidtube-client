import { useDispatch, useSelector } from "react-redux"
import FooterMobile from "../../components/footer mobile/FooterMobile"
import ThumbnailContainer from "../../components/thumbnail container/ThumbnailContainer"
import Thumbnail from "../../components/thumbnails/Thumbnail"
import { useEffect } from "react"
import axios from "axios"
import SkeletonLoading from "../../components/skeleton/Skeleton"


function Subsciption() {
  const dispatch = useDispatch()
  const subscription = useSelector((state) => state.video.subscriptionVideo)


  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios.get("http://localhost:8080/api/video/subvideo", {
          withCredentials:true
        })

        if (data) {
      
          const subs = data.data.reduce((accumulator, currArray) => {
            return accumulator.concat(currArray)
          }, [])
        
      
          dispatch({ type: 'GET_SUBSCRIPTION_VIDEO', payload: subs })
        }
      }
      catch (e) {
        dispatch({type:"SUBSCRIPTION_ERROR", payload:e.response.data})
      }
    }

    getData()
  }, [])


  return (
    <>
     
          <ThumbnailContainer>
        {subscription ? subscription.map(subscription => (
          <Thumbnail key={subscription.id} video={subscription} />
       )): <SkeletonLoading/> }
      </ThumbnailContainer>     

    <FooterMobile/>  
      </>
  )
}

export default Subsciption