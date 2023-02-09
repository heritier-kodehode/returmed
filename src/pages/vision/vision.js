import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../../App';
import clearWater from '../../images/clearwater.png';
import medecines from '../../images/medecinesnobg.png';
import Carousel from '../../components/carousel/Carousel';
import './vision.css';
const SectionContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin: 7rem auto 0 auto;

  @media (min-width: 990px) {
    margin-top: 100px;

    flex-wrap: wrap;
  }
`;

const VisionHeader = styled.header`
  width: 100%;
  background: #385d6d;
  margin-bottom: 5rem;
`;

const VisionTitle = styled.h2`
  letter-spacing: normal;
  text-transform: uppercase;
  width: 100%;
  text-align: center;
  font-size: calc(29px + (24 - 16) * (100vw - 400px) / (800 - 400));
  margin: 2rem 0;
  border-top: 1px solid #6abe52;
  text-decoration: underline;
  color: white;

  @media (min-width: 990px) {
    border-top: none;
  }
`;

const VisionIntroContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  @media (min-width: 990px) {
    flex-direction: row;
  }
`;
const TextContainer = styled.div`
  @media (min-width: 990px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
const ImgInIntro = styled.img`
  width: 60%;
  margin: 3rem auto 0 auto;
  @media (min-width: 990px) {
    width: 100%;
    margin: 0 auto;
  }
`;

const Title = styled.h2`
  color: #025955;
  font-size: 2rem;
  margin: 2rem 0;
  @media (min-width: 990px) {
    font-size: 4rem;
  }
`;

const IntroText = styled.p`
  color: #206a5d;
  font-size: 1.6rem;
  line-height: 1.6;
  @media (min-width: 990px) {
    font-size: 2rem;
  }
`;

function Vision() {
  const { langData } = useContext(Context);
  return (
    <SectionContainer className='section-font'>
      <VisionHeader>
        <VisionTitle>{langData.visionIntro[0]}</VisionTitle>
      </VisionHeader>
      <VisionIntroContainer>
        <TextContainer>
          <Title>{langData.visionIntro[1]}</Title>
          <IntroText>{langData.visionIntro[2]}</IntroText>
        </TextContainer>
        <ImgInIntro src={medecines} placeholder='medecines' />
      </VisionIntroContainer>
      <Carousel lang={langData} />
    </SectionContainer>
  );
}

export default Vision;
