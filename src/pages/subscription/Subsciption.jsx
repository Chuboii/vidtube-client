import {
  useDispatch,
  useSelector
} from "react-redux"
import FooterMobile from "../../components/footer mobile/FooterMobile"
import ThumbnailContainer from "../../components/thumbnail container/ThumbnailContainer"
import Thumbnail from "../../components/thumbnails/Thumbnail"
import {
  useEffect
} from "react"
import axios from "axios"
import {
  NotFound
} from './Subsciption.style'
import SkeletonLoading from "../../components/skeleton/Skeleton"
import ErrorPage from "../error page/ErrorPage"
import {
  useState
} from "react"
import {
  useNavigate
} from "react-router-dom"

function Subsciption() {
  const dispatch = useDispatch()
  const subscription = useSelector((state) => state.video.subscriptionVideo)
  const currentUser = useSelector((state) => state.user.currentUser)
  const error = useSelector((state) => state.video.subscriptionError)
  const navigate = useNavigate()

  // https://vidtube-l48b.onrender.com/


  useEffect(() => {
    const getData = async () => {
      try {
    
        const data = await axios.get("http://localhost:8080/api/video/subvideo", {
          params: {
            id: currentUser._id
          }
        })

        if (data) {

          const subs = data.data.reduce((accumulator, currArray) => {
            return accumulator.concat(currArray)
          }, [])


          dispatch({
            type: 'GET_SUBSCRIPTION_VIDEO', payload: subs
          })
        }
      }
      catch (e) {
        dispatch({
          type: "SUBSCRIPTION_ERROR", payload: e.response
        })


        if (e.response.data.status === 500) {
          navigate("/server-error")
        }
      }
    }

    getData()
  },
    [])


  return (
    <>

    <ThumbnailContainer>
        {subscription ? subscription.map(subscription => (
      <Thumbnail key={subscription.id} video={subscription} />
    )): error ? <NotFound> Subscribe to other users channels to see their videos 😋 </NotFound>: <SkeletonLoading /> }
      </ThumbnailContainer>

    <FooterMobile /> < />
  )
}

export default Subsciption