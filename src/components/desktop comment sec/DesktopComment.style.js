import styled from "styled-components";

export const Container = styled.div`
 padding:1rem;
 z-index: 5300;
color: white;
margin-top: 3rem;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
@media screen and (max-width:768px){
    display: none;
}
`
export const Header = styled.div`

`
export const H2 = styled.h2`

`
export const Form = styled.form`
margin-top: 1rem;
display: flex;
align-items: center;
`
export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 1rem;

`
export const Input = styled.input`
  width: 100%;  
  padding: 1rem;
  background: transparent;
  border: none;
  color: white;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
`
export const Main = styled.div`

`
export const Wrapper = styled.div`
  margin-top: 2rem;
  display: flex;

`
export const ImageBox = styled.div`
width: 40px;
height: 40px;
margin-right: 1rem;
`
export const Img = styled.img`
width: 100%;
height: 100%;
border-radius:50% ;
`
export const Span = styled.div`
  display: flex;
`
export const Box = styled.div`

`
export const Username = styled.div`
 margin-right: .5rem;
 font-weight: 700;
`

export const Comment = styled.div`
  margin-top: .5rem;
`
export const Time = styled.div`

`

export const Button = styled.button`
 background-color:transparent;
 color:white;
 border:none;
`