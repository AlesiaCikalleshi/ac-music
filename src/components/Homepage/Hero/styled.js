import styled from "styled-components";
import { Text } from "components/ui/Typography";
import { Button } from "../Genres/styled";

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

export const PlayButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 14px;
`;
