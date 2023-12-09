import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
 display: flex;
 flex-direction: column;
 align-items:center;
 color: white;
 width: 100%;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: .5rem 0;
  width: 100%;
  &:last-child{
     position: relative;
   }
`

export const Input = styled.input`
   background-color: transparent;
   border: none;
   width: 100%;
   color:white;
   padding: .3rem 0;
   border-bottom: 1px solid rgba(255, 255, 255, .4);
   &:focus{
    padding: .7rem 0;
   }

`

export const Label = styled.label`
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`

export const Form = styled.form`
   width: 100%;
  padding:1rem;
  max-width: 600px;
`

export const Button = styled.button`
  background:red;
  padding: .9rem ;
  width: 200px;
position: relative;
left: 50%;
top: 1rem;
color: white;
border-radius: 10px;
cursor: pointer;
transform: translate(-50%);
border: none;
`


export const Text = styled.div`
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  margin-top:3rem;
  color: gray;
  cursor: pointer;
  &:hover{
    color: red;
  }
  `

export const Icon = styled.div`
     position: absolute;
     display: flex;
     align-items: center;
`

export const Avatar = styled.div`

`
export const File = styled.input`
  opacity: 0;
`