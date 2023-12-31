import styled from 'styled-components'

export const Container = styled.div`
background-color: #222831;
color:white;
margin-top: 1rem;
border-radius: 10px;
width: 100%;
padding: 1rem;
`

export const Text = styled.div`
font-size: 17px;
margin-top:.4rem;

@media screen and (max-width:768px){
font-size:13px;
}
`
export const Tags = styled.div`
display: flex;
font-size:17px ;
align-items:center;
margin-right:.3rem;

@media screen and (max-width:768px){
font-size:13px;
}
`

export const Tag = styled.div`
margin-right: .5rem;
`