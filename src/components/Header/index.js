import React from "react";
import { HeaderWrapper, LogoWrapper } from "./styled";
import { Logo, Search } from "../ui/Icons";
import { SubTitle } from "../ui/Typography";
import IconButton from "../ui/IconButton";
import { ContentWrapper } from "Layout";
import { Link } from "react-router-dom";

function Header() {
  return (
    <HeaderWrapper>
      <ContentWrapper display="flex" items="center" content="space-between">
        <Link to="/">
          <LogoWrapper>
            <Logo />
            <SubTitle>AcMusic</SubTitle>
          </LogoWrapper>
        </Link>
        <Link to="/search">
          <IconButton withBackground height={58} width={58}>
            <Search />
          </IconButton>
        </Link>
      </ContentWrapper>
    </HeaderWrapper>
  );
}

export default Header;
