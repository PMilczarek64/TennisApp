import styled from "styled-components";

export const LoginInput = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  border: solid 1px ${({ theme }) => theme.colors.faded};
  border-radius: 5px;
  input {
    border: none;
  }
`;

export const Icon = styled.div`
  height: 100%;
  padding: 4px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: solid 1px ${({ theme }) => theme.colors.faded};
  margin-block: 6px;
  color: ${({ theme }) => theme.colors.detailGreen};
  font-size: 20px;
`;

export const FormItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  &.right {
    justify-content: flex-end;
  }
  &.center {
    justify-content: center;
    margin-bottom: 10px;
  }
`;