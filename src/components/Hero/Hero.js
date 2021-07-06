import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello, <br/>
        he is Jitesh
      </SectionTitle>
      <SectionText>
        Currently, he is an B.tech Undergrad <br/>
        He loves to write code but more than that, he will be joining Defence Forces to achieve his passion. 
      </SectionText>
      <Button onClick = {() => window.location = 'https://duckduckgo.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;