import React, { useState, useContext } from 'react';
import { Context } from '../../App';

import styled from 'styled-components';
import bgVideo from '../../video/videoplayback.webm';
import bgVideoHD from '../../video/videoplaybackhd.mp4';
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
`;
const BgVideo = styled.video`
  object-fit: cover;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: auto;
  z-index: -1;
  overflow: hidden;
  background-color: black;
`;

const OverLay = styled.div`
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 0;
  background: rgba(36, 56, 42, 0.8);
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
`;

const TitleLarge = styled.h1`
  color: #54b435;
  font-size: 60px;
  @media (min-width: 990px) {
    font-size: 90px;
  }
`;

const TitleMedium = styled.h2`
  color: white;
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
  background-color: #54b435;
  font-size: 22px;
  margin: 30px 10px;
  padding: 20px;
  transition: all 0.5s;
  &:hover {
    background-color: white;
    color: black;
  }
`;

function Home() {
  const { langData } = useContext(Context);
  return (
    <HomeContainer>
      <HomeBanner role='banner'>
        <BgVideo autoPlay muted loop>
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
    </HomeContainer>
  );
}

export default Home;
