import {
  Container,
  Header,
  Logo,
  Wrapper,
  WrapperBtn,
  Text,
  Box,
  Icon,
  SigninButton,
  BtnText,
} from "./DesktopNav.style";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import MovieCreationOutlinedIcon from "@mui/icons-material/MovieCreationOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import BugReportOutlinedIcon from "@mui/icons-material/BugReportOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import NightlightRoundOutlinedIcon from "@mui/icons-material/NightlightRoundOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TerminalOutlinedIcon from "@mui/icons-material/TerminalOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const linkStyles = {
  color: "white",
  textDecoration: "none",
  marginLeft: "1rem",
};

function DesktopNav() {
    const [tagUrl, setTagUrl] = useState("");
    const dispatch = useDispatch()
    const toggleMobileMenu = useSelector((state) => state.toggle.navToggled)
  const navigate = useNavigate()
  const currentUser = useSelector((state) => state.user.currentUser)

  useEffect(() => {
    const tags = document.querySelectorAll(".tag");

    tags.forEach((tag) => {
      tag.addEventListener("click", () => {
          setTagUrl(tag.innerText.toLowerCase());
          dispatch({type:"TOGGLE_NAVBAR", payload:false})
      });
    });
  });


  return (
    <Container w={toggleMobileMenu ? "25%" : "55px"}>
      {toggleMobileMenu && (
        <Header>
          <Logo>
            <YouTubeIcon sx={{ marginRight: ".5rem" }} />
            <Text>Vidtube</Text>
          </Logo>
          {toggleMobileMenu ? (
                      <CloseOutlinedIcon onClick={() => dispatch({ type: "TOGGLE_NAVBAR", payload: false })} />
          ) : (
            <MenuIcon
              sx={{ cursor: "pointer" }}
              onClick={() => {
                dispatch({type:"TOGGLE_NAVBAR", payload:true})
              }}
            />
          )}
        </Header>
      )}
      {toggleMobileMenu ? (
        ""
      ) : (
        <MenuIcon
          sx={{ cursor: "pointer" }}
          onClick={() => {
            dispatch({type:"TOGGLE_NAVBAR", payload:true})
          }}
        />
      )}

      <Wrapper>
        <Box>
          <Icon>
            <HomeIcon />
          </Icon>
          <Link to={"/"} style={linkStyles}>
            Home
          </Link>
        </Box>

        <Box>
          <Icon>
            <ExploreOutlinedIcon />
          </Icon>
          <Link to={"/"} style={linkStyles}>
            Explore
          </Link>
        </Box>

        <Box>
          <Icon>
            <SubscriptionsOutlinedIcon />
          </Icon>
          <Link to={"/subscriptions"} style={linkStyles}>
            Subscriptions
          </Link>
        </Box>
      </Wrapper>

      <Wrapper>
        <Box>
          <Icon>
            <VideoLibraryOutlinedIcon />
          </Icon>
          <Text>Library</Text>
        </Box>
      </Wrapper>

      
      {
        currentUser ? "" :
        toggleMobileMenu && (
        <WrapperBtn>
          <Text>Sign in to like videos, comment and subscribe</Text>
          <SigninButton onClick={() => navigate("/signup")}>
            {" "}
            <AccountCircleOutlinedIcon /> <BtnText>Sign in</BtnText>
          </SigninButton>
        </WrapperBtn>
      )
      
      }
      
      <Wrapper>
        <Box>
          <Icon>
            <LibraryMusicOutlinedIcon />
          </Icon>
          <Link to={`category/${tagUrl}`} style={linkStyles} className="tag">
            Music
          </Link>
        </Box>

        <Box>
          <Icon>
            <SportsBasketballOutlinedIcon />
          </Icon>

          <Link to={`category/${tagUrl}`} style={linkStyles} className="tag">
            Sports
          </Link>
        </Box>

        <Box>
          <Icon>
            <MovieCreationOutlinedIcon />
          </Icon>
          <Link to={`category/${tagUrl}`} style={linkStyles} className="tag">
            Movies
          </Link>
        </Box>

        <Box>
          <Icon>
            <TerminalOutlinedIcon />
          </Icon>
          <Link to={`category/${tagUrl}`} style={linkStyles} className="tag">
            Programming
          </Link>
        </Box>
      </Wrapper>

      <Wrapper>
        <Box>
          <Icon>
            <SettingsOutlinedIcon />
          </Icon>
          <Text>Settings</Text>
        </Box>

        <Box>
          <Icon>
            <BugReportOutlinedIcon />
          </Icon>
          <Text>Report</Text>
        </Box>

        <Box>
          <Icon>
            <HelpOutlineOutlinedIcon />
          </Icon>
          <Text>Help</Text>
        </Box>

        <Box>
          <Icon>
            <NightlightRoundOutlinedIcon />
          </Icon>
          <Text>Light Mode</Text>
        </Box>
      </Wrapper>
    </Container>
  );
}

export default DesktopNav;
