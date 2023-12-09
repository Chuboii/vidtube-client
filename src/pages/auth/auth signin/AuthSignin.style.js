import styled from "styled-components";

export const Container = styled.div`
   position: absolute;
    left: 50%;
    top: 50%;
    color: white;
   transform: translate(-50%, -50%) ;
   background-color: black;
   padding: 2rem;
   border-radius: 10px;
   display: flex;
   flex-direction: column;
   align-items: center;
   z-index: 1000;
`

export const Wrapper = styled.div`
   display: flex;
   align-items: center;
   margin: .5rem 0;
   background-color: rgba(255, 255, 255, 0.3);
   padding:.7rem 1rem;
   border-radius:40px;
   width: 250px;
   cursor: pointer;

`

export const Text = styled.div`
display: flex;
  margin-left: 1rem;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  
`

export const Span = styled.div`

`

export const Icon = styled.div`

`

export const H2 = styled.h2`
    text-align: center;
    margin-bottom: 2rem;
    width: 400px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 35px;
`
export const Link = styled.div`
  margin-left: .5rem;
`
export const Box = styled.div`
  position: absolute;
  inset: 0 0 0 0;
  z-index: 1000;
  background-color: black;
`
