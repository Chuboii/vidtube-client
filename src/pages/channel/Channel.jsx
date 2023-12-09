import "./Channel.style";
import ChannelHeader from "../../components/channel header/ChannelHeader";
import { Container } from "../channel/Channel.style";
import ChannelInfo from "../../components/channel info/ChannelInfo";
import ChannelHome from "../channel home/ChannelHome";
import HomeHeader from "../../components/home header/HomeHeader";
import { useEffect, useState } from "react";
import ChannelLinkHolder from "../../components/channel link holder/ChannelLinkHolder";
import { Outlet } from "react-router-dom";

export default function Channel() {
  const [removeHomeHeader, setRemoveHomeHeader] = useState(true);

  useEffect(() => {
    const resizeFunc = () => {
      const windowWidth = window.innerWidth;

      if (windowWidth < 700) {
        setRemoveHomeHeader(false);
      } else {
        setRemoveHomeHeader(true);
      }
    };

    window.addEventListener("resize", resizeFunc);
  }, [removeHomeHeader]);

  return (
    <>
      <Container>
        {removeHomeHeader && <HomeHeader />}
        <ChannelHeader />
        <ChannelInfo />
        <ChannelLinkHolder />
       {location.pathname === '/channel' ?  <ChannelHome/> : ""}
      </Container>
    </>
  );
}
