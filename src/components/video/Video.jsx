import ReactPlayer from 'react-player'
import video from '../../assets/dummyvideo.mp4'
import {Container, VideoTag } from './Video.style'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';


function Video() {
    const location = useLocation()
    const dispatch = useDispatch()
    const videoUrl = useSelector((state) => state.video.videoData)
    const pathId = location.pathname.split("/")[2]

   

    useEffect(() => {
        const getData = async () => {
            try {
                const video = await axios.put(`https://vidtube-l48b.onrender.com/api/video/views/${pathId}`, {
                    body: ""
                }, {
                    withCredentials:true
                })

                dispatch({ type: "GET_VIDEO_DATA", payload: video.data })
            }
            catch (e) {
                dispatch({ type: "ERROR", payload: e.response.data.message })
            }
        }
        getData()
    }, [])
 

    return (
    <>
            <Container>
                <VideoTag>
                    <ReactPlayer
                  url={videoUrl ? videoUrl.videoUrl : ""}
                  width="100%"
                  height="100%"
                    playing={true}
                    loop={false}
                    controls={true}
                />            
                </VideoTag>

            </Container>
 </>
  )
}

export default Video