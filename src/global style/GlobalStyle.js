import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
  padding: 0;
  margin: 0;
  outline: none;
  box-sizing: border-box;
  transition:all .5s;
}
body{
  background-color: rgba(0,0,0,.95);
  overflow:${({ overflow }) => overflow};
  overflow-x: hidden;
}
`


export default GlobalStyles