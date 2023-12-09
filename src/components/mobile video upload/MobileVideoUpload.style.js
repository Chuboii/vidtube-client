import styled from 'styled-components'

export const Container = styled.div`
color: white;
position: fixed;
transform: translate(-50%, -50%);
left: 50%;
top: 50%;
width: 90%;
background-color: #222831;
border-radius: 10px;
padding: 1rem;
z-index:1200;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
z-index: 7000;
@media screen and (min-width:768px) {
    display: none;
}

`

export const Wrapper = styled.div`
 margin-bottom:1rem;
`


export const WrapVideo = styled.div`
  position: relative;
  border: 1px solid rgba(255, 255, 255,.2);
  padding: 1.1rem;
  top: .5rem;
`
export const WrapImage = styled.div`
  position: relative;
  border: 1px solid rgba(255, 255, 255,.2);
  padding: 1.1rem;
  top: .5rem;
`

export const Text = styled.div`

`
export const H2 = styled.h2`
text-align: center;
margin-top: .5rem;
margin-bottom: 1.5rem;
`
export const Span = styled.div`
   position: absolute;
   top: .5rem;
   display: ${({d}) => d};
`
export const SpanImage = styled.div`
   position: absolute;
   top: .5rem;
   display: ${({d}) => d};
`

export const Button = styled.button`
   width: 100%;
   border-radius: 5px;
   border: none;
   padding: 1rem .5rem;
   margin-top: 2rem;
   opacity:1;
   cursor: pointer;
`
export const Textarea = styled.textarea`
width: 100%;
background: transparent;
padding:.8rem;
color: white;
border-radius: 5px;
`
export const Input = styled.input`
 margin-top: .5rem;
 width: 100%;
 position: relative;
 color: white;
 font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
 bottom: .2rem;
 padding: .9rem;
 cursor: pointer;
 border-radius:5px;
 background-color:transparent;
 border: 1px solid rgba(255, 255, 255,.2);
  display: ${({d}) => d};
 &[type="file"]{
    border: none;
    padding:0;
 }
`
export const InputImage  = styled.input`
 margin-top: .5rem;
 width: 100%;
 position: relative;
 color: white;
 font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
 bottom: .2rem;
 padding: .9rem;
 cursor: pointer;
 border-radius:5px;
 background-color:transparent;
 border: 1px solid rgba(255, 255, 255,.2);
  display: ${({d}) => d};
 &[type="file"]{
    border: none;
    padding:0;
 }
`

export const Icon = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
  cursor: pointer;
`
export const Tag = styled.span`
 background:black;
 color: white;
 padding:.3rem .7rem;
 margin-bottom: 1rem;
 margin-right: .5rem;
 border-radius: 30px;
 display: flex;
 justify-content:center;
 align-items:center;
`

export const Box = styled.div`
  margin-bottom:.8rem;
  display: flex;
  flex-wrap: wrap;
`