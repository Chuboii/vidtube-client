import { useEffect, useState } from 'react'
import ThumbnailContainer from '../../components/thumbnail container/ThumbnailContainer'
import Thumbnail from '../../components/thumbnails/Thumbnail'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
import Categories from '../../components/category/Categories'
import FooterMobile from '../../components/footer mobile/FooterMobile'
import SkeletonLoading from '../../components/skeleton/Skeleton'

function TagVideoPage() {
    const dispatch = useDispatch()
    const location = useLocation()
    const [videoData, setVideoData] = useState(null)
    const pathId = location.pathname.split("/")[2]
    const errorNotFound = useSelector((state) => state.video.error)
    const navigate = useNavigate()

    

    useEffect(() => {
        const getData = async () => {
            try {
                const videoData = await axios.get(`https://vidtube-l48b.onrender.com/api/video/category/${pathId}`, {
                  withCredentials:true
                })
                setVideoData(videoData.data)
            }
            catch (e) {
                dispatch({ type: "ERROR", payload: e.response.data.message })
                if (errorNotFound === 'video not found') {
                    dispatch({type:"GET_VIDEO_DATA", payload: null})
                }
                
        if (e.response.data.status === 500) {
            navigate("/server-error")
         }
            }
        }
        getData()
    }, [])

    useEffect(() => {
        const getData = async () => {
            try {
                if (location.pathname === '/category/trending') {
                    const videoData = await axios.get(`http://localhost:8080/api/video/trending`, {
                        withCredentials: true
                    })
                    setVideoData(videoData.data)
                }

            }
            catch (e) {
                dispatch({ type: "ERROR", payload: e.response.data.message })
                if (errorNotFound === 'video not found') {
                    dispatch({type:"GET_VIDEO_DATA", payload: null})
                }
            }
        }
        getData()
    }, [])

    
    return (
        <>
            <Categories/>
            <ThumbnailContainer>
                {videoData ? videoData.map(vid => (
                    <Thumbnail key={vid._id} video={vid}/>
                  ))  : <SkeletonLoading/>
                }
            </ThumbnailContainer>
            <FooterMobile/>
        </>
  )
}

export default TagVideoPage