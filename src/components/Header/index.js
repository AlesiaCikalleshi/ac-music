import React from "react";
import { HeaderWrapper, LogoWrapper } from "./styled";
import { Logo, Search } from "../ui/Icons";
import { SubTitle } from "../ui/Typography";
import IconButton from "../ui/IconButton";

function Header() {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Logo />
        <SubTitle>AcMusic</SubTitle>
      </LogoWrapper>
      <IconButton withBackground height={58} width={58}>
        <Search />
      </IconButton>
    </HeaderWrapper>
  );
}

export default Header;
