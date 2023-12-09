import {styled} from "styled-components"

export const Container = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  flex-wrap: wrap;
margin-top: 1rem;

`

export const Button = styled.button`
  width:300px;
  padding:1rem;
  border-radius:30px;
  border:none;
  width: 200px;
  margin-right: 1rem;
  &:last-child{
    margin-top: .5rem;
  }


  @media (min-width:700px){
    padding: 1rem 0;
    margin-right: 1rem;
    font-size: 16px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    cursor: pointer;
  }
`

