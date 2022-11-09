import React from "react";
import styled from "styled-components";

export const ButtonGreen = styled.button`
  background: ${({ theme }) => theme.colors.detailGreen};
  border: none;
  border-radius: 10px;
  padding: 10px 30px;
  font-size: 18px;
  cursor: pointer;
`;