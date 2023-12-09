import "./ChannelAbout.style"
import {Container, Text} from "../channel about/ChannelAbout.style"
import InfoIcon from '@mui/icons-material/Info';
import { useSelector } from "react-redux";
import {format} from 'date-fns'

export default function ChannelAbout(){
  const currentUser = useSelector((state) => state.user.currentUser)  
  const date = new Date(currentUser ? currentUser.createdAt : "")

  // formatDistanceToNow(date, {addSuffix: true})

  return(
    <>
    <Container>
    <InfoIcon/>
        <Text>Joined {format(date, "dd MMM, yyyy")}</Text>
    </Container>
    </>
    )
}