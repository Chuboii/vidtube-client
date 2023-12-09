import {styled} from "styled-components"

export const Container = styled.div`
  margin-top:.8em;
  display:flex;
  justify-content: space-between;
`
export const Box = styled.div`
  text-align:center;
  padding-bottom:1.5rem;
  text-transform:uppercase;
  width:100%;
  border-bottom:${({b}) => b};
  
`