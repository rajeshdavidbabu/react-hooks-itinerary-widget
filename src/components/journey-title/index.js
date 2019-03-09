import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// color picker
import ColorPalette from '../../resources/color-palette';

// styled components
const Title = styled.div`
  width: 100%;
  padding: 1rem;
  font-size: 1.5em;
  text-align: center;
  color: ${ColorPalette.primaryBGText};
  background: ${ColorPalette.primaryBG};
`;

// exported component
const JourneyTitle = (props) => {
  return(
    <Title>
      {props.originCity} - {props.destinationCity}
    </Title>
  );
};

// prop types
JourneyTitle.propTypes = {
  originCity: PropTypes.string.isRequired,
  destinationCity: PropTypes.string.isRequired
};

export default JourneyTitle;