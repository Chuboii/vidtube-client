import {styled} from "styled-components"

export const Container = styled.div`
color:white;
background:rgba(0,0,0,.97);
position:fixed;
bottom:${({display})=> display};
z-index:3000;
width:100%;
padding:1.5rem;
transition:all .5s;
border-top-left-radius:30px;
border-top-right-radius:30px;

@media screen and (min-width: 768px) {
   display:none;
}
`

export const Header = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
`
export const Box = styled.div`
display:flex;
align-items:center;
margin:2rem 0;
position:relative;
`
export const Span = styled.div`
  margin-left:1rem;
`
export const H4 = styled.div`

`

export const Icon = styled.div`
   background:white;
   color:black;
   width:40px;
   height:40px;
   display:flex;
align-items:center;
justify-content:center;
   border-radius:50%;
`

export const Input = styled.input`
width:100%;
position:absolute;
opacity:0;
`