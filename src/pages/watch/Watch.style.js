import styled from "styled-components";

export const Container = styled.div`
      display: flex;
      margin-top: 5rem;
      overflow-y: scroll;
      @media screen and (max-width:768px){
   display: flex;
   flex-direction: column;
   margin-top:3.3rem;

   
  }


`

export const FirstPart = styled.div`
 

  

  @media screen and (min-width:768px){
        /* height: 100dvh; */
        width: 70%;
  padding: 1rem;
  padding-left: 4rem;
      }
  @media screen and (max-width:768px){
    width: 100%;
    padding:0;
    

  }
`

export const SecondPart = styled.div`
@media screen and (min-width: 768px){
  width: 30%;
   height: 100dvh;

}
   
    @media screen and (max-width:768px){
    width: 100%;
  }
`
