import React, { useContext, useEffect } from 'react';
import { Context } from '../../App';
import ReturEnhetenImg from '../../images/returunit-removebg-preview.png';
import CheckOutImage from '../../images/checkout.webp';

import {
  SectionContainerReturnUnit,
  SectionHeader,
  SectionTitle,
  SectionIntro,
  SectionIntroText,
  SectionIntroTextSecond,
  SectionIntroImageFirst,
  SectionIntroImageSecond,
  SectionDivBottom,
  SectionBottomTextMiddle,
  SectionBottomText,
  SectionBottomTextDark,
  SourcesContainer,
  SourceText,
} from '../../components/styled/styled';

function Returnunit() {
  const { langData } = useContext(Context);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);
  return (
    <SectionContainerReturnUnit>
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
        <SourcesContainer>
          <SourceText>{langData.returnEnheten[5]}</SourceText>

          <SourceText>{langData.returnEnheten[6]}</SourceText>
          <SourceText>{langData.returnEnheten[7]}</SourceText>
          <SourceText>{langData.returnEnheten[8]}</SourceText>
          <SourceText>{langData.returnEnheten[9]}</SourceText>
          <SourceText>{langData.returnEnheten[10]}</SourceText>
          <SourceText>{langData.returnEnheten[12]}</SourceText>
        </SourcesContainer>
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
    </SectionContainerReturnUnit>
  );
}

export default Returnunit;
