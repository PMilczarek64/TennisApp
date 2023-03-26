import styled from "styled-components";

export const Image = styled.div`
  height: 100%;
  min-width: 50%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  @media (max-width: 680px) {
    display: none;
  }
`;

export const InfoWrapper = styled.div`
  max-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 50%;
  flex-shrink: 1;
  background-color: white;
  &.hide {
    display: none;
  }
  i {
    font-size: 36px;
    color: ${({ theme }) => theme.colors.lightBlue};
    cursor: pointer;
    &.message {
      font-size: 24px;
      margin-inline: 3px;
    }
  }
  @media (max-width: 680px) {
    width: 100%;
  }
`;

export const Info = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow: clip;
  .short {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .success {
    color: ${({ theme }) => theme.colors.success};
  }
  button {
    background: none;
    border: none;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.lightBlue};
    margin-top: 10px;
    cursor: pointer;
    :hover {
      color: black;
      transition: 0.3s ease-in-out;
    }
  }
`;