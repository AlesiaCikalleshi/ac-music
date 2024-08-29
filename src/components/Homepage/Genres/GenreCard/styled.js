import styled from "styled-components";
import { SubTitle } from "components/ui/Typography";
import { device } from "styles/BreakPoints";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 220px;
  height: 116px;
  border-radius: 25px;
  cursor: pointer;
  position: relative;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
    opacity: 0.4;
    background-size: cover;
    background-position: center center;
    border-radius: 25px;
    background-image: url(${(props) => props.image});
  }

  ${device.md} {
    width: 137px;
    height: 95px;
  }
`;

export const GenreName = styled(SubTitle)`
  z-index: ${({ theme }) => theme.zIndex["10"]};
`;
