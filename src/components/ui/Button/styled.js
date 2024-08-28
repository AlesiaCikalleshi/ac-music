import styled from "styled-components";

export const StyledButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 13px 35px;
  margin-top: 52px;
  cursor: pointer;
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

  &:disabled {
    opacity: 0.6;
  }
`;
