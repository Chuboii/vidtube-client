import styled from "styled-components";

export const Container = styled.div`
    background-color: black;
    @media screen and (max-width: 700px){
      display: flex;
     padding: .7rem 1rem;
      margin-top:4rem;
     padding-left: 1.5rem;
     overflow-x:scroll;
   }

     @media screen and (min-width: 700px){
      display: flex;
     padding: .6rem 1rem;
      margin-top:4rem;
     padding-left: 1.5rem;
      overflow: none;
      padding-left: 4rem;
      
   }
`

export const Tag = styled.a`
   background:rgba(255,255,255,0.2);
   margin-right:.5rem;
   color: white;
   display:flex;
   align-items:center;
   text-decoration: none;
   justify-content:center;
   font-size:13px;
   text-align:center;
   box-sizing:border-box;
   border-radius:7px;
   padding:.2rem .5rem;
   &:hover{
      color: red;
   }
   @media screen and (min-width: 700px){
      font-size: 17px;
   padding:.6rem .5rem;
   cursor:pointer;
   }
`