import { MOBILE_PLAYER_HEIGHT, PLAYER_HEIGHT } from "common/constants";
import { SubTitle } from "components/ui/Typography";
import styled from "styled-components";
import { device } from "styles/BreakPoints";

export const TrendsAndArtistSection = styled.section`
  display: grid;
  grid-template-columns: 65% 35%;
  padding-bottom: calc(${PLAYER_HEIGHT}px + 50px);
  overflow: hidden;

  //per ekrane me te vegjel perdore kete:
  ${device.xl} {
    display: flex;
    flex-direction: column;
    gap: 45px;
  }

  ${device.lg} {
    padding-bottom: calc(${MOBILE_PLAYER_HEIGHT}px + 50px);
  }
`;

export const GreyTitle = styled(SubTitle)`
  color: ${({ theme }) => theme.colors.secondaryGrey};
`;

export const StyledAside = styled.aside`
  margin-left: 90px;

  ${device.xl} {
    margin-left: 0;
  }
`;
