import React from 'react';
import styled from 'styled-components';
import logo from '../../images/menulogo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';

const FooterContainer = styled.footer`
  margin-top: auto;
  height: 20vh;
  background-color: #21212d;
`;

const FooterInfoContainer = styled.div``;

const FooterCopyRightContainer = styled.div``;

const FooterInfoSection = styled.div``;

const FooterContactSection = styled.div``;

const FooterLogo = styled.img``;

const FooterSocialIcon = styled(FontAwesomeIcon)``;

function Footer() {
  return (
    <FooterContainer>
      <FooterInfoContainer>
        <FooterInfoSection></FooterInfoSection>
        <FooterCopyRightContainer>
          <p>Copyrights © 2022 Medretur. Designed by Heritier Z.A</p>
        </FooterCopyRightContainer>
      </FooterInfoContainer>
    </FooterContainer>
  );
}

export default Footer;
