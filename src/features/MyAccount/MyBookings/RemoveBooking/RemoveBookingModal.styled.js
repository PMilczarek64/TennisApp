import styled from "styled-components";

export const BorderWrapper = styled.div`
  padding: 20px;
  max-width: 100%;
  height: auto;
  background: linear-gradient(90deg, #ddff00 0%, rgb(255, 231, 76) 100%);
  z-index: 1;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  &.hide {
    display: none;
  }
  @media screen and (max-width: 750px) {
    min-width: 80%;
    max-width: 100%;
  }
`;

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  z-index: 1;
`;

export const Header = styled.h2`
  font-weight: 500;
  padding-block: 20px;
  border: 1px;
  border-color: ${({ theme }) => theme.colors.faded};
  border-style: none none solid none;
  font-size: 32px;
  @media screen and (max-width: 950px) {
    font-size: 28px;
  }
`;

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
    width: 180px;
  }
  :last-child {
    margin-bottom: 10px;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background: transparent;
`;