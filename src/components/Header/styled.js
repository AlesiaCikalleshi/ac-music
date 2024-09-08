import styled from "styled-components";
import { HEADER_HEIGHT, MOBILE_HEADER_HEIGHT } from "common/constants";
import { device } from "styles/BreakPoints";

export const HeaderWrapper = styled.header`
  display: flex;
  background-color: ${({ theme }) => theme.colors.secondaryBlack};
  height: ${HEADER_HEIGHT}px;
  border-radius: 0px 0px 25px 25px;

  ${device.lg} {
    height: ${MOBILE_HEADER_HEIGHT}px;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
