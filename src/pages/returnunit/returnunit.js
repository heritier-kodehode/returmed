import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Context } from '../../App';
import ReturEnhetenImg from '../../images/returunit-removebg-preview.png';
import CheckOutImage from '../../images/checkout.webp';
import './returnunit.css';
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

  padding: 2rem 0;
  text-decoration: underline;
  color: white;
`;
const SectionIntro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const SectionIntroText = styled.p`
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

const SectionIntroTextSecond = styled.p`
  font-size: 1.6rem;
  width: 100%;

  padding: 1rem 0;
  background: #000;
`;

const SectionIntroImageFirst = styled.img`
  width: 100%;
  height: auto;

  @media (min-width: 590px) and (max-width: 990px) {
  }
  @media (min-width: 990px) {
    width: 65%;
    transform: translateX(-9rem);

    z-index: -3;
  }
`;
const SectionIntroImageSecond = styled.img`
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

const SectionDivBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const SectionBottomTextMiddle = styled.p`
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

const SectionBottomText = styled.p`
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

const SectionBottomTextDark = styled.p`
  background-color: white;
  color: #395e70;
  word-spacing: 1.5;
`;

function Returnunit() {
  const { langData } = useContext(Context);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);
  return (
    <SectionContainer>
      <SectionHeader>
        <SectionTitle>{langData.returnEnheten[0]}</SectionTitle>
      </SectionHeader>
      <SectionIntro>
        <SectionIntroImageFirst
          src={CheckOutImage}
          placeholder='checkout image/bilde'
        />
        <SectionIntroText>
          {langData.returnEnheten[1]}
          <SectionIntroTextSecond>
            {langData.returnEnheten[2]}
          </SectionIntroTextSecond>
        </SectionIntroText>
        <SectionIntroImageSecond
          src={ReturEnhetenImg}
          placeholder='return unit/returenheten'
        />
      </SectionIntro>
      <SectionDivBottom>
        <SectionBottomTextMiddle>
          {langData.returnEnhetenTextTwo[0]}
        </SectionBottomTextMiddle>
        <div className='parent'>
          <p>{langData.returnEnheten[5]}</p>

          <p>{langData.returnEnheten[6]}</p>
          <p>{langData.returnEnheten[7]}</p>
          <p>{langData.returnEnheten[8]}</p>
          <p>{langData.returnEnheten[9]}</p>
          <p>{langData.returnEnheten[10]}</p>
          <p>{langData.returnEnheten[12]}</p>
        </div>
        <SectionBottomText>
          {langData.returnEnhetenTextTwo[1]}
        </SectionBottomText>
        <SectionBottomText>
          <SectionBottomTextDark>
            {langData.returnEnhetenTextTwo[2]}
          </SectionBottomTextDark>
          {langData.returnEnhetenTextTwo[3]}
        </SectionBottomText>
      </SectionDivBottom>
    </SectionContainer>
  );
}

export default Returnunit;
