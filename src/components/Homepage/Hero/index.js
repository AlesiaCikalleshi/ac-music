import React from "react";
import DesktopRadioImage from "assets/icons/images/radio-desktop.png";
import { Wrapper, TextWrapper, PlayButton, HeroText } from "./styled";
import { MainTitle, ButtonText } from "components/ui/Typography";
import { Play } from "components/ui/Icons";

function Hero() {
  return (
    <Wrapper>
      <TextWrapper>
        <MainTitle>Radio</MainTitle>
        <HeroText>Pick your todays mood. We will play a perfect mix!</HeroText>
        <PlayButton>
          <Play />
          <ButtonText>Play</ButtonText>
        </PlayButton>
      </TextWrapper>
      <img src={DesktopRadioImage} alt="Radio Image" />
    </Wrapper>
  );
}

export default Hero;
