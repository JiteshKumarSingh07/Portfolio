import React from 'react';
import { AiFillGithub, AiFillMinusCircle, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>call</LinkTitle>
          <LinkItem href="tel: 012-3456-789">012-3456-789</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>email</LinkTitle>
          <LinkItem href="mailto:jiteshjitsun@gmail.com">jiteshjitsun@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/jiteshjitsun">
        <AiFillGithub size= "2.5rem" />
        </SocialIcons>
        <SocialIcons href="https://linkedin.in/jiteshjitsun">
          <AiFillLinkedin size= "2.5rem" />
        </SocialIcons>
        <SocialIcons href="https://techtiedot.com/">
          <AiFillMinusCircle size= "2.5rem" />
        </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
