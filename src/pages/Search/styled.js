import { MOBILE_PLAYER_HEIGHT, PLAYER_HEIGHT } from "common/constants";
import { SubTitle } from "components/ui/Typography";
import styled from "styled-components";
import { device } from "styles/BreakPoints";

export const TableTitle = styled(SubTitle)`
  margin-bottom: 30px;

  ${device.md} {
    margin-bottom: 15px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
  padding-top: 52px;
  padding-bottom: calc(${PLAYER_HEIGHT}px + 50px);

  ${device.lg} {
    padding-bottom: calc(${MOBILE_PLAYER_HEIGHT}px + 50px);
  }

  ${device.md} {
    gap: 25px;
    padding-top: 28px;
  }
`;

export const InputWrapper = styled.div`
  margin: 0 auto;
  width: 70%;

  ${device.lg} {
    width: 100%;
  }
`;

export const NotFoundText = styled(SubTitle)`
  color: ${({ theme }) => theme.colors.secondaryGrey};
`;
