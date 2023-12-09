import styled from "styled-components"

export const Footer = styled.div`
@media screen and (max-width:768px){
   position:fixed;
   bottom:0;
   background:white;
   width:100%;
   left:0;
   display: grid;
   justify-content:space-between;
   padding:.4rem 1rem;
   background: black;
   color: white;
   grid-template-columns:1fr 1fr 1fr 1fr 1fr;
}

@media screen and (min-width:768px){
  display:none;
}
`

export const Box = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    font-size:10px;
   
`
export const Paragraph = styled.p`
   margin-top:.3rem;
`