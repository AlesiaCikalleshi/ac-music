import { SubTitle } from "components/ui/Typography";
import styled from "styled-components";

export const TrendsAndArtistSection = styled.section`
  display: grid;
  grid-template-columns: 65% 35%;
  padding-bottom: 135px;
  overflow: hidden;
`;

export const GreyTitle = styled(SubTitle)`
  color: ${({ theme }) => theme.colors.secondaryGrey};
`;

export const StyledAside = styled.aside`
  margin-left: 90px;
`;
