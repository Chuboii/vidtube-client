import styled from "styled-components";

export const Container = styled.div`
  color:white;
@media screen and (min-width:768px){
 margin-top:2rem ;
 font-size: 26px;
}
  @media screen and (max-width:768px){
    padding:1rem; 
    margin-top:15rem;
  }
`


export const Description = styled.div`

`

export const Tags = styled.div`
  font-size:11px;
  color:gray;
  margin:0 .3rem;
  @media screen and (min-width:768px){

 font-size: 16px;
}
`
export const More = styled.div`
 font-size:12px;
 @media screen and (min-width:768px){
 font-size: 16px;
}
`
export const FirstPart = styled.div`

`


export const Title = styled.div`
  
`

export const Views = styled.div`
  margin-right:.5rem;
  font-size:10px;
  color:gray;
  @media screen and (min-width:768px){
 font-size: 16px;
}
`

export const Time = styled.div`
  font-size:10px;
  color:gray;
  @media screen and (min-width:768px){
 font-size: 16px;
}
`

export const SecondPart = styled.div`


`


export const Img = styled.img`
  width:40px;
  height:40px;
  border-radius:50%;
  margin-right:.5rem;
  @media screen and (min-width:768px){
    width:50px;
  height:50px;
}
`

export const SubscriberCount = styled.div`
   color:gray;
   font-size:12px;
   @media screen and (min-width:768px){
 font-size: 15px
}
`
export const Box = styled.div`
    display:flex;
    align-items: center;
    margin-top:.3rem;
`

export const UserInfo = styled.div`
   display: flex;
   align-items: center;
   justify-content:space-between;
   margin-top:1.5rem;
`

export const Name = styled.div`
   margin-right:.5rem;
   font-size:14px;
   @media screen and (min-width:768px){
    font-size: 17px;
    font-weight: 700;
}
`

export const Span = styled.div`
  margin-left:.5rem;
`

export const Icons = styled.div`
display:flex;
align-items: center;
margin-top:1rem;
`

export const SubscribeButton = styled.div`
     background:white;
     color:black;
     padding:.5rem 1rem;
     border-radius:20px;
     font-size:14px;
     @media screen and (min-width:768px){

      font-size: 17px;
}
`


export const ShareButton = styled.div`
display:flex;
padding:.3rem .8rem;
background:#222831;
border-radius:20px;
  align-items:center;
  font-size:12px;
  @media screen and (min-width:768px){
    
    font-size: 16px;
}
`


export const LikeButton = styled.div`
display:flex;
padding:.3rem .8rem;
background:#222831;
border-radius:20px;
  align-items:center;
  font-size:12px;
  margin-right:.5rem;
  @media screen and (min-width:768px){
    
    font-size: 16px;
}
`


export const MoreButton = styled.div`
  display:flex;
  align-items:center;
`