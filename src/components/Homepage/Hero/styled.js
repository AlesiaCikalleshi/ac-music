import styled from "styled-components";
import { MainTitle, Text } from "components/ui/Typography";
import { Button } from "../Genres/styled";
import { device } from "styles/BreakPoints";

const HERO_IMAGE_HIDDEN_BREAKPOINT = 1050;

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.purple};
  border-radius: 25px;
  width: 100%;
  margin: 24px 0 35px;
  height: 382px;

  @media (max-width: ${HERO_IMAGE_HIDDEN_BREAKPOINT}px) {
    align-items: center;
    height: 305px;
    text-align: center;
    padding: 41px 32px;
    margin: 30 0 35px;
  }
`;

export const TextWrapper = styled.div`
  padding-left: 123px;

  ${device.xl} {
    padding-left: 70px;
  }

  @media (max-width: ${HERO_IMAGE_HIDDEN_BREAKPOINT}px) {
    padding: 0;
    width: 100%;
  }
`;

export const HeroText = styled(Text)`
  max-width: 274px;
`;

export const HeroTitleText = styled(MainTitle)`
  @media (max-width: ${HERO_IMAGE_HIDDEN_BREAKPOINT}px) {
    font-size: 45px;
    line-height: 68px;
  }
`;

export const HeroImage = styled.img`
  @media (max-width: ${HERO_IMAGE_HIDDEN_BREAKPOINT}px) {
    display: none;
  }
`;

export const PlayButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 14px;

  @media (max-width: ${HERO_IMAGE_HIDDEN_BREAKPOINT}px) {
    justify-content: center;
    width: 100%;
    margin: 30px auto;
  }
`;
