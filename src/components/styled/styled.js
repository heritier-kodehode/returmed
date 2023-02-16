import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SectionContainer = styled.div`
  width: 100%;
  max-width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin: 7rem auto 0 auto;
  @media (min-width: 990px) {
    margin-top: 100px;

    flex-wrap: wrap;
  }
`;

//about.js
export const SectionContainerAbout = styled.div`
  width: 100%;
  max-width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin: 7rem auto 0 auto;
  background-color: #025955;
  color: white;
  @media (min-width: 990px) {
    margin-top: 100px;

    flex-wrap: wrap;
  }
`;

export const AboutHeader = styled.header`
  width: 100%;
  background: #385d6d;
  margin-bottom: 5rem;
  box-shadow: 0 5px 5px black;
`;

export const AboutTitle = styled.h2`
  letter-spacing: normal;
  text-transform: uppercase;
  width: 100%;
  text-align: center;
  font-size: calc(29px + (24 - 16) * (100vw - 400px) / (800 - 400));
  margin: 2rem 0;

  text-decoration: underline;
  color: white;
`;

export const AboutIntroTextContainer = styled.div`
  border-bottom: 2px solid #385d6d;
  padding: 0 0 4rem 0;
  color: white;
`;

export const AboutIntroText = styled.p`
  width: 90%;
  margin: 0 auto;
  line-height: 2;
  text-align: center;
  color: #206a5d;
  font-size: 1.6rem;
  line-height: 2;
  color: white;
  @media (min-width: 990px) {
    font-size: 1.8rem;
    width: 70%;
  }
`;

export const UserImg = styled.img`
  width: 100%;
  height: 230px;
`;
export const UserInfoContainer = styled.div`
  color: #155d3b;
`;
export const UserName = styled.h4`
  font-size: 1.2rem;
  margin: 0.4rem auto;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-decoration: underline;
`;
export const UserTitle = styled.h4`
  font-size: 1rem;
  margin: 0.4rem auto;
  background: #1c2f38;
  color: white;
  width: 100%;
  text-align: center;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const UserStory = styled.p`
  font-size: 0.8rem;
  margin: 1.4rem auto;
  line-height: 1.7;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 300px;
`;
export const UserEducation = styled.p`
  font-size: 0.8rem;
  margin: 0.4rem auto;
  color: #395e70;
  font-weight: 600;
  text-decoration: underline;
`;
export const UserEmail = styled.p`
  font-size: 0.8rem;
  margin: 0.4rem auto;
  font-weight: 800;
  margin-bottom: 10px;
`;

export const EmployeList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: 990px) {
    flex-direction: row;
  }
`;

//home

export const HomeContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 0;

  @media (min-width: 990px) {
    margin-top: 100px;
  }
`;

export const HomeBanner = styled.header`
  width: 100%;
  position: relative;
  height: 100vh;
  padding: 50px 0 100px 0;
  box-shadow: 0 2px 5px;
`;
export const BgVideo = styled.video`
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

export const OverLay = styled.div`
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 0;
  background: rgba(40, 40, 40, 0.6);
`;

export const TextContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  top: 0;
`;
export const TitleSmall = styled.h3`
  width: 70%;
  color: #effffb;
  text-align: center;
  font-size: calc(14px + (24 - 16) * (100vw - 400px) / (800 - 400));
`;

export const TitleLarge = styled.h1`
  color: #50d890;
  font-size: calc(60px + (24 - 16) * (100vw - 400px) / (800 - 400));
  text-shadow: 2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff,
    1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;
`;

export const TitleMedium = styled.h2`
  font-size: calc(12px + (24 - 16) * (100vw - 400px) / (800 - 400));
  color: #272727;
  text-align: center;
  text-shadow: 2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff,
    1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;
`;

export const RowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const CallToAction = styled(Link)`
  text-decoration: none;
  color: #fefcf3;
  border: 3px solid #e8f9fd;
  border-radius: 100px;
  background-color: #1d8554;
  font-size: clamp(16px, 1.5rem, 40px);
  font-weight: 700;
  margin: 20px 10px;
  padding: 20px;
  transition: all 0.5s;
  -webkit-text-stroke: 1px black;

  &:hover {
    background-color: white;
    color: black;
    border: 3px solid #1d8554;
  }
`;

//TRIVIA SECTION
export const HomeTriviaContaner = styled.div`
  position: relative;
  width: 100%;
`;
export const HomeInnerTriviaContainer = styled.div`
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
export const TriviaContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #395e70;
  border-bottom: 2px solid #1d8554;
  padding: 60px 0;
  text-align: center;
  height: 550px;
  cursor: pointer;
  &:hover img {
    border: 10px solid #59ce8f;
  }

  &:hover h5 {
    border: 2px solid #59ce8f;
    background-color: #59ce8f;
    color: white;
  }
`;

export const TriviaContainerGreenBg = styled(TriviaContainer)`
  background-color: #2a855a;
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

export const TriviaImage = styled.img`
  height: 250px;
  border: 10px solid white;
`;
export const TriviaImageGreenBorder = styled.img`
  height: 250px;
  border: 10px solid #2a855a;
`;
export const TriviaTitle = styled.h5`
  margin: 10px 0;
  border: 2px solid #b1d7b4;
  padding: 10px;
`;
export const TriviaUnderTitle = styled.h3`
  margin: 10px 0;
`;

export const TriviaInfoText = styled.p`
  width: 70%;
  color: #395e70;
`;

export const TriviaInfoTextLight = styled.p`
  width: 70%;
  color: #f4f7ed;
`;

//About The Unit On home page
export const UnitInfoContainer = styled.div`
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

export const ImgCtaContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 2rem;
  padding-top: 10rem;
  border-right: 0.5rem solid #36825e;
  position: relative;
  flex-basis: 1;
  width: 100%;
`;

export const UnitImg = styled.img`
  width: 35rem;
`;

export const UnitCtaContainer = styled.div`
  width: 90%;
  height: 7rem;
  display: flex;
  background-color: #36825e;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 2rem 0;
  position: absolute;
  right: 0;
  bottom: 10%;
  border-radius: 999em 40px 40px 999em;
`;

export const pulseAnimation = keyframes`
  1% {
    border: 25px solid #2a855a;
   
  }
  
  50%{
    border: 25px solid #395E70;
  }
 

  100% {
    border: 25px solid #2a855a;
  }
`;

export const UnitCtaArrow = styled(FontAwesomeIcon)`
  font-size: 124px;
  background-color: white;
  border-radius: 50%;
  padding: 20px;
  border: 25px solid #99cda9;
  height: 100%;
  color: #2a855a;
  cursor: pointer;

  animation-name: ${pulseAnimation};
  animation-duration: 0.4s;
  animation-iteration-count: infinite;

  &:hover {
    transform: scale(1.1);
    color: #99cda9;
  }
`;

export const UnitCtaText = styled.p`
  font-size: calc(20px + (24 - 16) * (100vw - 400px) / (800 - 400));
  margin-left: 60px;
  color: #f5fdff;
`;

export const UnitTextContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-basis: 1;
  padding-top: 10rem;
`;

export const UnitInfoTitleText = styled.h1`
  font-size: 4rem;
  border-bottom: 2px solid #99cda9;
  padding: 3rem 5rem;
  border-bottom-style: dashed;
  color: #339365;
`;

export const UnitParagraphText = styled.p`
  color: #395e70;
  border-bottom: 2px solid #99cda9;
  padding: 2rem 5rem;
  border-bottom-style: dashed;
  line-height: 2rem;
`;

export const CtaLinkReturnUnit = styled(Link)`
  text-decoration: none;
  color: #f5fdff;
`;

//partners.js

export const PartnersContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin: 7rem auto;
  @media (min-width: 990px) {
    margin-top: 100px;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const PartnerHeader = styled.header`
  width: 100%;
  background: #385d6d;
  margin-bottom: 5rem;
  box-shadow: 0 5px 5px;
`;

export const PartnersTitle = styled.h1`
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

export const PartnerLinkContainer = styled.a`
  height: 5rem;
  width: 100%;
  cursor: pointer;
  text-decoration: none;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  margin: 0.5rem auto;
  padding: 7rem;

  text-decoration: underline;
  display: flex;
  flex-direction: column;
  color: #1c6758;
  justify-content: space-evenly;
  line-height: 1.8rem;
  text-align: center;
  transition: all 0.4s;
  border: 4px solid #1c6758;
  box-shadow: 10px 5px 5px gray;
  &:hover {
    text-decoration: wavy underline;
    text-decoration-thickness: 2px;
    transform: translateY(-3px);
    border: 4px solid #6abe52;
    color: #6abe52;
    box-shadow: 10px 5px 5px black;
  }
  @media (min-width: 990px) {
    width: 30rem;
    margin: 1.5rem auto;
  }
`;

export const PartnerLogoContainer = styled.img`
  height: 3rem;
`;

//returnunit.js

export const SectionContainerReturnUnit = styled.div`
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

export const SectionHeader = styled.header`
  width: 100%;
  background: #385d6d;
  box-shadow: 0 5px 5px;
  @media (min-width: 990px) {
    margin-top: 0;
  }
`;

export const SectionTitle = styled.h2`
  letter-spacing: normal;
  text-transform: uppercase;
  width: 100%;
  text-align: center;
  font-size: calc(29px + (24 - 16) * (100vw - 400px) / (800 - 400));

  padding: 2rem 0;
  text-decoration: underline;
  color: white;
`;
export const SectionIntro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
export const SectionIntroText = styled.p`
  font-size: 1.6rem;
  width: 100%;
  border: 1px solid #385d6d;
  padding: 2rem 1rem;
  background-color: #395e70;
  color: white;
  line-height: 1.6;
  word-spacing: 1.5;

  @media (min-width: 590px) and (max-width: 990px) {
    width: 80%;
    transform: translateY(-2rem);
  }
  @media (min-width: 990px) {
    width: 60%;
    transform: translateY(-2rem);
  }
`;

export const SectionIntroTextSecond = styled.p`
  font-size: 1.6rem;
  width: 100%;

  padding: 1rem;
  background: #000;
  border-radius: 5px;
`;

export const SectionIntroImageFirst = styled.img`
  width: 100%;
  height: auto;

  @media (min-width: 590px) and (max-width: 990px) {
  }
  @media (min-width: 990px) {
    width: 65%;

    z-index: -3;
  }
`;
export const SectionIntroImageSecond = styled.img`
  width: 70%;
  height: auto;
  background-color: transparent;
  -webkit-filter: drop-shadow(0 0 1.5em rgba(20, 137, 82, 1));
  filter: drop-shadow(0 0 1.5em rgba(20, 137, 82, 1));

  @media (min-width: 590px) and (max-width: 990px) {
    width: 40%;
    transform: translateY(-2.5rem);
  }
  @media (min-width: 990px) {
    width: 25%;
    transform: translateX(40%);
    transform: translateY(-3.5rem);
  }
`;

export const SectionDivBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const SectionBottomTextMiddle = styled.p`
  font-size: 1.6rem;
  width: 100%;
  border: 1px solid #385d6d;
  padding: 2rem 1rem;
  background-color: #395e70;
  color: white;
  line-height: 1.6;
  word-spacing: 1.5;

  @media (min-width: 590px) and (max-width: 990px) {
    width: 80%;
    transform: translateY(-2rem);
  }
  @media (min-width: 990px) {
    width: 60%;
    transform: translateY(-5rem);
  }
`;

export const SectionBottomText = styled.p`
  border: 1px solid #385d6d;
  padding: 2rem 1rem;
  background-color: #395e70;
  color: white;
  line-height: 1.6;
  word-spacing: 1.5;
  margin-top: 1.5rem;
  font-size: 1.6rem;
  width: 100%;

  @media (min-width: 590px) and (max-width: 990px) {
    width: 80%;
    transform: translateY(-2rem);
  }
  @media (min-width: 990px) {
    width: 60%;
    transform: translateY(-2rem);
  }
`;

export const SectionBottomTextDark = styled.p`
  word-spacing: 1.5;
`;

//contactus.js

export const SectionContainerContactUs = styled.div`
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

export const SectionTitleContactUs = styled.h2`
  letter-spacing: normal;
  text-transform: uppercase;
  width: 100%;
  text-align: center;
  font-size: calc(29px + (24 - 16) * (100vw - 400px) / (800 - 400));

  padding: 2rem 0;
  text-decoration: underline;
  color: white;
`;

export const SectionIntroContactUs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: #385d6d;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
`;
export const Label = styled.label`
  color: white;
  margin: 0.5rem 0;
  font-size: 1.6rem;
`;

export const FormInput = styled.input`
  width: 25rem;
  padding: 0.5rem;
  background-color: #138851;
  color: white;
  border: none;
  outline: none;
`;

export const FormTextArea = styled.textarea`
  width: 25rem;
  resize: none;
  max-width: 25rem;
  background-color: #138851;
  color: white;
  outline: none;
  padding: 0.5rem;
  height: 15rem;
  font-size: 1.3rem;
`;
export const FormSubmitBtn = styled.button`
  width: 25rem;
  margin: 1rem 0;
  padding: 1rem 0;
  border: 2px solid white;
  font-size: 2rem;
  background-color: #385d6d;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #138851;
    font-style: oblique;
  }
  &:active {
    font-style: normal;
  }
`;

export const Comfirmationmodal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.1);
  z-index: 1;
  border-radius: 10px;
`;

export const ConfirmationText = styled.p``;

export const Errormodal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.1);
  z-index: 1;
  border-radius: 10px;
  color: black;
  display: flex;
  border: 2px solid orangered;
  align-items: center;
`;

export const ErrorModalText = styled.p`
  text-transform: uppercase;
  text-decoration: underline;
`;

export const ErrorCloseBtn = styled.button`
  padding: 0 0.5rem;
  height: 70px;
  width: 70px;
  color: white;
  background-color: black;
  cursor: pointer;
  font-size: 19px;
  border-radius: 50%;
  border: 10px solid #395e70;
  font-weight: 900;
  text-align: center;

  &:hover {
    background-color: gray;
  }
  &:active {
    background-color: white;
    color: black;
  }
`;

export const SourcesContainer = styled.div`
  width: 100%;
  padding: 0 2rem;
  background-color: #dee2e6;

  @media (min-width: 590px) and (max-width: 990px) {
    width: 80%;
    margin: 100px 0;

    flex-wrap: wrap;
  }
  @media (min-width: 990px) {
    width: 60%;
    margin: 100px 0;

    flex-wrap: wrap;
  }
`;

export const SourceText = styled.p`
  font-size: 0.8rem;
  color: gray;
  margin: 1rem 0;
  word-wrap: break-word;
`;

//blog.js

export const SectionContainerBlog = styled.div`
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

export const SectionHeaderBlog = styled.header`
  width: 100%;
  background: #385d6d;
  padding: 2rem 0;
  box-shadow: 5px 0 5px;
  @media (min-width: 990px) {
    margin-top: 0;
  }
`;

export const SectionTitleBlog = styled.h2`
  letter-spacing: normal;
  text-transform: uppercase;
  width: 100%;
  text-align: center;
  font-size: calc(29px + (24 - 16) * (100vw - 400px) / (800 - 400));

  text-decoration: underline;
  color: white;
`;

//vision.js

export const SectionContainerVision = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin: 7rem auto 0 auto;
  background-color: #025955;
  @media (min-width: 990px) {
    margin-top: 100px;

    flex-wrap: wrap;
  }
`;

export const VisionHeader = styled.header`
  width: 100%;
  background: #385d6d;
  margin-bottom: 5rem;
  box-shadow: 0 5px 5px;
`;

export const VisionTitle = styled.h2`
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

export const VisionIntroContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media (min-width: 990px) {
    flex-direction: row;
  }
`;
export const TextContainer = styled.div`
  @media (min-width: 990px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
export const ImgInIntro = styled.img`
  width: 60%;
  margin: 3rem auto 0 auto;
  @media (min-width: 990px) {
    width: 100%;
    margin: 0 auto;
  }
`;

export const Title = styled.h2`
  color: white;
  font-size: 2rem;
  margin: 2rem 0;

  @media (min-width: 990px) {
    font-size: 4rem;
  }
`;

export const IntroText = styled.p`
  color: white;
  font-size: 1.6rem;
  line-height: 1.6;

  @media (min-width: 990px) {
    font-size: 2rem;
  }
`;
