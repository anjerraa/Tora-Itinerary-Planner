import React, { useState, useReducer } from 'react';

import { FormTitle, FormInput, FormTextArea } from './CreateTripStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import { ButtonPrimary, ButtonSecondary } from '../../styles/GlobalComponents/Button';
import { DateRangeInput } from '@datepicker-react/styled'
import { ThemeProvider } from 'styled-components';

// Initialise the state of the date range picker.
const initialState = {
  startDate: null,
  endDate: null,
  focusedInput: null,
}

// Helper function for the date range picker state.
function reducer(state, action) {
  switch (action.type) {
    case 'focusChange':
      return {...state, focusedInput: action.payload}
    case 'dateChange':
      return action.payload
    default:
      throw new Error()
  }
}

// Theme for the date range picker.
const DateRangeTheme = {
  breakpoints: ['32em', '48em', '64em'],
  reactDatepicker: {
    daySize: [36, 40],
    fontFamily: 'Space Grotesk',
    colors: {
      accessibility: '#ffe5d9',
      selectedDay: '#ffe5d9',
      selectedDayHover: '#ffe5d9',
      primaryColor: '#fec5bb',
    },
  },
}

const CreateTrip = () => {
  
  // Initialise states for the trip name, description and dates.
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [dates, dispatch] = useReducer(reducer, initialState);
  const [isPending, setIsPending] = useState(false);

  const HandleSubmit = (e) => {
    // Prevent page from refreshing when "Add Trip" button is clicked.
    e.preventDefault();
    // Save the basic details of the trip.
    const NewTrip = { location, description, dates};
    setIsPending(true);
    fetch('http://localhost:3000/#view-trips', {
      method: 'POST',
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(NewTrip)
    }).then(() => {
      console.log('new blog added');
      setIsPending(false);
    })
  }

  return (
    <Section nopadding id="create-trip">
      <SectionDivider/>
      <br/>
      <SectionTitle main>Create a new trip</SectionTitle>
      <br/>
      <SectionText>

        Add the basic details of your trip, such as name, description, dates and location.
        <br/><br/>
        <form onSubmit={HandleSubmit}>

          {/* Create an input field for the trip name. */}
          <FormTitle>Location:</FormTitle>
          <FormInput 
            type="text"
            required
            maxLength="40"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

          {/* Create a text area for the trip description. */}
          <FormTitle>Description:</FormTitle>
          <FormTextArea 
            id="text" 
            maxLength="150"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          {/* Create a date range picker. */}
          <FormTitle>Dates:</FormTitle>
          <br/>
          <ThemeProvider theme={DateRangeTheme}>
            <DateRangeInput
              onDatesChange={data => dispatch({type: 'dateChange', payload: data})}
              onFocusChange={focusedInput => dispatch({type: 'focusChange', payload: focusedInput})}
              startDate={dates.startDate} // Date or null
              endDate={dates.endDate} // Date or null
              focusedInput={dates.focusedInput} // START_DATE, END_DATE or null
              placement='top'
              required
            />
          </ThemeProvider>
          <br/><br/>

          {/* Submit event. */}
          {!isPending && <ButtonSecondary href="#view-trips">Add Trip!</ButtonSecondary>}
          {isPending && <ButtonSecondary disabled href="#view-trips">Add Trip...</ButtonSecondary>}
        </form>
      </SectionText>
    </Section>
  )
};

export default CreateTrip;