import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { ButtonPrimary, ButtonSecondary } from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { TiTick } from 'react-icons/ti';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Tora — <br/>
        An Itinerary Planner.
      </SectionTitle>
      <br/>
      <SectionText>
        Tora eliminates all the messy trip planning by keeping it <i>simple</i>.<br/>
        You can: <br/>
        <TiTick size="2.5rem"/> Add your favourite must-visit places, restaurants and activities.<br/>
        <TiTick size="2.5rem"/> Customise the itinerary for each day of the trip.<br/>
        <TiTick size="2.5rem"/> Invite friends and family to view and/or edit the itinerary.<br/>
      </SectionText>
      <br/><br/>
      <ButtonPrimary onClick={() => window.location = "#create-trip"}>Get Started</ButtonPrimary>
      <br/><br/><br/><br/><br/>
    </LeftSection>
  </Section>
);

export default Hero;