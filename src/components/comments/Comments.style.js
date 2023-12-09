import {styled} from "styled-components"

export const Container = styled.div`
   position:relative;
   position:fixed;
   bottom:${({b}) => b};
   width:100%;
   background:#222831;
   color:white;
   z-index:10;
   font-size:12px;
   overflow-y:scroll;
   max-height:55dvh;
   border-top-left-radius:25px;
   border-top-right-radius:25px;
   transition:all .5s;
  
   @media screen and (min-width:700px) {
    width: 65%;
    font-size: 18px;
    display: none;
   }
`

export const Header = styled.div`
 display:flex;
 justify-content:space-between;
 padding:1.5rem 1rem;
 position:sticky;
 top:0;
 width:100%;
 z-index:7;
 background:#222831;
 align-items:center;
`

export const Comment = styled.div`
   display:flex;
   position:relative;
   margin-top:2rem;
   
`
export const Image = styled.img`
  width:30px;
  height:30px;
  object-fit: cover;
  border-radius:50%;
  position:relative;
  top:.5rem;
`
export const Box = styled.div`
  margin-left:1rem;
`
export const Wrapper = styled.div`
  display:flex;
  margin:.4rem 0;
  align-items:center;
`
export const Alert = styled.div`
   color:blue;
   padding:.5rem;
   font-size:10px;
   background:white;
   color:black;
   @media screen and (min-width:700px){
    font-size: 16px;
   }
`

export const Main = styled.div`
  
 padding:.5rem;
  
  
`

export const Time = styled.div`
color:gray;
  font-size:11px;
`

export const Name = styled.div`
  color:gray;
  font-size:11px;
`
export const Span = styled.div`
  margin-left:.5rem;
  font-size:10px;
`

export const Text = styled.div`
 margin:.5rem 0;
`
export const Icon = styled.div`
  display:flex;
  margin-top:1rem;
  align-items:center;
`
export const Dot = styled.div`
  margin:0 .3rem;
  font-weight:700;
  color:gray;
`
export const H3 = styled.h3`
  
`
export const Inner = styled.span`
  color:blue;
`
export const Form = styled.form`
  color:blue;
  position:sticky;
  bottom:0;
  background:#222831;
  color:white;
  display:flex;
  align-items:center;
  padding:.5rem;
  left:0;
  right:0;
`
export const Input = styled.input`
  color:blue;
  margin-left:.7rem;
  width:85%;
  padding:.8rem .5rem;
  border-radius:7px;
  border:none;
  background:black;
  color:white;
  
  &::placeholder{
  color:rgba(255,255,255,.8);;
  }
`
export const ProfileImg = styled.img`
  color:blue;
  width:25px;
  height:25px;
  border-radius:50%;
`