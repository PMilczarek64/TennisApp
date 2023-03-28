import React from "react";
import styled from "styled-components";
import propTypes from 'prop-types';

const Wrapper = styled.div`
  padding: 50px 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .dark {
    margin-bottom: 20px;
    margin-left: 40px;
    h3 {
      color: black;
    }
  }
  @media screen and (max-width: 600px){
    padding: 50px 10px;
  }
`;

const FormWrapper = styled.div`
width: 300px;
  padding: 30px 30px 20px 30px;
  display: flex;
  flex-direction: column;
  border: none;
  align-items: center;
  border-radius: 15px;
  border-color: ${({ theme }) => theme.colors.darkGrey};
  box-shadow: 0px 5px 24px -10px rgba(66, 68, 90, 1);
  button {
    margin-top: 20px;
  }
  label {
    padding-left: 0;
  }
  
  h4 {
    margin-bottom: 20px;
    text-align: center;
  }
  .warn {
    color: red;
  }
`;

const AuthWrapper = ({icon, children}) => {
  return (
    <Wrapper>
      {icon}
      <FormWrapper>
        {children}
      </FormWrapper>
    </Wrapper>
  );
};


AuthWrapper.propTypes = {
  icon: propTypes.object,
  children: propTypes.node,
};


export default AuthWrapper;