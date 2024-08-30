import styled from "styled-components";
import { device } from "styles/BreakPoints";

export const MainTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.poppins}, sans-serif;
  font-size: 60px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 90px;

  ${device.md} {
    font-size: 30px;
    line-height: 45px;
  }
`;

export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.poppins}, sans-serif;
  font-size: 35;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 52.5px;

  ${device.md} {
    font-size: 22px;
    line-height: 33px;
  }
`;

export const SubTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.poppins}, sans-serif;
  font-size: 25px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 37.5px;

  ${device.md} {
    font-size: 20px;
    line-height: 30px;
  }
`;

export const Text = styled.span`
  font-family: ${({ theme }) => theme.fonts.inter}, sans-serif;
  font-size: 22px;
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  line-height: 26.63px;
`;

export const SubText = styled.span`
  font-family: ${({ theme }) => theme.fonts.inter}, sans-serif;
  font-size: 20px;
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  line-height: 24.2px;

  ${device.md} {
    font-size: 18px;
    line-height: 22px;
  }
`;

export const SmallText = styled.span`
  font-family: ${({ theme }) => theme.fonts.inter}, sans-serif;
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  line-height: 22px;

  ${device.md} {
    font-size: 18px;
    line-height: 22px;
  }
`;

export const ButtonText = styled.span`
  font-family: ${({ theme }) => theme.fonts.inter}, sans-serif;
  font-size: 23px;
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  line-height: 27.84px;
`;
