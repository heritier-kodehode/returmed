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
  border: 1px solid #138851;
  background-color: ${(props) =>
    props.activeLang === langDataEng ? 'white' : '#138851'};
  color: ${(props) => (props.activeLang === langDataEng ? 'black' : 'white')};
`;
const LangBtnSecond = styled.button`
  font-size: 13px;
  border: none;
  padding: 0 5px;
  cursor: pointer;
  border: 1px solid #138851;
  background-color: ${(props) =>
    props.activeLang === langDataEng ? '#138851' : 'white'};
  color: ${(props) => (props.activeLang === langDataEng ? 'white' : 'black')};
`;

const LangText = styled.span`
  font-size: 13px;
  border: none;
  padding: 0 5px;
  font-weight: 900;
  color: #138851;
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
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100%;
  border: 2px solid black;
  padding: 30px 0 0 0;
  display: ${(props) => (props.mobileMenuActive ? 'flex' : 'none')};
  flex-direction: column;

  z-index: 99;
  background-color: white;
  overflow: scroll;
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
  background-color: black;
  color: white;
  align-items: stretch;

  @media (max-width: 990px) {
    display: none;
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
  padding: 2rem 0.5rem;
  font-weight: 600;
  border-right: 1px solid #385d6d;
  background-color: #21212d;
  &.active {
    background-color: #385d6d;
  }
  &:hover {
    background-color: #385d6d;
    color: yellow;
  }
`;
const StyledNavLinkContact = styled(NavLink)`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: white;
  width: 100%;
  margin: 0 auto 0 150px;
  font-weight: 600;
  border-right: 5px dashed #385d6d;
  border-left: 2px dashed #385d6d;
  background-color: #21212d;
  &:hover {
    background-color: #385d6d;
    color: yellow;
  }
  &.active {
    background-color: #385d6d;
  }
`;

//Navigation Header
function Navbar() {
  const { langData, handleLanguage } = useContext(Context);

  const [mobileMenuActive = false, setMobileMenuActive] = useState();

  function handleMobileMenu() {
    setMobileMenuActive(!mobileMenuActive);
  }

  return (
    <NavBarContainer>
      <LogoContainer>
        <Link to=''>
          <LogoImgHeader src={menuLogo} placeholder='logo' />
        </Link>
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
            <StyledMobLink onClick={handleMobileMenu} to=''>
              {langData.navBar[0]}
            </StyledMobLink>
          </MobileMenuListItem>
          <MobileMenuListItem>
            <StyledMobLink onClick={handleMobileMenu} to='partners'>
              {langData.navBar[1]}
            </StyledMobLink>
          </MobileMenuListItem>
          <MobileMenuListItem>
            <StyledMobLink onClick={handleMobileMenu} to='our-vision'>
              {langData.navBar[2]}
            </StyledMobLink>
          </MobileMenuListItem>
          <MobileMenuListItem>
            <StyledMobLink onClick={handleMobileMenu} to='about'>
              {langData.navBar[3]}
            </StyledMobLink>
          </MobileMenuListItem>
          <MobileMenuListItem>
            <StyledMobLink onClick={handleMobileMenu} to='return-unit'>
              {langData.navBar[4]}
            </StyledMobLink>
          </MobileMenuListItem>
          <MobileMenuListItem>
            <StyledMobLink onClick={handleMobileMenu} to='blog'>
              {langData.navBar[5]}
            </StyledMobLink>
          </MobileMenuListItem>
          <MobileMenuListItem>
            <StyledMobLink onClick={handleMobileMenu} to='contact-us'>
              {langData.navBar[6]}
            </StyledMobLink>
          </MobileMenuListItem>
        </MobileMenuList>
        <StyledIcon onClick={handleMobileMenu} icon={faBars} />
      </MobileMenuContainer>
      <MenuContainer>
        <StyledNavLink to=''>{langData.navBar[0]}</StyledNavLink>

        <StyledNavLink to='partners'>{langData.navBar[1]}</StyledNavLink>

        <StyledNavLink to='our-vision'>{langData.navBar[2]}</StyledNavLink>

        <StyledNavLink to='about'>{langData.navBar[3]}</StyledNavLink>

        <StyledNavLink to='return-unit'>{langData.navBar[4]}</StyledNavLink>

        <StyledNavLink to='blog'>Blog</StyledNavLink>

        <StyledNavLinkContact to='contact-us'>
          {langData.navBar[6]}
        </StyledNavLinkContact>
      </MenuContainer>
    </NavBarContainer>
  );
}

export default Navbar;
