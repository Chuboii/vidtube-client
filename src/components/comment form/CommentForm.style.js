import {styled} from "styled-components"

export const Container = styled.div`
   position:relative;
   position:fixed;
   bottom:0;
   width:100%;
   background:black;
   color:white;
   z-index:11;
   font-size:12px;
   overflow-y:scroll;
   max-height:300px;
   transition:all .5s;
   padding:1rem;
   
   @media screen and (min-width:700px) {
    width: 65%;
    font-size: 18px;
   }
`

export const Span = styled.h4`
  margin:.5rem 0;
`
export const Wrapper = styled.div`
  margin-top:1rem;
  display:flex;
  align-items:center;
  justify-content:space-between;
`

export const Box = styled.div`
display:flex;

`

export const Profile = styled.div`
margin-left:.5rem;
text-transform:capitalize;
`

export const Name = styled.div`
  margin-bottom:.4rem;
`

export const Username = styled.div`
  text-transform:lowercase;
`
export const Form = styled.div`
 display:flex;
 align-items:center;
 margin-top:1rem;
`
export const Input = styled.input`
  border:2px solid white;
  background:black;
  color:white;
  padding:.8rem .5rem;
  width:90%;
  border-radius:7px;
  margin-right:1rem;
`
export const Emojis = styled.div`
 display:flex;
 justify-content:space-between;
 padding:.5rem 0;
 border-top:1px solid rgba(255,255,255,.3);
`
export const Emo = styled.div`
  
  font-size:20px;
`
export const Inner = styled.span`
   color:lightblue;
`
export const Terms = styled.div`
 font-size:11px;
 margin-top:2rem;
 margin-bottom:1rem;

 @media screen and (min-width:700px) {
    
    font-size: 18px;
   }
`
export const Image = styled.img`
  width:40px;
  height:40px;
  border-radius:50%;
  
`
export const Header = styled.header`
  display:flex;
  justify-content: space-between;
  align-items: center;
`
