import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  padding: .5rem;
  display: flex;
  flex-direction: column;
  justify-content:center;

  @media screen and (min-width:700px){
    overflow:hidden;

  }

  @media screen and (max-width:700px){
    width: 100%;
  }

`

export const ThumbnailBox = styled.div`


   @media screen and (min-width:700px){
   display: flex;
   justify-content: space-between;
    cursor: pointer;
    margin-bottom: 1.5rem;

    &:hover{
        opacity: .5;
    }
 
   }
@media screen and (max-width:700px){
    width: 100%;
   
   color: white;
   border-radius: 10px;
   margin-bottom:1rem;
}

`
export const ImageBox = styled.div`
   width: 60%;
   height: 150px;
   position:relative;
   @media screen and (max-width:700px){
    width: 100%;
position: relative;
height: 250px;
    
 }
`
export const Img = styled.img`
width: 100%;
height: 100%;
  object-fit: cover;
  object-position: top;
@media screen and (max-width:700px){
    padding:0 1rem; 
}
  
  @media screen and (min-width:700px){
    border-radius: 10px;

 }
`

export const Description = styled.div`
@media screen and (min-width:700px){
    display: flex;
width: 50%;
flex-wrap: wrap;
padding: 1rem .7rem;
}

@media screen and (max-width:700px) {
    display: flex;

padding: 1rem .7rem;
}
  
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
   color: white;
   font-weight:500;

   @media screen and (min-width:700px){
 width:150px;
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