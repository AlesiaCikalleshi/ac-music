import React from "react";
import DesktopRadioImage from "assets/icons/images/radio-desktop.png";
import { Wrapper, TextWrapper, PlayButton } from "./styled";
import { MainTitle, Text, ButtonText } from "components/ui/Typography";
import { Play } from "components/ui/Icons";

function Hero() {
  return (
    <Wrapper>
      <TextWrapper>
        <MainTitle>Radio</MainTitle>
        <Text>Pick your todays mood. We will play a perfect mix!</Text>
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
