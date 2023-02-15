import React, { useContext, useEffect } from 'react';
import {
  PartnersContainer,
  PartnerHeader,
  PartnersTitle,
  PartnerLinkContainer,
  PartnerLogoContainer,
} from '../../components/styled/styled';

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

function Partners() {
  const { langData } = useContext(Context);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);
  return (
    <PartnersContainer>
      <PartnerHeader>
        <PartnersTitle>{langData.partners[0]}</PartnersTitle>
      </PartnerHeader>
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
