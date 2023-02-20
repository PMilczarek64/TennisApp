import styled from "styled-components";

export const ButtonGreen = styled.button`
  background: ${({ theme }) => theme.colors.detailGreen};
  border: none;
  border-radius: 10px;
  padding: 10px 30px;
  font-size: 18px;
  width: 100%;
  cursor: pointer;
`;

export const ButtonGreenOutline = styled.button`
  width: 100%;
  background-color: white;
  border: solid 1px;
  border-style: solid none none none;
  color: greenyellow;
  font-weight: 700;
  padding: 10px 30px;
  font-size: 22px;
  cursor: pointer;
  background-image: linear-gradient(150deg, greenyellow 50%, white 50%);
  background-size: 300%;
  background-position: 100% 0;
  transition: 0.5s ease-in-out;
  :hover {
    background-position: 0 100%;
    background-color: greenyellow;
    color: white;
    
  }
`;

export const ButtonGreenHighlited = styled.button`
  width: 100%;
  background-color: white;

  border-style: none;
  color: greenyellow;
  font-weight: 700;
  padding: 10px 30px;
  font-size: 22px;
  cursor: pointer;
  background-image: linear-gradient(150deg, greenyellow 50%, white 50%);
  background-size: 300%;
  background-position: 100% 0;
  transition: 0.5s ease-in-out;
  :hover {
    background-position: 0 100%;
    background-color: greenyellow;
    color: white;
    
  }
`;

export const ButtonRedOutline = styled.button`
  width: 100%;
  background-color: white;
  border: solid 1px ;
  border-style: solid none none none;
  color: rgb(255, 141, 141);
  font-weight: 700;
  padding: 10px 30px;
  font-size: 22px;
  cursor: pointer;
  background-image: linear-gradient(330deg, rgb(255, 141, 141) 50%, white 50%);
  background-size: 300%;
  background-position: 0 100%;
  transition: 0.5s ease-in-out;
  :hover {
    background-position: 100% 0;
    background-color: rgb(255, 141, 141);
    color: white;
    
  }
`;

export const ButtonGreyOutline = styled.button`
  width: 100%;
  background-color: white;
  border: solid 1px;
  border-style: solid none none none;
  color: grey;
  font-weight: 700;
  padding: 10px 30px;
  font-size: 22px;
  cursor: pointer;
  background-image: linear-gradient(150deg, grey 50%, white 50%);
  background-size: 300%;
  background-position: 100% 0;
  transition: 0.5s ease-in-out;
  :hover {
    background-position: 0 100%;
    background-color: grey;
    color: white;
    
  }
`;