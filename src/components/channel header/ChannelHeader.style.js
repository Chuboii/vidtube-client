import {styled} from "styled-components"

export const Header = styled.header`
 color:white;
 display:flex;
 justify-content: space-between;
 padding:1rem;
 font-size:14px;
 align-items: center;
 @media screen and (min-width: 700px){
   display: none;
 }
`

export const Wrapper = styled.div`
 display:flex;
 align-items: center;
`

export const Text = styled.div`
   margin-left:2rem;
`
export const Icons = styled.div`
display:flex;
   align-items: center;
`
