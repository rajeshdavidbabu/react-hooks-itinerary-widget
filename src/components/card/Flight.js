import React from 'react';
import PropTypes from 'prop-types';
import styled, { css }  from 'styled-components';

// color picker
import ColorPalette from '../../resources/color-palette';

// helper
import utility from '../../utility';

// styled components
const sharedFlexBoxCSS = css`
  display: flex;
  align-items: center;
`;

const FlightInfo = styled.div`
  ${sharedFlexBoxCSS};
  padding: 0.3rem;
  justify-content: space-between;
`;

const FlightStationInfo = styled.div`
  ${sharedFlexBoxCSS};
  padding: 0.5rem;
  font-size: 1.5em;
  justify-content: space-evenly;
  color: ${ColorPalette.primaryBGText}
  background: ${ColorPalette.primaryCardText}
`;

const FlightIcon = styled.div`
  ::before {
    content: '✈️';
    font-size: 2em;
  }
`;

const FlightStatus = styled.span`
  padding: 0.15rem;
  font-size: 0.75rem;
  border-radius: 0.25rem;
  color: ${ColorPalette.primaryCardText};
  background: ${ColorPalette.primaryStatusText};
`;

// exported component
const Flight = ({ origin, destination, detail }) => {
  return(
    <React.Fragment>
      <FlightInfo>
        <span>{detail.flight_number}</span>
        <span>Boarding {utility.getLocalTime(detail.boarding)}</span>
      </FlightInfo>
      <FlightStationInfo>
        {origin.value} <FlightIcon/> {destination.value}
      </FlightStationInfo>
      <FlightInfo>
        <span>Gate {detail.gate}</span>
        <span>Seat {detail.seat}</span>
        <FlightStatus>{detail.status}</FlightStatus>
      </FlightInfo>
    </React.Fragment>
  );
}

// prop types
Flight.propTypes = {
  origin: PropTypes.shape({
    value: PropTypes.string.isRequired,
    type: PropTypes.string
  }),
  destination: PropTypes.shape({
    value: PropTypes.string.isRequired,
    type: PropTypes.string
  }),
  detail: PropTypes.shape({
    gate: PropTypes.string.isRequired,
    seat: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired
  })
};

export default Flight;