import "./CropUpload.style"
import {Container, Vid, Span, Crop, Header, Video, Button} from "../crop upload/CropUpload.style"
import WestIcon from '@mui/icons-material/West';
import CropIcon from '@mui/icons-material/Crop';
import vid from '../../assets/dummyvideo.mp4'
import { useState, useRef} from 'react'
//import { createWorker } from '@ffmpeg/ffmpeg'

export default function CropUpload(){
//const outputVideoRef = useRef()
/*
  const handleCropVideo = async () => {
    
    const startTime = 0;
    const endTime = 2;
    
    try {
      console.log('Loading worker...');
      await worker.load();
      console.log('Worker loaded successfully.');

      console.log('Writing input video...');
      await worker.write('input.mp4', vid);
      console.log('Input video written successfully.');

      console.log('Transcoding video...');
      await worker.transcode('output.mp4', {
        input: 'input.mp4',
        output: 'output.mp4',
        inputArgs: [`-ss ${startTime}`, '-i', 'input.mp4', '-t', `${endTime - startTime}`, '-c', 'copy'],
      });
      console.log('Video transcoded successfully.');

      console.log('Reading output video...');
      const result = await worker.read('output.mp4');
      console.log('Output video read successfully.');

      const outputBlob = new Blob([result.data], { type: 'video/mp4' });
      const outputVideoUrl = URL.createObjectURL(outputBlob);
      outputVideoRef.current.src = outputVideoUrl;

      console.log('Terminating worker...');
      await worker.terminate();
      console.log('Worker terminated.');

      console.log('Video cropped successfully.');
    } catch (error) {
      console.error('Error:', error);
    }


  */
  
  return(
    <Container>
     <Header>
     <WestIcon/>
     <Crop>
    <CropIcon/>
     <Span>Crop </Span>
     </Crop>
     </Header>
     
     <Video>
      <Vid src={vid}> </Vid>
     </Video>
     
     <video > </video>
     <Button >
     Next
     </Button>
    </Container>
    )
}