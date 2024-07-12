import styled from "styled-components";
import { Text } from "components/ui/Typography";

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.purple};
  border-radius: 25px;
  width: 100%;
  margin: 24px 0 35px;
  height: 382px;
`;

export const TextWrapper = styled.div`
  padding-left: 123px;
`;

export const HeroText = styled(Text)`
  max-width: 274px;
`;

export const PlayButton = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 13px 35px;
  margin-top: 52px;
  cursor: pointer;
  gap: 14px;
  border-radius: 20px;
  box-shadow:
    7px 23px 9px 0px #07152c05,
    0px 0px 0px 0px #07152c1c,
    4px 13px 8px 0px #07152c0d,
    0px 1px 3px 0px #07152c1c,
    2px 6px 6px 0px #07152c17,
    10px 35px 10px 0px #07152c00;

  &:hover {
    opacity: 0.8;
  }
`;
