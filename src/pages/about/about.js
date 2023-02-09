import React, { useContext } from 'react';
import styled from 'styled-components';
import {
  SectionContainer,
  AboutHeader,
  AboutTitle,
  AboutIntroTextContainer,
  AboutIntroText,
  UserImg,
  UserInfoContainer,
  UserTitle,
  UserStory,
  UserEducation,
  UserEmail,
  EmployeList,
  UserName,
} from '../../components/styled/styled';
import { Context } from '../../App';
import oleAlexander from '../../images/OleAlexander.webp';
import elisabeth from '../../images/elisabeth.webp';
import larsb from '../../images/larsb.webp';
import KristineB from '../../images/kristineB.webp';
import './about.css';

function Employee({ img, name, title, education, story, email }) {
  return (
    <div className='shadow-box'>
      <UserName>{name}</UserName>
      <UserTitle>{title}</UserTitle>
      <UserImg src={img} alt={`image of ${name}`} />
      <UserInfoContainer>
        <UserEducation>{education}</UserEducation>
        <UserStory>{story}</UserStory>
        <UserEmail>{email}</UserEmail>
      </UserInfoContainer>
    </div>
  );
}

function About() {
  const { langData } = useContext(Context);
  return (
    <SectionContainer>
      <AboutHeader>
        <AboutTitle>{langData.teamIntro[0]}</AboutTitle>
      </AboutHeader>
      <AboutIntroTextContainer>
        <AboutIntroText>{langData.teamIntro[1]}</AboutIntroText>
      </AboutIntroTextContainer>
      <EmployeList>
        <Employee
          img={oleAlexander}
          name={langData.ole[0]}
          title={langData.ole[1]}
          education={langData.ole[2]}
          story={langData.ole[3]}
          email={langData.ole[4]}
        />
        <Employee
          img={elisabeth}
          name={langData.elisabeth[0]}
          title={langData.elisabeth[1]}
          education={langData.elisabeth[2]}
          story={langData.elisabeth[3]}
          email={langData.elisabeth[4]}
        />
        <Employee
          img={larsb}
          name={langData.lars[0]}
          title={langData.lars[1]}
          education={langData.lars[2]}
          story={langData.lars[3]}
          email={langData.lars[4]}
        />
        <Employee
          img={KristineB}
          name={langData.kristine[0]}
          title={langData.kristine[1]}
          education={langData.kristine[2]}
          story={langData.kristine[3]}
          email={langData.kristine[4]}
        />
      </EmployeList>
    </SectionContainer>
  );
}

export default About;
