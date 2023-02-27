import React, { useContext, useEffect } from 'react';
import {
  HomeContainer,
  HomeBanner,
  BgVideo,
  OverLay,
  TextContent,
  TitleSmall,
  TitleLarge,
  TitleMedium,
  RowContainer,
  CallToAction,
  HomeTriviaContaner,
  HomeInnerTriviaContainer,
  TriviaContainer,
  TriviaContainerGreenBg,
  TriviaImage,
  TriviaImageGreenBorder,
  TriviaTitle,
  TriviaUnderTitle,
  TriviaInfoText,
  TriviaInfoTextLight,
  UnitInfoContainer,
  ImgCtaContainer,
  UnitImg,
  UnitCtaContainer,
  UnitCtaArrow,
  UnitCtaText,
  UnitTextContainer,
  UnitInfoTitleText,
  UnitParagraphText,
  CtaLinkReturnUnit,
} from '../../components/styled/styled';

import { Context } from '../../App';

import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';

import bgVideo from '../../video/medsfall.webm';
import bgVideoHD from '../../video/medsfall.mp4';

import farmaImg from '../../images/Farmas.webp';
import nathanDiasImg from '../../images/NathanDias.webp';
import oceanWaterImg from '../../images/OceanWater.webp';
import unitImg from '../../images/returunit.webp';

function Home() {
  const { langData } = useContext(Context);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

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
            <CallToAction to='/our-vision'>
              {langData.bannerLang[3]}
            </CallToAction>
            <CallToAction to='/contact-us'>
              {langData.bannerLang[4]}
            </CallToAction>
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
          <CtaLinkReturnUnit to='/return-unit'>
            <UnitCtaContainer>
              <UnitCtaArrow icon={faAnglesRight} />

              <UnitCtaText>{langData.returnUnitHome[4]}</UnitCtaText>
            </UnitCtaContainer>{' '}
          </CtaLinkReturnUnit>
        </ImgCtaContainer>

        <UnitTextContainer>
          <UnitInfoTitleText>{langData.returnUnitHome[0]}</UnitInfoTitleText>
          <UnitParagraphText>{langData.returnUnitHome[1]}</UnitParagraphText>
          <UnitParagraphText>{langData.returnUnitHome[2]}</UnitParagraphText>
          <UnitParagraphText style={{ borderBottom: 'none' }}>
            {langData.returnUnitHome[3]}
          </UnitParagraphText>
        </UnitTextContainer>
      </UnitInfoContainer>
    </HomeContainer>
  );
}

export default Home;
