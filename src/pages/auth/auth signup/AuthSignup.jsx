import {
  Container,
  Box,
  H2,
  Wrapper,
  Icon,
  Text,
  Span,
} from "./AuthSignup.style";
import GoogleIcon from "@mui/icons-material/Google";
import EmailIcon from "@mui/icons-material/Email";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signInWitGoogle } from "../../../utils/firebase/firebase";
import axios from "axios";
import Loader from "../../../components/loader/Loader";
import {
  ToastContainer,
  toast
} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Auth() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // https://vidtube-l48b.onrender.com
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
      {isLoggedIn && <Loader />}
      <ToastContainer/>
      <Box>
        <Container>
          <H2>Join Vidtube</H2>
          <Wrapper onClick={googleBtn}>
            <Icon>
              {" "}
              <GoogleIcon />{" "}
            </Icon>
            <Text>Sign up with Google</Text>
          </Wrapper>

          <Wrapper onClick={() => navigate("/signup/email")}>
            <Icon>
              <EmailIcon />{" "}
            </Icon>
            <Text>Sign up with Email </Text>
          </Wrapper>

          <Span>
            <Text style={{ marginTop: "3rem" }}>
              Already have an account?{" "}
              <Link
                to={"/signin"}
                style={{
                  textDecoration: "none",
                  color: "red",
                  marginLeft: ".5rem",
                }}
              >
                Login
              </Link>
            </Text>
          </Span>
        </Container>
      </Box>
    </>
  );
}

export default Auth;
