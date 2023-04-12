import React, { useState } from 'react';
import styled from 'styled-components';
import RightNav from './RightNav/RightNav';
import clsx from 'clsx';

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 22.5px;
  right: 22.5px;
  z-index: 3;
  display: none;
  background-color: transparent;
  @media (max-width: 1090px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 2rem;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSize.xxl};
    color: ${({ open, theme }) => open ? theme.colors.lightGrey : theme.colors.detailGreen};
    
  }
`;

const NavBurger = ({action, pages}) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div>
        <i className={clsx(open === false ? "fa fa-bars" : "fa fa-times")}></i>
        </div>
      </StyledBurger>
      <RightNav open={open} setOpen={setOpen} action={action} pages={pages} />
    </>
  );
};

export default NavBurger;