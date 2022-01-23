import { SliderBody, SliderBox, SliderImgBox, SliderImg, SliderDetailBox, SliderImgOverlay, DetailsButton } from './ViewTripsStyles.js';
import { FaSearch } from 'react-icons/fa';
import TripModal from './TripModal.js';
import { useState } from 'react';

const TripList = ({ trips }) => {

  const [isOpen, setIsOpen] = useState(false);

  let random = '';

  return (
    <SliderBody>

      {/* Map over all the fetched data to make a grid of trips. */}
      {trips.map((trip) => (
        <div className='trip-preview' key={trip.id}>
          <SliderBox>

            {/* Image of the trip. */}
            <SliderImgBox>
              { trip.location === 'Santorini' ? (
                <SliderImg src='https://cdn.theculturetrip.com/wp-content/uploads/2017/06/oia_santorini_hdr_sunset.jpg' alt={trip.id}/>
              ) : (
                random = ''
              )}
              { trip.location === 'Boracay' ? (
                <SliderImg src='https://media.cntraveler.com/photos/60595fbeaa174d1449ef6899/master/w_1920%2Cc_limit/Boracay-GettyImages-657020958.jpg' alt={trip.id}/>
              ) : (
                random = ''
              )}
              { trip.location === 'Cappadocia' ? (
                <SliderImg src='https://media.cntraveler.com/photos/605961ae7b588da524cfef44/master/w_1920%2Cc_limit/Cappadocia-GettyImages-166186583.jpg' alt={trip.id}/>
              ) : (
                random = ''
              )}
              { trip.location === 'Halong Bay' ? (
                <SliderImg src='https://media.cntraveler.com/photos/605966677ef97a43a1af2c95/master/w_1920%2Cc_limit/HalongBay-GettyImages-938718364.jpg' alt={trip.id}/>
              ) : (
                random = ''
              )}
              { trip.location === 'Honshu' ? (
                <SliderImg src='https://media.cntraveler.com/photos/60596b398f4452dac88c59f8/master/w_1920%2Cc_limit/MtFuji-GettyImages-959111140.jpg' alt={trip.id}/>
              ) : (
                random = ''
              )}
              { trip.location === 'Provence' ? (
                <SliderImg src='https://media.cntraveler.com/photos/5cb63a261a7e702d60f70951/master/w_1920%2Cc_limit/Lavender-fields-Provence_GettyImages-680500373.jpg' alt={trip.id}/>
              ) : (
                random = ''
              )}

               
              {/* <SliderImg src={'https://cdn.theculturetrip.com/wp-content/uploads/2017/06/oia_santorini_hdr_sunset.jpg'} alt={trip.id}/> */}
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