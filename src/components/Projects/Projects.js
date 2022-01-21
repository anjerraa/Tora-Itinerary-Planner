import React, { useState, useReducer } from 'react';

import { FormTitle, FormInput, FormTextArea } from './ProjectsStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import { ButtonPrimary, ButtonSecondary } from '../../styles/GlobalComponents/Button';
import { DateRangeInput } from '@datepicker-react/styled'
import { ThemeProvider } from 'styled-components';

const initialState = {
  startDate: null,
  endDate: null,
  focusedInput: null,
}

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

const Projects = () => {
  
  // Initialise states for the trip name, description and dates.
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Section nopadding id="new-trip">
      <SectionDivider/>
      <SectionTitle main>Create a new trip</SectionTitle>
      <SectionText>
        Add the basic details of your trip, such as name, description, dates and location.
        <form>

          {/* Create an input field for the trip name. */}
          <FormTitle>Trip name:</FormTitle>
          <FormInput 
            type="text"
            required
            maxLength="20"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {/* Create a text area for the trip description. */}
          <FormTitle>Description:</FormTitle>
          <FormTextArea 
            id="text" 
            maxLength="150"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <FormTitle>Dates:</FormTitle>
          <br/>
          <ThemeProvider theme={DateRangeTheme}>
            <DateRangeInput
              onDatesChange={data => dispatch({type: 'dateChange', payload: data})}
              onFocusChange={focusedInput => dispatch({type: 'focusChange', payload: focusedInput})}
              startDate={state.startDate} // Date or null
              endDate={state.endDate} // Date or null
              focusedInput={state.focusedInput} // START_DATE, END_DATE or null
              placement='top'
            />
          </ThemeProvider>

          <br/><br/>
          <ButtonSecondary>Add Trip!</ButtonSecondary>
        </form>
      </SectionText>
    </Section>
  )
};

export default Projects;