import styled from "styled-components";

export const Container = styled.div`
 z-index: 12;
 background-color: black;

  @media screen and (max-width:768px){
    width:100%;
    position: fixed;
    top:0;
    margin-top: 2rem;

  }
  @media screen and (min-width: 768px){
    width: 100%;
    position:relative;
    top: 1rem;
  }

`


export const VideoTag = styled.div`
   
   height: 450px;


   @media screen and (max-width: 768px){
    width: 100%;
    height: 250px;
   }
`