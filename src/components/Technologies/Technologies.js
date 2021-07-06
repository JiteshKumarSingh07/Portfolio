import React from 'react';
import { DiDjango, DiHtml5, DiCss3, DiPhotoshop, DiVisualstudio,  } from 'react-icons/di';
import { SiPython,SiJavascript,SiJava , SiCplusplus,SiAdobeaftereffects } from 'react-icons/Si';
import { BiCodeBlock } from 'react-icons/Bi';
import { FaTools,FaDev   } from 'react-icons/Fa';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id = "tech">
    <SectionDivider/>
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked with many differnet Technologies in the world of programming 
      from C to developing backend using django.
    </SectionText>
    <List>
      <ListItem>
        <FaTools size="3rem"/>
        <ListContainer>
          <ListTitle>Tools used</ListTitle>
          <ListParagraph>
            Experienced with <br/> <br/>
            <DiVisualstudio size="4rem"/> <DiPhotoshop size="4.1rem"/>  <SiAdobeaftereffects size="3.7rem"/> 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaDev size="3rem"/>
        <ListContainer>
          <ListTitle>Web-Dev</ListTitle>
          <ListParagraph>
            Experienced with <br/><br/>
            <DiDjango size="5rem"/> <DiHtml5 size="5rem"/> <DiCss3 size="5rem"/>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <BiCodeBlock size="3rem"/>
        <ListContainer>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>
            Experienced with <br/> <br/> 
            <SiCplusplus size="4rem"/>   <SiPython size="4rem"/> <SiJava size="4rem"/> <SiJavascript size="5rem"/>  
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
