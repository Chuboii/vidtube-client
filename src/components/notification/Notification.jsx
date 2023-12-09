import {Container, Wrapper, Image, Img, Box, Text, Icon, Wrap} from './Notification.style'
import img from '../../assets/dummy.jpeg'
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';

function Notification() {
    const dispatch = useDispatch()
    const notify = useSelector((state) => state.notify.notification)


    useEffect(() => {
        const getData = async () => {
            try {
                const data = await axios.get(`http://localhost:8080/api/notification`, {
                    withCredentials: true
                })

                dispatch({type:'GET_NOTIFICATION', payload:data.data})
            }
            catch (e) {
                dispatch({type:'NOTIFICATION_ERROR', payload:e})
            }
        }

        getData()
    }, [])


  return (

      <Container>  
      uu    <Wrap>
              {notify && notify.length > 0 ? notify.map(data => {
                  
                  return(
                  <Wrapper key={data._id}>
                      <Image>
                          <Img src={data.photoUrl} />
                      </Image>
                      <Box>
                          <Text>
                                {data.name}
                                 {data.desc}
                          </Text>
                      </Box>
                  </Wrapper>
               )}) : "" }
      
              </Wrap>
    </Container>
  )
}

export default Notification