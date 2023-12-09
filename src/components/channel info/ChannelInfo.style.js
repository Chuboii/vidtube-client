import {styled} from "styled-components"

export const Info = styled.div`
   display:flex;
   align-items:flex-start;
   justify-content:flex-start;
   padding:1rem;
   @media screen and (min-width: 700px) {
    margin-top: 5rem;
   }

   @media screen and (min-width:700px ){
     flex-direction: row;
     justify-content:flex-start;
     align-items: flex-start;

 }
`
export const Wrapper = styled.div`
  display:flex;
  color:gray;
  margin:.2rem 0;
   flex-direction: column;
  @media screen and (min-width:700px ){
   flex-direction:column;
   margin-left: 1rem;
  align-items: flex-start;
  justify-content: flex-start;
   
 }
`
export const Name = styled.div`
  margin:.5rem 0;
  margin-top:.8rem;
  font-weight:700;
  font-size:14px;

  
@media screen and (min-width:700px ){
  font-size: 35px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
 }
`
export const Username = styled.div`
margin:.2rem 0;
color:gray;
text-transform:lowercase;
font-size: 17px;

@media screen and (min-width:700px ){
  font-size: 20px;
 }
`
export const Image = styled.img`
 object-fit:cover;
 border-radius:50%;
width: 100px;
height: 100px;
margin-right: .5rem;
  @media screen and (min-width: 700px){
    width: 180px;
  height: 180px;
  }
 
`
export const Span = styled.div`
  margin-right:.5rem;
  font-size:10px;

`