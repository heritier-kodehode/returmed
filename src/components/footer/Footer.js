import React, { useContext } from 'react';
import styled from 'styled-components';
import logo from '../../images/medreturlogonobg.webp';
import { Context } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

const FooterContactSection = styled.div``;

const FooterLogo = styled.img`
  width: 156px;
  height: auto;
  background-color: white;
`;

const FooterSocialIconsContainer = styled.div`
  display: flex;
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
function Footer() {
  const { langData } = useContext(Context);
  return (
    <FooterContainer>
      <FooterInfoContainer>
        <FooterInfoSection>
          <FooterLogo src={logo} placeholder='Logo' />
          <FooterText>{langData.footer[9]}</FooterText>
          <FooterSocialIconsContainer>
            <InstagramIcon fill='white' />
            <LinkedinIcon fill='white' />
          </FooterSocialIconsContainer>
        </FooterInfoSection>
        <FooterInfoContent>
          <FooterInfoTitle>{langData.footer[0]}</FooterInfoTitle>
          <FooterTextP>{langData.footer[1]}</FooterTextP>
          <FooterTextSmall>{langData.footer[2]}</FooterTextSmall>
          <FooterTextP>{langData.footer[3]}</FooterTextP>
          <FooterTextSmall>{langData.footer[4]}</FooterTextSmall>
          <FooterTextSmall>{langData.footer[5]}</FooterTextSmall>
          <FooterTextSmall>{langData.footer[6]}</FooterTextSmall>
          <FooterTextP>{langData.footer[7]}</FooterTextP>
          <FooterTextSmall>{langData.footer[8]}</FooterTextSmall>
        </FooterInfoContent>
        <FooterInputContainer>
          <FooterTextForm>{langData.footer[14]}</FooterTextForm>
          <FooterForm>
            <FooterInputLabel>
              {langData.footer[15]}
              <FooterInput />
            </FooterInputLabel>
            <FooterBtn>{langData.footer[16]}</FooterBtn>
          </FooterForm>
        </FooterInputContainer>
      </FooterInfoContainer>
      <FooterCopyRightContainer>
        <p>
          {langData.footer[10]} <GreenSpan>Medretur</GreenSpan>.{' '}
          {langData.footer[12]} <GreenSpan>Heritier Z.A</GreenSpan>
        </p>
      </FooterCopyRightContainer>
    </FooterContainer>
  );
}

export default Footer;
