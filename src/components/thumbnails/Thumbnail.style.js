import styled from "styled-components";


export const ThumbnailBox = styled.div`
   width: 100%;
   
   color: white;
   border-radius: 10px;
   margin-bottom:1rem;
   @media screen and (min-width:700px){

    cursor: pointer;
 
   }
@media screen and (max-width:700px){

}

`

export const Icon = styled.div`
  cursor: pointer;
  background-color: black;
  padding: .7rem;
  border-radius:50% ;
`
export const IconBox = styled.div`
  display:flex;
  position: absolute;
  top: 0;
  width: 90%;
  justify-content:space-between;
  align-items: center;
  padding: 1rem;
`
export const ImageBox = styled.div`
width: 100%;
position: relative;
height: 250px;
   @media screen and (min-width:700px){
    padding:0 1rem;    
    
 }
`
export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  
  @media screen and (min-width:700px){
    border-radius: 10px;
 }
`

export const Description = styled.div`
   display: flex;

padding: 1rem .7rem;
`

export const ProfilePhoto = styled.img`
width:40px;
height: 40px;
border-radius: 50%;
margin-right: 1rem;
`

export const PostDescript = styled.div`
   
`

export const Views = styled.div`
  margin-right: .5rem;
  
`
export const Title = styled.div`
   max-height: 64px;
   overflow: hidden;
   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
   word-wrap: break-word;
   font-weight:500;

   @media screen and (min-width:700px){
 width:280px;
 font-size:15px;
 line-height:19px;
 word-wrap: break-word;
 font-weight: 700;
   width: ${({w}) => w};

 }

@media screen and (max-width:700px){
 width:280px;
 font-size:13px;
 font-weight:500;
 line-height:19px;
 }
`

export const Name = styled.div`
   margin: .3rem 0;
   
   @media screen and (min-width:700px){
width: 100px;
font-size:14px;
   }
   color: gray;
   @media screen and (max-width:700px){
 font-size:13px;
 font-weight:500;
 line-height:19px;
 margin-right:.5rem;
 }

`

export const Time = styled.div`

`

export const MetaTags = styled.div`
   display: flex;
   color: gray;
   @media screen and (max-width:700px){
 width:280px;
 font-size:10px;
 font-weight:500;
 line-height:19px;
 display:flex;
 align-items: center;
 }
   @media screen and (min-width:700px){
 width:280px;
 display:flex;
 flex-direction:column;
 font-size:10px;
 font-weight:500;
 line-height:19px;
 
 }
`

export const VideoLength = styled.div`
   color: white;
   background-color: black;
   padding:.5rem;
   border-radius: 6px;
   position: absolute;
   right:.4rem;
   bottom: .5rem;
   font-size:13px;
 @media screen and (min-width:700px){
 position: absolute;
   right:.8rem;
   font-size:17px;
   bottom: 1rem;
   right: 1.6rem;
 }
`

export const Box = styled.div`
   @media screen and (min-width:700px){
    font-size: 15px;
    width: ;
   }
 display:flex;
`