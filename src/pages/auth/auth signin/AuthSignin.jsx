import {Container ,H2, Wrapper,Box, Icon, Text, Span} from './AuthSignin.style'
import GoogleIcon from '@mui/icons-material/Google';
import EmailIcon from '@mui/icons-material/Email';
import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'

function AuthSignin() {
    const navigate = useNavigate()


    return (
        <>
            
            <Box>
             
      <Container>
                    <H2>Welcome Back to Vidtube</H2>
                    
          <Wrapper>
              <Icon> <GoogleIcon/> </Icon>
              <Text>Sign in with Google</Text>
          </Wrapper>
          
          <Wrapper onClick={() => navigate("/signin/email")}>
              <Icon><EmailIcon/>  </Icon>
              <Text>Sign in with Email </Text>
        </Wrapper>

          <Span>
              <Text style={{marginTop:"3rem"}}>{`Don't`} have an account? <Link to={'/signup'} style={{marginLeft:".5rem",textDecoration:"none",color:"red"}}>Sign up</Link></Text>
          </Span>
    </Container> 
                </Box>
      </>
  )
}

export default AuthSignin