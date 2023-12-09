import styled from "styled-components";

export const Header = styled.header`
    display:flex;
  background:black;
    color: white;
    padding: .7rem 1rem;
    position:fixed;
    top: ${({position}) => position};
    left: 0;
   right: 0;
   z-index: 6000;
   display: flex;
   flex-direction: column;
   transition:all .5s;
   
   @media screen  and (min-width:700px){
    top: 0;
    display:flex;
   }
     
 `
 
export const Logo = styled.div`
color:red;
display: flex;
align-items: center;
    @media screen and (min-width:768px){
  margin-left: 1.5rem;
      
    }
`

export const H3 = styled.h3`
   margin-left: .5rem;
   @media screen and (max-width: 700px;){
    display: none;
   }
`
export const Form = styled.form`
   display: flex;
   align-items: center;
   max-width: 600px;
   width: 50%;
position: relative;
`
export const Input = styled.input`
    padding:.8rem .5rem;
    color: white;
    width: 100%;
    border-radius: 30px;
    border: 1px solid #fff;
    background-color: transparent;
    
    &::placeholder{
        font-size: 17px;
    }
    
 @media screen and (max-width:768px){
      display:none;
    }
`

export const SearchBtn = styled.div`
   position: absolute;
   right: 40px;
   background-color: ;
    display: block;
   @media screen and (max-width:768px){
     display: none;

   }
   
`


export const SearchBtnMobile = styled.div`
  display: none;
   @media screen and (max-width:768px){
     display: block;
    margin-right: 1rem;
   }

   `

export const MenuBar = styled.div`
    @media screen and (max-width:768px){
      display:none;
    }
`
export const SigninBtn = styled.div`

        display: flex;
        border: 1px solid gray;
        padding: .3rem .5rem;
        border-radius: 30px;
        align-items: center;
        cursor: pointer;
        &:hover{
           opacity: .5;
        }
        @media screen and (max-width:700px) {
          width: 100px;
        }
    

    
`
export const DesktopVert = styled.div`
    margin-right: .5rem;
    @media screen and (max-width:768px){

      display:none;
    }
`

export const MobileVert = styled.div`
@media screen and (min-width:768px){
    display:none;
}
    @media screen and (max-width:768px){
      width:30px;
    height:30px;
    border-radius:50%;
    display:flex;
    justify-content:center;
    align-items:center;
    }
`
export const Img = styled.div`
     width:100%;
     height:100%;
     object-fit:cover;
    
`

export const ThirdPart = styled.div`
  display:flex;
  align-items:center;
    @media screen and (max-width:768px){

    }
`

export const FirstPart = styled.div`
    @media screen and (min-width:768px){
   display:flex;
   align-items: center;
}
    @media screen and (max-width:768px){

      
    }
`

export const Container = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
`

export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
  @media screen and (min-width: 700px) {
    cursor: pointer;
  }
`

export const Icon = styled.div`
   margin-right: .5rem;
`

export const DesktopVideo = styled.div`
   @media screen and (max-width: 768px) {
    display: none;
   }
   display: block;
   margin-right: 1.5rem;
   cursor:pointer;
`