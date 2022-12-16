import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  height: 500px;
  width: 100%;
  margin-top: auto;
  background-color: #21212d;
  color: #ffffff;
  display: flex;
  flex-direction: column;
`;

const FooterInfoContainer = styled.div``;

const FooterFormContainer = styled.div``;

function Footer() {
  return (
    <FooterContainer>
      <FooterInfoContainer></FooterInfoContainer>
      <FooterFormContainer></FooterFormContainer>
    </FooterContainer>
  );
}

export default Footer;
