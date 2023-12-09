import {styled} from "styled-components"

export const Container = styled.div`
    position:fixed;
    top:1rem;
    right: 4rem;

    background:#222831;
    transition:all .5s;
    width:300px;
    border-radius: 10px;
    color:white;
    z-index:8000;
`
export const Header = styled.div`
  display:flex;
  
  padding: 1rem;
`
export const Box = styled.div`
display:flex;
  align-items:center;
  justify-content: space-between;
  padding:1rem ;
  border-bottom:1px solid rgba(255,255,255,.1);
&:hover{
  color: red;
}
`

export const Span = styled.div`
   margin-left:1.5rem;
   font-size:15px;
   
  font-size: 18px;
`

export const Wrapper = styled.div`
  margin-left: 1rem;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`
export const Name = styled.h4`
font-size: 19px;
`

export const Username = styled.div`
  margin-bottom: .5rem;
  margin-top: .3rem;
`
export const Wrap = styled.div`
  margin-bottom: .5rem;
  display: flex;
  align-items: center;
  
`

