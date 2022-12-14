import React, { useState, useContext } from 'react';
import { Context } from '../../App';

import styled from 'styled-components';
import bgVideo from '../../video/medsfall.webm';
import bgVideoHD from '../../video/medsfall.mp4';
import { Link } from 'react-router-dom';

const HomeContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 0;
  height: 100vh;
  @media (min-width: 990px) {
    margin-top: 100px;
  }
`;

const HomeBanner = styled.header`
  width: 100%;
  position: relative;
  height: 70vh;
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
  background: rgba(1, 1, 1, 0.6);
`;

const TextContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 4.5rem;
`;
const TitleSmall = styled.h3`
  color: #38e54d;
  text-align: center;
  font-size: calc(18px + (24 - 16) * (100vw - 600px) / (800 - 400));
`;

const TitleLarge = styled.h1`
  color: #9cff2f;
  font-size: calc(60px + (24 - 16) * (100vw - 600px) / (800 - 400));
`;

const TitleMedium = styled.h2`
  font-size: calc(16px + (24 - 16) * (100vw - 600px) / (800 - 400));
  color: white;
  text-align: center;
`;

const RowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CallToAction = styled(Link)`
  text-decoration: none;
  color: white;
  border: none;
  border-radius: 100px;
  background-color: #367e18;
  font-size: calc(11px + (24 - 16) * (100vw - 400px) / (800 - 400));
  margin: 20px 10px;
  padding: 20px;
  transition: all 0.5s;

  &:hover {
    background-color: white;
    color: black;
  }
`;

const HomeTriviaContaner = styled.div`
  position: relative;
`;
const HomeInnerTriviaContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const TriviaContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: red;
`;
const TriviaImage = styled.img``;
const TriviaTitle = styled.p``;
const TriviaUnderTitle = styled.h3``;
const TriviaInfoText = styled.p``;

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
            <TriviaImage />
            <TriviaTitle>{langData.triviaLangOne[0]}</TriviaTitle>
            <TriviaUnderTitle>{langData.triviaLangOne[1]}</TriviaUnderTitle>
            <TriviaInfoText>{langData.triviaLangOne[2]}</TriviaInfoText>
          </TriviaContainer>
        </HomeInnerTriviaContainer>
      </HomeTriviaContaner>
    </HomeContainer>
  );
}

export default Home;
