import styled from "styled-components";

export const Container = styled.div`
  display:grid;
margin-left: 2rem;
margin-bottom: 1rem;

@media screen and (max-width: 768px){
    grid-template-columns: 1fr;

}
@media screen and (min-width: 768px) and (max-width:1200px){
    grid-template-columns: 1fr 1fr;
    width:100%;
}
@media screen and (min-width: 1200px){
    grid-template-columns: 1fr 1fr 1fr;
}

`

export const Text = styled.div`
     width:100%;
   height: 20px;
   background-color: white;
   margin:.5rem 0;
   border-radius:3px;
   &:last-child{
    width:50%;
   }

   animation:wave 2s infinite ease-in-out;
 
 @keyframes wave {
   0%{
      background:gray;
   }
   50%{
      background:white;
   }
   100%{
      background:gray;
   }
 }
`

export const Wrapper = styled.div`
  margin:.5rem;
  max-width:400px;
  width:380px;

  @media screen and (max-width: 768px){
    width:90%;
}

@media screen and (min-width: 768px) and (max-width:1200px){
    width:300px;
}
`

export const Rect = styled.div`
   width:100%;
   height: 150px;
   background-color: white;
   animation:wave 2s infinite ease-in-out;
 
   @keyframes wave {
     0%{
        background:gray;
     }
     50%{
        background:white;
     }
     100%{
        background:gray;
     }
   }
   
`

