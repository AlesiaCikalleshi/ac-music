import { PLAYER_HEIGHT } from "common/constants";
import { SubTitle } from "components/ui/Typography";
import styled from "styled-components";

export const TrendsAndArtistSection = styled.section`
  display: grid;
  grid-template-columns: 65% 35%;
  padding-bottom: calc(${PLAYER_HEIGHT}px + 50px);
  overflow: hidden;
`;

export const GreyTitle = styled(SubTitle)`
  color: ${({ theme }) => theme.colors.secondaryGrey};
`;

export const StyledAside = styled.aside`
  margin-left: 90px;
`;
