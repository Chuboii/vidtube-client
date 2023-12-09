import styled from "styled-components";

export const Container = styled.div`
position: fixed;
top: 1rem;
right: 9rem;
background-color: #222831;
color: white;
padding:.5rem 1rem;
border-radius: 10px;
max-height: 500px;
overflow-y:scroll ;
max-width: 400px;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
z-index: 66000;

@media screen and (max-width: 768px) {
    right: 3rem;
    width: 300px;
    
}
`

export const Wrapper = styled.div`
display: flex;
align-items: center;
border-bottom: 1px solid rgba(0, 0, 0, .4);
padding: 1.5rem 0;
padding-bottom:.7rem;
cursor: pointer;
justify-content: space-between;
&:hover{
    color: red;
}
&:last-child{
    
border-bottom:none;
}
`
export const Box = styled.div`

`
export const Text = styled.div`
  display: flex;
`
export const Image = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 1rem;
  margin-top: 1rem;
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