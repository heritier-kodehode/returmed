import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../../App';
import clearWater from '../../images/clearwater.png';
import medecines from '../../images/medecinesnobg.png';
import Carousel from '../../components/carousel/Carousel';
import './vision.css';
import {
  SectionContainerVision,
  VisionHeader,
  VisionTitle,
  VisionIntroContainer,
  TextContainer,
  ImgInIntro,
  Title,
  IntroText,
} from '../../components/styled/styled';

function Vision() {
  const { langData } = useContext(Context);
  return (
    <SectionContainerVision className='section-font'>
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
    </SectionContainerVision>
  );
}

export default Vision;
