import styled from "styled-components";

export const Header = styled.h4`
  text-align: center;
`;

export const Form = styled.form`
  span {
    color: ${({ theme }) => theme.colors.error};
  }
  input {
    height: 42px;
    margin-block: 5px;
    border-color: ${({ theme }) => theme.colors.strongFaded};
  }
`;