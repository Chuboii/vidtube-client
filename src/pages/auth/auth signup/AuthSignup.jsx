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
import axiosBase from "axios";

const axios = axiosBase.create({
  baseURL: "http://localhost:8080/api/",
});

function Auth() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const googleBtn = async () => {
    dispatch({ type: "LOADING", payload: true });
    try {
      const { user } = await signInWitGoogle();

      const res = await axios.post("auth/google", {
        name: user.displayName,
        email: user.email,
        img: user.photoURL,
      });

      dispatch({ type: "GET_USER_DATA", payload: res.data });
      dispatch({ type: "LOADING", payload: false });

      navigate("/");
      
    } catch (e) {
      dispatch({ type: "ERROR", payload: e });
    }
  };

  return (
    <>
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
