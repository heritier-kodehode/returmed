import React, { useState, useContext } from 'react';
import { Context } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { keyframes, Keyframes } from 'styled-components';
import styled from 'styled-components';
import bgVideo from '../../video/medsfall.webm';
import bgVideoHD from '../../video/medsfall.mp4';
import { Link } from 'react-router-dom';
import farmaImg from '../../images/Farmas.webp';
import nathanDiasImg from '../../images/NathanDias.webp';
import oceanWaterImg from '../../images/OceanWater.webp';
import unitImg from '../../images/returunit.webp';

//HOME BANNER
const HomeContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 0;

  @media (min-width: 990px) {
    margin-top: 100px;
  }
`;

const HomeBanner = styled.header`
  width: 100%;
  position: relative;
  height: 100vh;
  padding: 50px 0 100px 0;
`;
const BgVideo = styled.video`
  object-fit: fill;

  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: auto;
  z-index: -1;

  background-color: black;
  height: 100%;
`;

const OverLay = styled.div`
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 0;
  background: rgba(40, 40, 40, 0.6);
`;

const TextContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  top: 0;
`;
const TitleSmall = styled.h3`
  width: 70%;
  color: #effffb;
  text-align: center;
  font-size: calc(14px + (24 - 16) * (100vw - 400px) / (800 - 400));
`;

const TitleLarge = styled.h1`
  color: #50d890;
  font-size: calc(60px + (24 - 16) * (100vw - 400px) / (800 - 400));
  text-shadow: 2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff,
    1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;
`;

const TitleMedium = styled.h2`
  font-size: calc(12px + (24 - 16) * (100vw - 400px) / (800 - 400));
  color: #272727;
  text-align: center;
  text-shadow: 2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff,
    1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;
`;

const RowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const CallToAction = styled(Link)`
  text-decoration: none;
  color: #fefcf3;
  border: 3px solid #e8f9fd;
  border-radius: 100px;
  background-color: #6abe52;
  font-size: clamp(16px, 1.5rem, 40px);
  font-weight: 700;
  margin: 20px 10px;
  padding: 20px;
  transition: all 0.5s;
  -webkit-text-stroke: 1px black;

  &:hover {
    background-color: white;
    color: black;
    border: 3px solid #6abe52;
  }
`;

//TRIVIA SECTION
const HomeTriviaContaner = styled.div`
  position: relative;
  width: 100%;
`;
const HomeInnerTriviaContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;

  @media (min-width: 990px) {
    flex-direction: row;
  }
`;
const TriviaContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #50d890;
  border-bottom: 2px solid #59ce8f;
  padding: 60px 0;
  text-align: center;
  height: 550px;
  cursor: pointer;
  &:hover img {
    border: 10px solid #59ce8f;
  }

  &:hover h5 {
    border: 2px solid #7fb77e;
    background-color: #59ce8f;
    color: white;
  }
`;

const TriviaContainerGreenBg = styled(TriviaContainer)`
  background-color: #6abe52;
  color: white;
  margin: 0;

  @media (min-width: 990px) {
    margin: 0;
    transform: scaleY(1.1);
    border-radius: 10px;
  }

  &:hover h5 {
    border: 2px solid #7fb77e;
    background-color: white;
    color: #6abe52;
  }
`;

const TriviaImage = styled.img`
  height: 250px;
  border: 10px solid white;
`;
const TriviaImageGreenBorder = styled.img`
  height: 250px;
  border: 10px solid #6abe52;
`;
const TriviaTitle = styled.h5`
  margin: 10px 0;
  border: 2px solid #b1d7b4;
  padding: 10px;
`;
const TriviaUnderTitle = styled.h3`
  margin: 10px 0;
`;

const TriviaInfoText = styled.p`
  width: 70%;
  color: #5fd068;
`;

const TriviaInfoTextLight = styled.p`
  width: 70%;
  color: #f4f7ed;
`;

//About The Unit On home page
const UnitInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  padding: 3rem 0 0 0;
  position: relative;
  @media (min-width: 990px) {
    flex-direction: row;
    padding: 1.5rem 0 0 0;
  }
`;

const ImgCtaContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 2rem;
  padding-top: 10rem;
  border-right: 0.5rem solid #6abe52;
  position: relative;
  flex-basis: 1;
  width: 100%;
`;

const UnitImg = styled.img`
  width: 35rem;
`;

const UnitCtaContainer = styled.div`
  border: 1px solid #6abe52;
  width: 90%;
  height: 10rem;
  display: flex;
  background-color: #6abe52;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 2rem 0;
  position: absolute;
  right: 0;
  bottom: 10%;
  border-radius: 999em 40px 40px 999em;
`;

const pulseAnimation = keyframes`
  1% {
    border: 25px solid #86EE60;
   
  }
  
  50%{
    border: 25px solid #6abe52;
  }
 

  100% {
    border: 25px solid #86EE60;
  }
`;

const UnitCtaArrow = styled(FontAwesomeIcon)`
  font-size: 124px;
  background-color: white;
  border-radius: 50%;
  padding: 20px;
  border: 25px solid #99cda9;
  height: 100%;
  color: #6abe52;
  cursor: pointer;

  animation-name: ${pulseAnimation};
  animation-duration: 0.4s;
  animation-iteration-count: infinite;

  &:hover {
    transform: scale(1.1);
    color: #99cda9;
  }
`;

const UnitCtaText = styled.p`
  font-size: calc(30px + (24 - 16) * (100vw - 400px) / (800 - 400));
  margin-left: 60px;
  color: #f5fdff;
`;

const UnitTextContainer = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: column;
  flex-basis: 1;
  padding-top: 10rem;
`;

const UnitInfoTitleText = styled.h1`
  width: 80%;
  margin: 0 auto 2rem auto;
  font-size: 4rem;
`;

const UnitParagraphText = styled.p`
  width: 80%;
  margin: 0 auto 2rem auto;
  color: #283739;
  border-bottom: 2px solid #99cda9;
  padding: 0 0 1rem 0;
`;

function Home() {
  const { langData } = useContext(Context);
  return (
    <HomeContainer>
      <HomeBanner role='banner'>
        <BgVideo autoPlay muted loop>
          <source src={bgVideoHD} type='video/mp4' />
          <source src={bgVideo} type='video/webm' />
        </BgVideo>
        <OverLay></OverLay>
        <TextContent>
          <TitleSmall>{langData.bannerLang[0]}</TitleSmall>
          <TitleLarge>{langData.bannerLang[1]}</TitleLarge>
          <TitleMedium>{langData.bannerLang[2]}</TitleMedium>
          <RowContainer>
            <CallToAction>{langData.bannerLang[3]}</CallToAction>
            <CallToAction>{langData.bannerLang[4]}</CallToAction>
          </RowContainer>
        </TextContent>
      </HomeBanner>
      <HomeTriviaContaner>
        <HomeInnerTriviaContainer>
          <TriviaContainer>
            <TriviaImageGreenBorder
              src={oceanWaterImg}
              placeholder={langData.triviaLangOne[3]}
            />
            <TriviaTitle>{langData.triviaLangOne[0]}</TriviaTitle>
            <TriviaUnderTitle>{langData.triviaLangOne[1]}</TriviaUnderTitle>
            <TriviaInfoText>{langData.triviaLangOne[2]}</TriviaInfoText>
          </TriviaContainer>
          <TriviaContainerGreenBg>
            <TriviaImage
              src={farmaImg}
              placeholder={langData.triviaLangTwo[3]}
            />
            <TriviaTitle>{langData.triviaLangTwo[0]}</TriviaTitle>
            <TriviaUnderTitle>{langData.triviaLangTwo[1]}</TriviaUnderTitle>
            <TriviaInfoTextLight>
              {langData.triviaLangTwo[2]}
            </TriviaInfoTextLight>
          </TriviaContainerGreenBg>
          <TriviaContainer>
            <TriviaImageGreenBorder
              src={nathanDiasImg}
              placeholder={langData.triviaLangThree[3]}
            />
            <TriviaTitle>{langData.triviaLangThree[0]}</TriviaTitle>
            <TriviaUnderTitle>{langData.triviaLangThree[1]}</TriviaUnderTitle>
            <TriviaInfoText>{langData.triviaLangThree[2]}</TriviaInfoText>
          </TriviaContainer>
        </HomeInnerTriviaContainer>
      </HomeTriviaContaner>
      <UnitInfoContainer>
        <ImgCtaContainer>
          <UnitImg
            src={unitImg}
            placeholder='Bilde av returenheten til medretur'
          />
          <UnitCtaContainer>
            <UnitCtaArrow icon={faAnglesRight} />

            <UnitCtaText>{langData.returnUnitHome[4]}</UnitCtaText>
          </UnitCtaContainer>
        </ImgCtaContainer>

        <UnitTextContainer>
          <UnitInfoTitleText>{langData.returnUnitHome[0]}</UnitInfoTitleText>
          <UnitParagraphText>{langData.returnUnitHome[1]}</UnitParagraphText>
          <UnitParagraphText>{langData.returnUnitHome[2]}</UnitParagraphText>
          <UnitParagraphText>{langData.returnUnitHome[3]}</UnitParagraphText>
        </UnitTextContainer>
      </UnitInfoContainer>
    </HomeContainer>
  );
}

export default Home;
