import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMinusCircle } from 'react-icons/ai';
import { FaFingerprint } from 'react-icons/fa';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: "center", color: "white", marginBottom: "20px" }}>
          <FaFingerprint size= "3rem" /> <Span> &nbsp; Portfolio </Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/jiteshjitsun">
        <AiFillGithub size= "2.5rem" />
      </SocialIcons>
      <SocialIcons href="https://linkedin.in/jiteshjitsun">
        <AiFillLinkedin size= "2.5rem" />
      </SocialIcons>
      <SocialIcons href="https://techtiedot.com/">
        <AiFillMinusCircle size= "2.5rem" />
      </SocialIcons>
    </Div3>
  </Container>

);

export default Header;
