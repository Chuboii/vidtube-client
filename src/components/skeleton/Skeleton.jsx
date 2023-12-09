import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { Container, Rect, Text, Wrapper } from './Skeleton.style'
import Box from '@mui/material/Box';
import { useEffect, useState } from "react";


export default function SkeletonLoading() {
    const [resize, setResize] = useState(false)
    const [a, setA] = useState('')
    const arr = [0, 0, 0, 0, 0, 0]
    
    // useEffect(() => {
    //     const width = window.innerWidth 

    //     const resizeScreen = () => {
    //         if (width > 768) {
    //             setResize(false)
    //             setA('oajoa')
    //         }
    //         else {
    //             setResize(true)
    //             setA('oajoaslsls')
    //         }
    //     }

    //     window.addEventListener("resize", resizeScreen)

    //     return () => {
    //         window.removeEventListener("resize", resizeScreen)
    //     }
    // }, a)

    return (
        <Container >
            {
                arr.map((el, id) => {
                    return (
                        <Wrapper key={id} >
                            <Rect></Rect>
                            <Text></Text>
                            <Text></Text>
                        </Wrapper>
                          )
                        }
                )} 
            </Container>
  )
}
