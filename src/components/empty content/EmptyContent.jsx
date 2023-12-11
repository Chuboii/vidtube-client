import "./EmptyContent.style"
import {Image, Container, Text, Span, Button} from "../empty content/EmptyContent.style"
import { useDispatch, useSelector } from "react-redux"
import Upload from "../mobile form upload/Upload"
import { useEffect } from "react"

export default function EmptyContent(){
  const dispatch = useDispatch()
  const toggleMobileComp = useSelector((state) => state.toggle.toggleMobileVideoComp)
  

  const enableVideoComp = () => {
    dispatch({ type: "TOGGLE_VIDEO_COMP", payload: true })
    dispatch({type:"TOGGLE_MOBILE_VIDEO_COMP", payload:true})
  }

  return(
    <>
    <Upload />
    <Container>
    <Image />
    
    <Text>Create content on any device </Text>
    
    <Span> Upload and record at home or on the go.</Span>
    <Span> Everything you make public will appear here </Span>
    <Button onClick={enableVideoComp}> Create </Button>
    </Container>
    </>
    )
}