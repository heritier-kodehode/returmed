import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../../App';
import Diploma from '../../images/diploma.webp';
const SectionContainer = styled.div`
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin: 7rem auto 0 auto;
  @media (min-width: 990px) {
    margin-top: 100px;

    flex-wrap: wrap;
  }
`;

const SectionHeader = styled.header`
  width: 100%;
  background: #385d6d;
  padding: 2rem 0;
  @media (min-width: 990px) {
    margin-top: 0;
  }
`;

const SectionTitle = styled.h2`
  letter-spacing: normal;
  text-transform: uppercase;
  width: 100%;
  text-align: center;
  font-size: calc(29px + (24 - 16) * (100vw - 400px) / (800 - 400));

  text-decoration: underline;
  color: white;
`;
const SectionIntro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const TriviaInfoText = styled.p`
  font-size: 1.4rem;
  width: 70%;
  color: #395e70;
  padding: 1rem 0;
  line-height: 150%;
  word-spacing: 130%;
`;

const CertificationContainer = styled.div`
  width: 100%;
  background: repeating-linear-gradient(
    -45deg,
    #395e70,
    #168952 20px,
    #ffffff 20px,
    #ffffff 100px
  );
  padding: 3rem 0;
  @media (min-width: 990px) {
    padding: 3rem 2rem;
  }
`;

const DiplomaImg = styled.img`
  width: 100%;
  height: auto;
  margin: 0 auto;
  -moz-box-shadow: 20px 20px 36px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 20px 20px 36px rgba(0, 0, 0, 0.2);
  box-shadow: 20px 20px 36px rgba(0, 0, 0, 0.2);
`;
const LinkSpan = styled.a`
  text-decoration: none;
  cursor: pointer;
  padding: 0 1rem;
  color: #395e70;
`;

function Climatecompensation() {
  const { langData } = useContext(Context);
  return (
    <SectionContainer>
      <SectionTitle>
        <SectionHeader>{langData.klimakompensasjon[0]}</SectionHeader>
      </SectionTitle>
      <SectionIntro>
        <TriviaInfoText>{langData.klimakompensasjon[1]}</TriviaInfoText>
        <TriviaInfoText>
          {langData.klimakompensasjon[2]}
          <LinkSpan href={langData.klimakompensasjon[3]}>
            {langData.klimakompensasjon[3]}
          </LinkSpan>
        </TriviaInfoText>
      </SectionIntro>
      <CertificationContainer>
        <DiplomaImg
          src={Diploma}
          placeholder='diploma/certificate of climate compensation'
        />
      </CertificationContainer>
    </SectionContainer>
  );
}

export default Climatecompensation;
