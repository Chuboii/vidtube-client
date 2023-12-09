import {styled} from "styled-components"

export const Container = styled.div`
  position: fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background:black;
  z-index:4;
  color:white;
`
export const Header = styled.div`
  display:flex;
  padding:1rem;
`
export const Video = styled.div`
  padding:1rem;
`
export const Button = styled.div`
   position: absolute;
   bottom:10px;
   right:10px;
   background:white;
   color:black;
   padding:.5rem;
   border-radius:5px;
`
export const Crop = styled.div`
  position:relative;
  margin:auto;
  display:flex;
  background:gray;
  padding:.5rem;
   border-radius:5px;
align-items:center;
`
export const Span = styled.div`
   margin-left:.5rem;
   
`

export const Vid = styled.video`
    width:100%;
    height:80dvh;
    object-fit:cover;
    object-position:left;
`