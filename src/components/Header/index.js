import React from "react";
import { HeaderWrapper, LogoWrapper } from "./styled";
import { Logo, Search } from "../ui/Icons";
import { SubTitle } from "../ui/Typography";
import IconButton from "../ui/IconButton";
import { ContentWrapper } from "Layout";

function Header() {
  return (
    <HeaderWrapper>
      <ContentWrapper display="flex" items="center" content="space-between">
        <LogoWrapper>
          <Logo />
          <SubTitle>AcMusic</SubTitle>
        </LogoWrapper>
        <IconButton withBackground height={58} width={58}>
          <Search />
        </IconButton>
      </ContentWrapper>
    </HeaderWrapper>
  );
}

export default Header;
