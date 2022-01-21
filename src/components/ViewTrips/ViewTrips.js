import React, { useState } from 'react';

import { DropDown, BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ViewTripsStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import SliderTrips from './SliderTrips';

const ViewTrips = () => {

  // Initialise the state of the dropdown box.
  const [open, setOpen] = useState();

  const handleSelect = (e) => {

    // Prevent page from refreshing when a dropdown option is clicked.
    e.preventDefault();

    console.log(e);
  }

  return (
    <Section nopadding id="view-trips">
      <SectionDivider/>
      <SectionTitle main>View trips</SectionTitle>
      <SectionText>
        Click onto a trip to start customising your itinerary!
      </SectionText>

      {/* <div>
          <DropDown id="dropdown-menu" onSelect={handleSelect}>
            <option value="all">All</option>
            <option value="current-trips">Current</option>
            <option value="upcoming-trips">Upcoming</option>
            <option value="past-trips">Past</option>
          </DropDown>
      </div> */}

      <div>
        
      </div>

    </Section>
  )
};

function DropDownMenu() {

  return (
    <div className='dropdown'>

    </div>
  )
}

export default ViewTrips;