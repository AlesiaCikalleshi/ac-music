import { PLAYER_HEIGHT } from "common/constants";
import { SubTitle } from "components/ui/Typography";
import styled from "styled-components";

export const TableTitle = styled(SubTitle)`
  margin-bottom: 30px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
  padding-top: 52px;
  padding-bottom: calc(${PLAYER_HEIGHT}px + 50px);
`;

export const InputWrapper = styled.div`
  margin: 0 auto;
  width: 70%;
`;

export const NotFoundText = styled(SubTitle)`
  color: ${({ theme }) => theme.colors.secondaryGrey};
`;
