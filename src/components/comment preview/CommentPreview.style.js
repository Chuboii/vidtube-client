import {styled} from "styled-components"

export const Container = styled.div`  
   color:white;
   background: #222831;
   margin:1rem;
   padding:1rem;
   border-radius:10px;
   @media screen and (min-width:768px){
    margin-bottom:6rem ;
    font-size: 15px;
    display: none;
}
`

export const Header = styled.header`
  display:flex;
  align-items: center;
`

export const Text = styled.h4`
  margin-right:.5rem;
  font-size:14px;
  @media screen and (min-width:768px){
    font-size: 17px;
}
`
export const CommentNo = styled.div`
  font-size:12px;
  @media screen and (min-width:768px){
    font-size: 15px;
}
`
export const Main = styled.main`
 display:flex;
 align-items:center;
 justify-content:space-between;
 margin-top:.5rem;
`
export const Box = styled.div`
  display:flex;
  align-items:center;
  font-size:13px;
  @media screen and (min-width:768px){
    font-size: 15px;
} 
`
export const Image = styled.img`
   width:25px;
   height:25px;
   border-radius:50%;
   margin-right:1rem;
   @media screen and (min-width:768px){
    width:40px;
   height:40px;
}
`
export const Span = styled.div`


`