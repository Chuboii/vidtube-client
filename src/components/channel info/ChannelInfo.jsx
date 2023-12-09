import "./ChannelInfo.style"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {Info, Image, Name, Username, Wrapper, Span} from "../channel info/ChannelInfo.style"
import img from "../../assets/dummy.jpeg"
import ManageVideoBtn from '../manage vid btn/ManageVideoBtn'
import {  useSelector } from "react-redux"

export default function ChannelInfo() {
  const currentUser = useSelector((state) => state.user.currentUser)

  return(
    <>
    <Info>
        <Image src={currentUser ? currentUser.img : ""} />
        <Wrapper>
    <Name> {currentUser ? currentUser.name : "" }</Name>
          <Username> @{currentUser ? currentUser.username : "" } </Username>
     <ManageVideoBtn/>
        </Wrapper>
   </Info>
    </>
    )
}