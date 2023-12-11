import styled from 'styled-components'

export const Form = styled.form`
padding: 0.5rem;
margin-top: 5rem;
@media screen and (min-width: 768px) {
    display:none;
}
`

export const Input = styled.input`
 border: 1px solid white;
 background: transparent;
 color: white;
 padding:.8rem ;
 width: 100%;
 border-radius: 30px;
 `
export const NotFound = styled.h2`
   position: absolute;
   top: 9rem;
   left: 50%;
   width: 100%;
   transform:translateX(-50%);
   text-align: center;
   font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

   @media screen and (min-width: 768px) {
    display: flex;
    justify-content:center;
     text-align: center;
   }
 `