import styled from "styled-components";

export const Modal = styled.div`
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
  @media screen and (max-width: 990px) {
    width: 70%;
  }
  @media screen and (max-width: 790px) {
    width: 90%;
  }
`;

export const ContentWrapper = styled.div`
  height: 100%;
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
  padding: 20px;
`;