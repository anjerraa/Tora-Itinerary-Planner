import { SliderBody, SliderBox, SliderImgBox, SliderImg, SliderDetailBox, SliderImgOverlay, DetailsButton } from './ViewTripsStyles.js';
import { FaSearch } from 'react-icons/fa';
import TripModal from './TripModal.js';
import { useState } from 'react';

const TripList = ({ trips }) => {

  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <SliderBody>

      {/* Map over all the fetched data to make a grid of trips. */}
      {trips.map((trip) => (
        <div className='trip-preview' key={trip.id}>
          <SliderBox>

            {/* Image of the trip. */}
            <SliderImgBox>
              <SliderImg src= "https://cdn.theculturetrip.com/wp-content/uploads/2017/06/oia_santorini_hdr_sunset.jpg" alt={trip.id}/>
              <SliderImgOverlay>
                  <DetailsButton onClick={() => setIsOpen(true)}>Trip details<FaSearch style={{marginLeft: '5px'}}/></DetailsButton>
                  
                  <TripModal open={isOpen} onClose={() => setIsOpen(false)}/>
                  
              </SliderImgOverlay>
            </SliderImgBox>

            {/* Details of the trip. */}
            <SliderDetailBox>
              <ul>
                <li><b>Location:</b> {trip.location}</li><br/>
                <li><b>Description:</b> {trip.description}</li><br/>
                <li><b>Dates:</b> {trip.startDate.substr(4,2)} to {trip.endDate.substr(4,2)} {trip.endDate.substr(0,3)} {trip.endDate.substr(7,4)}</li>
              </ul>
            </SliderDetailBox>

          </SliderBox>
        </div>
      ))}
      
    </SliderBody>
  ); 
}

export default TripList;