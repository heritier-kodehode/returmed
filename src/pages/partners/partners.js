import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../../App';

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

  @media (min-width: 990px) {
    border-top: none;
  }
`;

const PartnerLinkContainer = styled.a`
  height: 5rem;
  width: 100%;
  cursor: pointer;
  text-decoration: none;
  background-color: #379237;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  margin: 1.5rem auto;
  padding: 7rem;
  color: white;
  text-decoration: underline;

  &:hover {
    background-color: #6abe52;
    text-decoration: wavy underline;
    text-decoration-thickness: 2px;
    transform: translateY(-3px);
  }
  @media (min-width: 990px) {
    width: 30rem;
  }
`;

function Partners() {
  const { langData } = useContext(Context);
  return (
    <PartnersContainer>
      <PartnersTitle>{langData.partners[0]}</PartnersTitle>
      <PartnerLinkContainer href={links[0].link}>
        {links[0].name}
      </PartnerLinkContainer>
      <PartnerLinkContainer href={links[1].link}>
        {links[1].name}
      </PartnerLinkContainer>
      <PartnerLinkContainer href={links[2].link}>
        {links[2].name}
      </PartnerLinkContainer>
      <PartnerLinkContainer href={links[3].link}>
        {links[3].name}
      </PartnerLinkContainer>
      <PartnerLinkContainer href={links[4].link}>
        {links[4].name}
      </PartnerLinkContainer>
      <PartnerLinkContainer href={links[5].link}>
        {links[5].name}
      </PartnerLinkContainer>
    </PartnersContainer>
  );
}

export default Partners;
