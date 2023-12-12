import {Container ,H2, Wrapper,Box, Icon, Text, Span} from './AuthSignin.style'
import GoogleIcon from '@mui/icons-material/Google';
import EmailIcon from '@mui/icons-material/Email';
import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import { signInWitGoogle } from '../../../utils/firebase/firebase';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {
    ToastContainer,
    toast
  } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Loader from '../../../components/loader/Loader';

  
function AuthSignin() {
    const navigate = useNavigate()
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const dispatch = useDispatch()

    const googleBtn = async () => {
        setIsLoggedIn(true)
    
        try {
          const { user } = await signInWitGoogle();
    
          const res = await axios.post("https://vidtube-l48b.onrender.com/api/auth/google", {
            name: user.displayName,
            email: user.email,
            img: user.photoURL,
          }, {
            withCredentials:true
          });
    
          dispatch({ type: "GET_USER_DATA", payload: res.data });
          dispatch({ type: "LOADING", payload: false });
    
          setIsLoggedIn(false)
    
          toast.success('Sucesss!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          })
    
          setTimeout(() => {
            navigate("/");
          }, 2000)
          
        } catch (e) {
          setIsLoggedIn(false)
         
          if (e.code === "auth/popup-closed-by-user") {
            toast.error('Connection timeout!', {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            }); 
          }
        }
      };
    return (
        <>
            <ToastContainer />
            {isLoggedIn && <Loader/>}
            <Box>
             
      <Container>
                    <H2>Welcome Back to Vidtube</H2>
                    
          <Wrapper onClick={googleBtn}>
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