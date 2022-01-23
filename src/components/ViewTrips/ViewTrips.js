import React, { useState, useEffect } from 'react';

import { SliderBody } from './ViewTripsStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import TripList from './TripList';
import { ButtonSecondary } from '../../styles/GlobalComponents/Button';

const ViewTrips = () => {

  // Initially there is no existing trip, page is loading and there is no error.
  const [trips, setTrips] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function runs on every data render.
  // useEffect is run once on the initial render, not when the data changes.
  useEffect(() => {
    // Get the trips data.
    fetch("http://localhost:8000/trips")
      .then(res => {
        if (!res.ok) {
          throw Error('Could not fetch the data for that resource.')
        }
        // Passes the JSON string into a JS object.
        return res.json();
      })
      .then(data => {
        setTrips(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  }, []);

  return (
    <Section nopadding id="view-trips">
      <SectionDivider/><br/>
      <SectionTitle main>View your trips</SectionTitle><br/>

      <SectionText>
        { trips.length ? (
          <SectionText>Hover onto a trip to start customising your itinerary.<br/></SectionText>
        ) : (
          <SectionText>You have no existing trips.<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></SectionText>
        ) }
      </SectionText><br/><br/>

      <SliderBody>
        { error && <SectionText>{error}</SectionText>}
        { isLoading && <SectionText>Loading...</SectionText>}
        {/* Evaluates `trips`: if NOT null, then map the objects. */}
        <TripList trips={trips}/>
      </SliderBody>

    </Section>
  );
};

export default ViewTrips;