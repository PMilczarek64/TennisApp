import styled from "styled-components";

export const FormItem = styled.div`
  padding: 10px;
  margin-inline: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  &.right {
    justify-content: flex-end;
  }
  &.warn {
    p {
      color: red;
    }
  }
  input {
    max-width: 180px;
    width: 50%;
  }
  label {
    min-width: 100px;
    width: 100%;
    text-align: left;
  }
  :last-child {
    margin-bottom: 10px;
  }
  @media screen and (max-width: 990px) {
    margin: 0;
    
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background: transparent;
`;