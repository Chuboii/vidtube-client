import styled from "styled-components";

export const Container = styled.div`
position: fixed;
top: 0;
right: ${({r}) => r};
background-color: #222831;
color: white;
padding:.5rem 1rem;
width: 350px;
overflow-y:scroll ;
max-width: 400px;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
z-index: 66000;
height:100dvh;
transition:all .5s;

@media screen and (max-width: 768px) {

    width: 90%;
    
}
`

export const Wrapper = styled.div`
display: flex;
 justify-content: space-between;
align-items: center;
border-bottom: 1px solid rgba(0, 0, 0, .4);
padding: 1rem 0;
cursor: pointer;


&:hover{
    color: red;
}
&:last-child{
    
border-bottom:none;
}
`
export const Box = styled.div`
width: 90%;
`
export const Text = styled.div`
  display: flex;
`
export const Image = styled.div`
  width: 40px;
  height:40px;
  margin-right: 1rem;
  margin-bottom: 2rem;
`
export const Img = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
border-radius: 50%;
`
export const Wrap = styled.h4`
    margin-top: 1rem;
`

export const Span = styled.span`
   margin-right: .5rem;
   display: flex;
`

export const Icon = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
  margin-bottom: 2rem;
  cursor: pointer;
`

export const Header = styled.header`
  display:flex;
  padding:1rem 0;
`

export const H2 = styled.h2`
  margin-left: 2rem;
`

export const VideoName = styled.h1`
      font-weight: 900;
      font-size: 17px;
`

export const VideoText = styled.div`
   display: flex;
   margin-top: .4rem;
`

export const Video = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-left: .5rem;
`

export const Time = styled.div`
  color:gray;
  margin-top: .2rem;
`