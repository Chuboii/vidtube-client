import styled from "styled-components";

export const Container = styled.div`
@media screen and (max-width:700px){
    display: none;
}
  color: white;
  position: fixed;
  inset: 0 0 0 0;
  width: ${({w}) => w};
  background-color:black;
  z-index: 7000;
  padding: 1rem;
overflow: hidden;

    
`

export const Header = styled.header`
 display:flex ;
 justify-content: space-between;
 margin-bottom:.5rem;
 
`

export const Icon = styled.div`

`

export const Wrapper = styled.div`
  
    border-bottom: 1px solid rgba(255, 255, 255,.15);
    padding:.5rem 0;
    `

export const Box = styled.div`
  display: flex;
  align-items: center;
  margin:.6rem 0;
cursor: pointer;
  transition: none;
&:hover{
    color: red;
}
`

export const Text = styled.div`
  margin-left: 1rem;
`

export const WrapperBtn = styled.div`
  width: 230px;
  margin:.5rem 0;
`

export const SigninButton = styled.button`
  display: flex;
  align-items: center;
  border: 1px solid blue;
  color: blue;
  background-color: transparent;
  width: 100px;
  display:flex ;
  justify-content: center;
  align-items: center;
  padding: .3rem;
  margin-top: .5rem;
  cursor: pointer;
  border-radius: 5px;
  font-size: 14px;
`

export const BtnText = styled.div`
  text-transform: uppercase;
margin-left: .5rem;
`

export const H2 = styled.div`
  
    
`

export const Logo = styled.div`
  display: flex;
  font-size: 20px;
  color: red;
  align-items: center;   
`

