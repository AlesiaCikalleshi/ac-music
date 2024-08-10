import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  background-color: ${({ theme }) => theme.colors.secondaryBlack};
  height: 118px;
  border-radius: 0px 0px 25px 25px;
`;

export const LogoWrapper = styled.header`
  display: flex;
  gap: 20px;
`;
