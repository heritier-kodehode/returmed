import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../../App';
import forsknlogo from '../../images/forskningsradet-logo-removebg-preview.png';
import akanlogo from '../../images/akanlogo.png';
import himlogo from '../../images/himlogo-removebg-preview.png';
import hogskulelogo from '../../images/hogskulenpaavestlandet-log-removebg-preview.png';
import nordiskbklogo from '../../images/nordiskbklogo-removebg-preview.png';
import sjukehusvlogo from '../../images/sjukehusapotekavest-logo-removebg-preview.png';
const links = [
  { name: 'Norges forsknigsråd', link: 'https://www.forskningsradet.no/' },
  { name: 'Sjukehusapoteka Vest', link: 'https://sjukehusapoteka-vest.no/' },
  { name: 'Høgskole på Vestlandet', link: 'https://www.hvl.no/' },
  { name: 'Haugaland Interkommunale Miljøverk IKS', link: 'https://him.as/' },
  {
    name: 'Akan - Arbeidslivets kompetansesenter for rus- og avhengighetsproblematikk',
    link: 'https://akan.no/',
  },
  { name: 'Nordisk Bærekraft', link: 'https://nordiskbk.no/' },
];

const PartnersContainer = styled.div`
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

const PartnersTitle = styled.h1`
  letter-spacing: normal;
  text-transform: uppercase;
  width: 100%;
  text-align: center;
  font-size: calc(29px + (24 - 16) * (100vw - 400px) / (800 - 400));
  margin: 2rem 0;
  border-top: 1px solid #6abe52;
  text-decoration: underline;
  color: #1c6758;
  @media (min-width: 990px) {
    border-top: none;
  }
`;

const PartnerLinkContainer = styled.a`
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

const PartnerLogoContainer = styled.img`
  height: 3rem;
`;

function Partners() {
  const { langData } = useContext(Context);
  return (
    <PartnersContainer>
      <PartnersTitle>{langData.partners[0]}</PartnersTitle>
      <PartnerLinkContainer
        href={links[0].link}
        style={{ backgroundColor: '' }}
      >
        <PartnerLogoContainer src={forsknlogo} placeholder={links[0].name} />
        {links[0].name}
      </PartnerLinkContainer>
      <PartnerLinkContainer href={links[1].link}>
        <PartnerLogoContainer src={sjukehusvlogo} placeholder={links[1].name} />
        {links[1].name}
      </PartnerLinkContainer>
      <PartnerLinkContainer href={links[2].link}>
        <PartnerLogoContainer src={hogskulelogo} placeholder={links[2].name} />
        {links[2].name}
      </PartnerLinkContainer>
      <PartnerLinkContainer href={links[3].link}>
        <PartnerLogoContainer src={himlogo} placeholder={links[3].name} />
        {links[3].name}
      </PartnerLinkContainer>
      <PartnerLinkContainer href={links[4].link}>
        <PartnerLogoContainer src={akanlogo} placeholder={links[4].name} />
        {links[4].name}
      </PartnerLinkContainer>
      <PartnerLinkContainer href={links[5].link}>
        <PartnerLogoContainer src={nordiskbklogo} placeholder={links[5].name} />
        {links[5].name}
      </PartnerLinkContainer>
    </PartnersContainer>
  );
}

export default Partners;
