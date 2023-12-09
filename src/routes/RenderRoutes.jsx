import { Route, Routes, useLocation } from "react-router-dom"
import Explore from "../pages/explore/Explore"
import Watch from "../pages/watch/Watch"
import HomeHeader from "../components/home header/HomeHeader"
import {useContext} from "react"
import Channel from "../pages/channel/Channel"
import {ScrollContext} from "../context/ScrollContext"
import ChannelAbout from "../pages/channel about/ChannelAbout"
import EmptyContent from "../components/empty content/EmptyContent.jsx"
import AuthSignup from '../pages/auth/auth signup/AuthSignup.jsx'
import AuthSignin from '../pages/auth/auth signin/AuthSignin.jsx'
import EmailSignin from '../pages/email signin/EmailSignin.jsx'
import EmailSignup from '../pages/email signup/EmailSignup.jsx'
import SearchPage from "../pages/search/SearchPage.jsx"
import Subsciption from "../pages/subscription/Subsciption.jsx"
import TagVideoPage from "../pages/tag video page/TagVideoPage.jsx"
import { useSelector } from "react-redux"
import ChannelHome from "../pages/channel home/ChannelHome"
import ChannelLinkHolder from "../components/channel link holder/ChannelLinkHolder.jsx"
import ChannelVideos from "../components/channel videos/ChannelVideos.jsx"
import ManageVideos from "../pages/manage videos/ManageVideos.jsx"

function RenderRoutes() {
  const { pos } = useContext(ScrollContext)
  const videoData = useSelector((state) => state.video.channelVideo)

    return (
        <>
        <Routes>
          <Route path="/signup" element={<AuthSignup />} />
          <Route path="/signup/email" element={<EmailSignup />} />
          <Route path="/signin/email" element={<EmailSignin />} />
          <Route path="/signin" element={<AuthSignin/> } />
          <Route path="/" element={<HomeHeader pos={pos} />} >
          <Route path="manage/videos" element={<ManageVideos/>} />
            <Route path="search" element={<SearchPage />} />
            <Route path={`category/:id`} element={<TagVideoPage />} />
            <Route path="subscriptions" element={<Subsciption />}/>
                <Route index element={<Explore />}/>
            <Route path={ `watch/:id/:id` } element={<Watch />} />
                 </Route>

          <Route path="/channel" element={<Channel />} >
            
            <Route path="about" element={<ChannelAbout />} />  

          </Route>
          
     
     
        </Routes>
        </>
  )
}

export default RenderRoutes