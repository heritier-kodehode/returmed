import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import menuLogo from '../../images/menulogo.jpg';
const NavBarContainer = styled.header`
  display: flex;
  position: fixed;
  height: 100px;
  width: 100%;
  min-width: 100%;
  justify-content: space-between;
  padding: 0 10px;
  align-items: center;
  position: relative;

  @media (min-width: 990px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const LogoContainer = styled.div`
  height: 155px;
  display: flex;
  align-items: center;
`;

const MobileMenuContainer = styled.div`
  @media (min-width: 990px) {
    display: none;
  }
`;

const MobileMenuList = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  border: 2px solid black;
  padding: 30px 0 0 0;
  display: ${(props) => (props.mobileMenuActive ? 'flex' : 'none')};
  flex-direction: column;

  z-index: 99;
  background-color: white;
  transition: all 2s;
  height: ${(props) => (props.mobileMenuActive ? '100vh' : '0vh')};
`;
const MobileMenuListItem = styled.li`
  list-style: none;
  text-align: center;
`;
const MobileMenuListLogo = styled.li`
  list-style: none;
  text-align: center;
`;
const MobileMenuListKross = styled.li`
  list-style: none;
  text-align: right;

  padding: 0 15px 0 0;
`;

const MenuContainer = styled.ul`
  width: 100%;
  height: 75px;
  display: flex;
  background-color: black;
  color: white;
  align-items: center;
  padding: 2rem 2rem;
  @media (max-width: 990px) {
    display: none;
  }
`;
const MenuItem = styled.li`
  list-style: none;
  margin-right: 10px;
`;

const LogoImgMobile = styled.img``;

const LogoImgHeader = styled.img`
  margin: 50px 0;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 30px;
  cursor: pointer;
  padding: 5px;
  width: min-content;
`;

function Navbar() {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  function handleMobileMenu() {
    setMobileMenuActive(!mobileMenuActive);
  }
  return (
    <NavBarContainer>
      <LogoContainer>
        <LogoImgHeader src={menuLogo} placeholder='logo' />
      </LogoContainer>
      <MobileMenuContainer>
        <MobileMenuList mobileMenuActive={mobileMenuActive}>
          <MobileMenuListKross>
            <StyledIcon onClick={handleMobileMenu} icon={faXmark} />
          </MobileMenuListKross>
          <MobileMenuListLogo>
            <LogoImgMobile src={menuLogo} placeholder='logo' />
          </MobileMenuListLogo>

          <MobileMenuListItem>Home</MobileMenuListItem>
          <MobileMenuListItem>Partners</MobileMenuListItem>
        </MobileMenuList>
        <StyledIcon onClick={handleMobileMenu} icon={faBars} />
      </MobileMenuContainer>
      <MenuContainer>
        <MenuItem>Home</MenuItem>
        <MenuItem>Partners</MenuItem>
      </MenuContainer>
    </NavBarContainer>
  );
}

export default Navbar;
