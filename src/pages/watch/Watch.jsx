import VideoDescript from '../../components/video descript/VideoDescript'
import Video from '../../components/video/Video'
import {Container, FirstPart, SecondPart} from './Watch.style'
import Recommendations from "/src/components/recommendations/Recommendations"
import {useContext, useEffect} from "react"
import {ScrollContext} from "../../context/ScrollContext"
import CommentPreview from "../../components/comment preview/CommentPreview"
import GlobalStyles from '../../global style/GlobalStyle'
import CommentForm from '../../components/comment form/CommentForm'
import DesktopComment from '../../components/desktop comment sec/DesktopComment'

function Watch() {
  const screen = window.innerWidth

  return (
    <>
      <GlobalStyles overflow={screen >= "768px" ?'hidden' : 'scroll'} />
    <Container>
          <FirstPart>
              <Video />
              <VideoDescript/>
            <CommentPreview />
<DesktopComment/>
        </FirstPart>
          <SecondPart>
          <Recommendations/>
        </SecondPart>
        
      </Container>
      </>
  )
}

export default Watch 