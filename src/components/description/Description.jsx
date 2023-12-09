import { useSelector } from 'react-redux'
import { Container, Text, Tags, Tag } from './Description.style'

function Description() {
    const videoInfo = useSelector((state) => state.video.videoData)

    


  return (
      <>
          <Container>
              <Tags>
                  
              {
                 videoInfo ? videoInfo.tags.map((tag, id) => {
                                return <Tags key={id}>#{ tag }</Tags>
                            }) : ""
               }
              </Tags>
            <Text>        {
                         videoInfo ? videoInfo.desc : ""
               }</Text>
      </Container>
      </>
  )
}

export default Description