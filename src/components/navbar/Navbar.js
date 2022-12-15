import React, { useState, useContext } from 'react';
import { Context } from '../../App';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { langDataEng } from '../../data/lang';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { keyframes } from 'styled-components';
import menuLogo from '../../images/menulogo.jpg';

const LangBtn = styled.button`
  font-size: 13px;
  border: none;
  padding: 0 5px;
  cursor: pointer;
  border: 1px solid palevioletred;
  background-color: ${(props) =>
    props.activeLang === langDataEng ? 'white' : 'red'};
`;
const LangBtnSecond = styled.button`
  font-size: 13px;
  border: none;
  padding: 0 5px;
  cursor: pointer;
  border: 1px solid palevioletred;
  background-color: ${(props) =>
    props.activeLang === langDataEng ? 'red' : 'white'};
`;

const LangText = styled.span`
  font-size: 13px;
  border: none;
  padding: 0 5px;
  font-weight: 900;
  color: red;
  text-decoration: underline;
`;

const LangDiv = styled.div`
  margin-left: auto;
  padding-right: 20px;
`;

const NavBarContainer = styled.nav`
  display: flex;
  position: fixed;
  height: 100px;
  width: 100%;
  min-width: 100%;
  justify-content: space-between;

  align-items: center;
  position: relative;

  @media (min-width: 990px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const LogoContainer = styled.div`
  height: 200px;
  display: flex;
  align-items: center;
  width: 100%;
`;

const MobileMenuContainer = styled.div`
  @media (min-width: 990px) {
    display: none;
  }
`;

//keyframe
const topToBottom = keyframes`
  0% {
    margin-top: -100%;
  }
  100% {
    margin-top: 0%;
  }
`;

const MobileMenuList = styled.ul`
  animation: ${topToBottom} 0.5s ease;
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

  height: ${(props) => (props.mobileMenuActive ? '100vh' : '0vh')};
`;

const MobileMenuListItem = styled.li`
  list-style: none;
  text-align: center;
  margin-top: 1.5rem;
`;
const MobileMenuListLogo = styled.li`
  list-style: none;
  text-align: center;
  padding-bottom: 3rem;
`;
const MobileMenuListKross = styled.li`
  list-style: none;
  text-align: right;
`;

const MenuContainer = styled.ul`
  width: 100%;
  height: 75px;
  display: flex;
  background-color: #21212d;
  color: white;
  align-items: center;
  padding: 2rem 2rem;

  @media (max-width: 990px) {
    display: none;
  }
`;
const MenuItem = styled.li`
  list-style: none;
  padding-right: 1rem;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
`;
const MenuContact = styled(MenuItem)`
  padding-left: 0.8rem;
  background-color: rgba(106, 190, 82, 1);
  height: 75px;
  display: flex;
  align-items: center;
  margin-left: auto;
  transition: all 0.7s;
  width: 130px;
  &:hover {
    background-color: black;
  }
`;

const LogoImgMobile = styled.img`
  height: 150px;
`;

const LogoImgHeader = styled.img`
  height: 75px;

  @media (min-width: 990px) {
    height: 125px;
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 30px;
  cursor: pointer;
  padding: 0 35px 0 0;
  width: min-content;
  padding: 0 15px 0 0;
  &:hover {
    color: #425f57;
  }
`;

const StyledMobLink = styled(Link)`
  padding: 10px 0;
  text-decoration: none;
  color: green;
  font-size: 1.5rem;
  &:hover {
    color: #92d984;
  }
  &:active {
    color: green;
  }
`;
const StyledNavLink = styled(NavLink)`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: white;
  width: 100%;
  &:hover {
  }
`;

//Navigation Header
function Navbar() {
  const { langData, handleLanguage } = useContext(Context);
  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? 'lightgreen' : 'white',
      textDecoration: 'none',
    };
  };

  const [mobileMenuActive = false, setMobileMenuActive] = useState();

  function handleMobileMenu() {
    setMobileMenuActive(!mobileMenuActive);
  }

  return (
    <NavBarContainer>
      <LogoContainer>
        <LogoImgHeader src={menuLogo} placeholder='logo' />
        <LangDiv>
          <LangText>Lang</LangText>
          <LangBtnSecond
            onClick={(e) => {
              handleLanguage(e);
            }}
            id='engLang'
            activeLang={langData}
          >
            English
          </LangBtnSecond>
          <LangBtn
            onClick={(e) => {
              handleLanguage(e);
            }}
            id='nokLang'
            activeLang={langData}
          >
            Norsk
          </LangBtn>
        </LangDiv>
      </LogoContainer>
      <MobileMenuContainer>
        <MobileMenuList mobileMenuActive={mobileMenuActive}>
          <MobileMenuListKross>
            <StyledIcon onClick={handleMobileMenu} icon={faXmark} />
          </MobileMenuListKross>
          <MobileMenuListLogo>
            <LogoImgMobile src={menuLogo} placeholder='logo' />
          </MobileMenuListLogo>

          <MobileMenuListItem>
            <StyledMobLink onClick={handleMobileMenu} to='/'>
              {langData.navBar[0]}
            </StyledMobLink>
          </MobileMenuListItem>
          <MobileMenuListItem>
            <StyledMobLink onClick={handleMobileMenu} to='/partners'>
              {langData.navBar[1]}
            </StyledMobLink>
          </MobileMenuListItem>
          <MobileMenuListItem>
            <StyledMobLink onClick={handleMobileMenu} to='/our-vision'>
              {langData.navBar[2]}
            </StyledMobLink>
          </MobileMenuListItem>
          <MobileMenuListItem>
            <StyledMobLink onClick={handleMobileMenu} to='/about'>
              {langData.navBar[3]}
            </StyledMobLink>
          </MobileMenuListItem>
          <MobileMenuListItem>
            <StyledMobLink onClick={handleMobileMenu} to='/return-unit'>
              {langData.navBar[4]}
            </StyledMobLink>
          </MobileMenuListItem>
          <MobileMenuListItem>
            <StyledMobLink
              onClick={handleMobileMenu}
              to='/climate-compensation'
            >
              {langData.navBar[5]}
            </StyledMobLink>
          </MobileMenuListItem>
          <MobileMenuListItem>
            <StyledMobLink onClick={handleMobileMenu} to='/contact-us'>
              {langData.navBar[6]}
            </StyledMobLink>
          </MobileMenuListItem>
        </MobileMenuList>
        <StyledIcon onClick={handleMobileMenu} icon={faBars} />
      </MobileMenuContainer>
      <MenuContainer>
        <MenuItem>
          <NavLink style={navLinkStyles} to='/'>
            {langData.navBar[0]}
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink style={navLinkStyles} to='/partners'>
            {langData.navBar[1]}
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink style={navLinkStyles} to='/our-vision'>
            {langData.navBar[2]}
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink style={navLinkStyles} to='/about'>
            {langData.navBar[3]}
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink style={navLinkStyles} to='/return-unit'>
            {langData.navBar[4]}
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink style={navLinkStyles} to='/climate-compensation'>
            {langData.navBar[5]}
          </NavLink>
        </MenuItem>
        <MenuContact>
          <StyledNavLink to='/contact-us'>{langData.navBar[6]}</StyledNavLink>
        </MenuContact>
      </MenuContainer>
    </NavBarContainer>
  );
}

export default Navbar;
