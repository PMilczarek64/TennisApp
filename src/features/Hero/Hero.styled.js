import styled from "styled-components";
import HeaderImg from "../../assets/images/Header.jpg"

export const Container = styled.div`
  max-width: 100%;
  margin: 0;
  padding: 0;
`;

export const Header = styled.div`
  min-height: 90vh;
  max-width: 100%;
  background-image: url(${HeaderImg});
  background-size: cover;
  background-position-x: center;
  position: relative;
  display: flex;
  
  background-position-y: 45%;
  
 
  flex-direction: column;
  display: flex;
  overflow: hidden;
  span {
    position: relative;
    max-width: 100%;
    margin-block: 10px;
    background-color: rgba(0, 0, 0, 0.719);
    font-weight: 100;
    color: ${({ theme }) => theme.colors.detailGreen};
    &.left {
      margin-top: 130px;
      text-align: right;
      width: 650px;
      padding: 10px 20px 10px 5%;
      border-top-right-radius: 15px;
      border-bottom-right-radius: 15px;
      margin-bottom: 80px;
      h3 {
        color: ${({ theme }) => theme.colors.detailGreen};
      }
      @media screen and (max-width: 1100px) {
        
      }
      @media screen and (max-width: 720px) {
        width: 100%;
        text-align: center;
        padding: 10px;
      }
    }
    &.right {
      position: absolute;
      bottom: 5%;
      right: 0;
      padding: 12px 100px 12px 20px;
      width: 350px;
      text-align: left;
      border-top-left-radius: 15px;
      border-bottom-left-radius: 15px;
      h2 {
        color: #026592;
      }
      i {
        font-size: 32px;
        color: ${({ theme }) => theme.colors.detailGreen};
      }
      @media screen and (max-width: 720px) {
        width: 100%;
        text-align: center;
        padding: 12px;
      }
    }
    &.left2 {
      width: 590px;
      padding: 12px 20px;
      text-align: right;
      border-top-right-radius: 15px;
      border-bottom-right-radius: 15px;
      margin-bottom: 75px;
      @media screen and (max-width: 720px) {
        width: 100%;
        text-align: center;
        padding: 12px;
      }
      @media (max-width: 400px) {
        display: none;
      }
    }
  }
`;

export const TopHeader = styled.div`
  width: 100%;
  flex-direction: row;
  padding-block: 30px;
  align-items: center;
  justify-content: space-between;
`;