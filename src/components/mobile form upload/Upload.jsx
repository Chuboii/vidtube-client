import "./Upload.style";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import UploadIcon from "@mui/icons-material/Upload";
import { Container, Input, Icon, Header, H4, Box, Span } from "./Upload.style";
import CloseIcon from "@mui/icons-material/Close";
import MobileVideoUpload from "../mobile video upload/MobileVideoUpload";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export default function Upload() {
  const toggleVideoComp = useSelector((state) => state.toggle.toggleMobileVideoUpload)
  const dispatch = useDispatch()
  const toggleMobileComp = useSelector((state) => state.toggle.toggleMobileVideoComp)
  const [videoFile, setVideoFile] = useState('')

  const toggler = () => {
    dispatch({ type: "TOGGLE_MOBILE_VIDEO_COMP", payload: false })
    dispatch({type:"DISABLE_BG", payload:false})
  };


  const extractVideoFileUrl = (e) => {
    setVideoFile(e.target.files[0])
    dispatch({ type: "TOGGLE_VIDEO_COMP", payload: true })
  }

  return (
    <>
      {toggleVideoComp && <MobileVideoUpload videoFile={videoFile } />}
      
      <Container display={toggleMobileComp ? "0" : "-500px"}>
        <Header>
          <H4> Create </H4>
          <CloseIcon onClick={toggler} />
        </Header>

        <Box>
          <Icon>
            <UploadIcon />
          </Icon>
          <Input onChange={extractVideoFileUrl} type="file" accept="video/*" />
          <Span> Upload a video </Span>
        </Box>

        <Box onClick={() => alert("feature coming soon...")}>
          <Icon>
            <SlowMotionVideoIcon />
          </Icon>
          <Span> Create a video </Span>
        </Box>
      </Container>
    </>
  );
}
