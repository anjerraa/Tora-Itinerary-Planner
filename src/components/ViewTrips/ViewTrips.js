import React, { useState } from 'react';

import { SliderBody, SliderBox, SliderImgBox, SliderImg, SliderDetailBox, SliderImgOverlay, DetailsButton } from './ViewTripsStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { FaSearch, FaPlane } from 'react-icons/fa';
import { projects } from '../../constants/constants';
const Trips = require('../../../data/db.json'); 


const CreateTrip = () => {

  const [Trips, setTrips] = useState ([
    {location: 'Santorini', description: 'Maddie\'s 20th birthday!', dates: '', id: 1},
    {location: 'Bali', description: 'Maddie\'s 21st birthday!', dates: '', id: 2},
    {location: 'Vietnam', description: 'Maddie\'s 22nd birthday!', dates: '', id: 3},
  ])

  return (
    <Section nopadding id="view-trips">
      <SectionDivider/><br/>
      <SectionTitle main>View your trips</SectionTitle><br/>
      <SectionText>
        Click onto a trip to start customising your itinerary.
      </SectionText>
      <br/><br/>
      <SliderBody>

        {Trips.map((Trip) => (
          <div className='trip-preview' key={Trip.id}>
              <SliderBox>

                {/* Image of the trip. */}
                <SliderImgBox>
                  <SliderImg src= "https://cdn.theculturetrip.com/wp-content/uploads/2017/06/oia_santorini_hdr_sunset.jpg" alt={Trip.id}/>

                  <SliderImgOverlay>
                    <DetailsButton>Trip details<FaSearch style={{marginLeft: '5px'}}/></DetailsButton>
                  </SliderImgOverlay>

                </SliderImgBox>

                {/* Details of the trip. */}
                <SliderDetailBox>
                  <ul>
                    <li><b>Location:</b> {Trip.location}</li><br/>
                    <li><b>Description:</b> {Trip.description}</li><br/>
                    <li><b>Dates: {Trip.dates}</b></li>
                  </ul>
                </SliderDetailBox>

              </SliderBox>
          </div>
        ))}
        
      </SliderBody>
    </Section>
  )
};

export default CreateTrip;