import React, { useState } from 'react';
import apotekImg from '../../images/apoteknatt.webp';
import havet from '../../images/havet.webp';
import medbox from '../../images/medbox.webp';
import './Carousel.css';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  margin-top: 5rem;
  width: 100%;
  position: relative;
  height: auto;
  @media (min-width: 990px) {
    margin-top: 10rem;
  }
`;

const SlideContainer = styled.div`
  cursor: pointer;

  width: 100%;

  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;

  user-select: none;
`;

const CaptionTextContainer = styled.div`
  color: white;
  text-shadow: 2px 2px #395e70;
  -webkit-text-stroke: 0.2px black;
  z-index: 100;
  font-size: 15px;

  position: absolute;
  top: 0;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;

  @media (min-width: 990px) {
    margin-top: 5rem;
  }
`;

const CaptionTextTitle = styled.h3`
  width: 60%;
  margin: 1rem auto;
  font-size: clamp(0.7rem, 2.5vw, 1.2rem);
`;

const CaptionTextUnderTitle = styled.p`
  width: 60%;
  margin: 1rem auto;
  font-size: clamp(2rem, 2.5vw, 2.5rem);
`;

const CaptionTextParagraph = styled.p`
  line-height: 2.3;
  width: 60%;
  margin: 1rem auto;
  font-size: clamp(0.7rem, 2.5vw, 1rem);
`;

const CaptionTextBottom = styled.p`
  width: 60%;
  margin: 1rem auto;
  font-size: clamp(0.7rem, 2.5vw, 1rem);
`;

const CarouselItemContainer = styled.div`
  width: 100%;
  height: 80vh;
  background-image: url(${(props) => props.bgImg});
`;

const DotsContainer = styled.div`
  position: absolute;
  bottom: 3rem;
  text-align: center;
  width: 100%;
  height: auto;
  margin: 0;
`;

function CarouselItem({ ourSlide, slideIndex }) {
  console.log(ourSlide);
  return (
    <CarouselItemContainer
      bgImg={ourSlide[slideIndex - 1]?.Bg}
      className='mySlidesCarousel fadeCarousel'
    >
      <div className='numbertext'>{slideIndex} / 3</div>

      <CaptionTextContainer>
        <CaptionTextTitle>
          {ourSlide[slideIndex - 1]?.visionTitle}
        </CaptionTextTitle>
        <CaptionTextUnderTitle>
          {ourSlide[slideIndex - 1]?.visionUnderTitle}
        </CaptionTextUnderTitle>
        <CaptionTextParagraph>
          {ourSlide[slideIndex - 1]?.visionInfoOne}
        </CaptionTextParagraph>
        <CaptionTextParagraph>
          {ourSlide[slideIndex - 1]?.visionInfoTwo}
        </CaptionTextParagraph>
        <CaptionTextBottom>
          {ourSlide[slideIndex - 1]?.visionInfoThree}
        </CaptionTextBottom>
      </CaptionTextContainer>
    </CarouselItemContainer>
  );
}

function Carousel({ lang }) {
  const [slideIndex, setSlideIndex] = useState(1);
  const [slide, setSlide] = useState([
    {
      visionTitle: lang.visionVann[0],
      visionUnderTitle: lang.visionVann[1],
      visionInfoOne: lang.visionVann[2],
      visionInfoTwo: lang.visionVann[3],
      Bg: havet,
    },

    {
      visionTitle: lang.visionInfrastruktur[0],
      visionUnderTitle: lang.visionInfrastruktur[1],
      visionInfoOne: lang.visionInfrastruktur[2],
      visionInfoTwo: lang.visionInfrastruktur[3],
      Bg: apotekImg,
    },
    {
      visionTitle: lang.visionForbruk[0],
      visionUnderTitle: lang.visionForbruk[1],
      visionInfoOne: lang.visionForbruk[2],
      visionInfoTwo: lang.visionForbruk[3],
      visionInfoThree: lang.visionForbruk[4],
      Bg: medbox,
    },
  ]);

  function changeSlide(e) {
    if (e.target.className === 'nextCarousel' && slideIndex === 3) {
      setSlideIndex(1);
    } else if (e.target.className === 'prevCarousel' && slideIndex === 1) {
      setSlideIndex(3);
    } else if (e.target.className === 'nextCarousel' && slideIndex !== 3) {
      setSlideIndex(slideIndex + 1);
    } else if (e.target.className === 'prevCarousel' && slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    }

    console.log(slideIndex);
  }

  return (
    <CarouselContainer>
      <SlideContainer className='slideshow-containerCarousel'>
        <CarouselItem ourSlide={slide} slideIndex={slideIndex} />
        <button
          href='#'
          className='prevCarousel'
          onClick={(e) => {
            changeSlide(e);
          }}
        >
          &#10094;
        </button>
        <button
          href='#'
          className='nextCarousel'
          onClick={(e) => {
            changeSlide(e);
            console.log('clicked');
          }}
        >
          &#10095;
        </button>
      </SlideContainer>

      <DotsContainer>
        <span className='dotCarousel' onClick={() => setSlideIndex(1)}></span>
        <span className='dotCarousel' onClick={() => setSlideIndex(2)}></span>
        <span className='dotCarousel' onClick={() => setSlideIndex(3)}></span>
      </DotsContainer>
    </CarouselContainer>
  );
}

export default Carousel;
