import "./Upload.style";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import UploadIcon from "@mui/icons-material/Upload";
import { Container, Input, Icon, Header, H4, Box, Span } from "./Upload.style";
import CloseIcon from "@mui/icons-material/Close";
import MobileVideoUpload from "../mobile video upload/MobileVideoUpload";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export default function Upload({ animate, invoke }) {
  const toggleVideoComp = useSelector((state) => state.toggle.toggleVideo)
  const dispatch = useDispatch()
  const [videoFile, setVideoFile] = useState('')

  const toggler = () => {
    invoke({ type: "TOGGLE", toggle: false });
    invoke({ type: "ANIMATE" });
  };


  const extractVideoFileUrl = (e) => {
    setVideoFile(e.target.files[0])
    dispatch({ type: "TOGGLE_VIDEO_COMP", payload: true })
  }

  return (
    <>
      {toggleVideoComp && <MobileVideoUpload videoFile={videoFile } />}
      
      <Container display={animate.toggle ? "0" : "-500px"}>
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
