import styled from "styled-components";

export const Container = styled.div`
    overflow-x: hidden;
    display: grid;
    margin-top:5rem ;
   color: white;
@media screen and (max-width:700px){
    grid-template-columns: 1fr; 
 
}

@media screen and (min-width:700px) and (max-width:1165px){
    grid-template-columns: 1fr 1fr; 

    padding-left: 3rem;

}

@media screen and (min-width:1165px) {
  padding-left:3rem;
  
    grid-template-columns: 1fr 1fr 1fr; 
}
`
