import React, { useContext, useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../images/medreturlogonobg.webp';
import { Context } from '../../App';

import { InstagramIcon, LinkedinIcon } from '../iconssvg/icons';

const FooterContainer = styled.footer`
  margin-top: auto;

  width: 100%;
  background-color: #21212d;
  color: white;
`;

const FooterInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5rem 3rem;
  @media (min-width: 990px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

const FooterCopyRightContainer = styled.div`
  width: 100%;
  border-top: 1px solid lightgray;
  text-align: center;
  padding: 2rem;
`;

const FooterInfoSection = styled.div`
  padding: 2.5rem 0;
`;

const FooterLogo = styled.img`
  width: 156px;
  height: auto;
  background-color: white;
`;

const FooterSocialIconsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const GreenSpan = styled.span`
  color: #b3ffae;
`;
const FooterText = styled.p`
  margin: 2rem 0;
  width: 80%;
`;

const FooterInfoContent = styled.div``;

const FooterInfoTitle = styled.h1`
  border-bottom: 3px solid #b3ffae;
  text-transform: uppercase;
`;

const FooterTextP = styled.p`
  font-weight: 800;
  margin-top: 3rem;
  text-decoration: underline;
  text-decoration-color: #b3ffae;
`;

const FooterTextSmall = styled.p`
  margin-top: 0.5rem;
`;

const FooterInputContainer = styled.div`
  padding: 0 3rem 0 6rem;
`;
const FooterForm = styled.form`
  display: flex;
  flex-direction: column;
`;
const FooterInputLabel = styled.label`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
`;

const FooterInput = styled.input`
  margin: 0.5rem 0;
  height: 2.5rem;
`;
const FooterBtn = styled.button`
  height: 2rem;
  width: 5rem;
  font-weight: 800;
  background-color: #6abe52;
  color: white;
  cursor: pointer;
  animation: all 0.3s;
  border-radius: 25px;
  &:hover {
    background-color: #483838;
  }
`;
const FooterTextForm = styled.p`
  margin-top: 5.5rem;
  font-weight: 800;
`;

const CostumeLink = styled.a`
  text-decoration: none;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #a5e099;
`;

const StyledAnchorTag = styled.a`
  text-decoration: none;
  color: #a5e099;
`;
const MailToLink = styled.a`
  text-decoration: none;
  color: white;
  cursor: pointer;
`;

function Footer() {
  const { langData } = useContext(Context);
  const [email, setEmail] = useState('');
  let location = useLocation();
  const navigate = useNavigate();
  const handleClick = () => {
    if (email.length <= 0) return;
    navigate('/contact-us', { state: { message: email } });
  };

  return (
    <FooterContainer>
      <FooterInfoContainer location={location}>
        <FooterInfoSection>
          <Link to=''>
            <FooterLogo src={logo} placeholder='Logo' />
          </Link>
          <FooterText>{langData.footer[9]}</FooterText>
          <FooterSocialIconsContainer>
            <CostumeLink href='https://www.instagram.com/medretur/'>
              <InstagramIcon fill='white' />
            </CostumeLink>
            <CostumeLink href='https://www.linkedin.com/company/medretur/'>
              <LinkedinIcon fill='white' />
            </CostumeLink>
          </FooterSocialIconsContainer>
        </FooterInfoSection>
        <FooterInfoContent>
          <FooterInfoTitle>
            {' '}
            {location.pathname === '/contact-us' ? null : langData.footer[0]}
          </FooterInfoTitle>
          <FooterTextP>{langData.footer[1]}</FooterTextP>
          <FooterTextSmall>
            <MailToLink href={`mailto:${langData.footer[2]}`}>
              {langData.footer[2]}
            </MailToLink>
          </FooterTextSmall>
          <FooterTextP>{langData.footer[3]}</FooterTextP>
          <FooterTextSmall>
            <MailToLink
              href='https://norgeskart.no/#!?project=norgeskart&layers=1002&zoom=15&lat=6626510.73&lon=-51206.78&sok=Smedasundet%2096&markerLat=6626579.204434125&markerLon=-51237.6263796991&p=searchOptionsPanel'
              target='_blank'
              rel='noopener noreferrer'
            >
              {langData.footer[4]}
            </MailToLink>{' '}
          </FooterTextSmall>
          <FooterTextSmall>
            <MailToLink
              href='https://norgeskart.no/#!?project=norgeskart&layers=1002&zoom=15&lat=6626510.73&lon=-51206.78&sok=Smedasundet%2096&markerLat=6626579.204434125&markerLon=-51237.6263796991&p=searchOptionsPanel'
              target='_blank'
              rel='noopener noreferrer'
            >
              {langData.footer[5]}
            </MailToLink>
          </FooterTextSmall>
          <FooterTextSmall>
            <MailToLink
              href='https://norgeskart.no/#!?project=norgeskart&layers=1002&zoom=15&lat=6626510.73&lon=-51206.78&sok=Smedasundet%2096&markerLat=6626579.204434125&markerLon=-51237.6263796991&p=searchOptionsPanel'
              target='_blank'
              rel='noopener noreferrer'
            >
              {langData.footer[6]}
            </MailToLink>
          </FooterTextSmall>
          <FooterTextP>{langData.footer[7]}</FooterTextP>
          <FooterTextSmall>{langData.footer[8]}</FooterTextSmall>
        </FooterInfoContent>
        {location.pathname === '/contact-us' ? null : (
          <FooterInputContainer>
            <FooterTextForm>{langData.footer[14]}</FooterTextForm>
            <FooterForm>
              <FooterInputLabel>
                {langData.footer[15]}
                <FooterInput onChange={(e) => setEmail(e.target.value)} />
              </FooterInputLabel>
              <FooterBtn onClick={handleClick}>{langData.footer[16]}</FooterBtn>
            </FooterForm>
          </FooterInputContainer>
        )}
      </FooterInfoContainer>
      <FooterCopyRightContainer>
        <p>
          {langData.footer[10]}{' '}
          <GreenSpan>
            <StyledLink to=''>Medretur</StyledLink>{' '}
          </GreenSpan>
          . {langData.footer[12]}{' '}
          <GreenSpan>
            <StyledAnchorTag href='https://heritier-kodehode.github.io/Portfolio/'>
              Heritier Z.A
            </StyledAnchorTag>{' '}
          </GreenSpan>
        </p>
      </FooterCopyRightContainer>
    </FooterContainer>
  );
}

export default Footer;
