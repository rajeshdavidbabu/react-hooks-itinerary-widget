import React from 'react';
import PropTypes from 'prop-types';
import styled  from 'styled-components';

// color-picker
import ColorPalette from '../../resources/color-palette';

// icons
import { Circle } from 'styled-icons/fa-solid/Circle';

// styled components
const CardContent = styled.div`
  display: flex;
  align-items: center;
  color: ${ColorPalette.primaryCardText};
`;

const CardIcon = styled.div`
  ::before {
    content: '🏢';
    font-size: 2em;
  }
`;

const CardText = styled.div`
  margin-left: 0.75rem;
`;


const BusyInfo = styled.div`
  margin-left: auto;
  align-self: flex-end;
  color: ${ColorPalette.primaryBusyText};
`;

const StyledSolidCircle = styled(Circle)`
  font-size: 0.5em;
  vertical-align: middle;
  color: ${ColorPalette.primaryBusyText};
`;

// exported component
const Airport = ({ origin, detail }) => {
  return(
    <CardContent>
      <CardIcon />
      <CardText>
        {origin.value} {origin.type} <br/>
        Terminal {detail.terminal}
      </CardText>
      <BusyInfo>
        <StyledSolidCircle size="1em"/> Busy
      </BusyInfo>
    </CardContent>
  );
}

// prop types
Airport.propTypes = {
  origin: PropTypes.shape({
    value: PropTypes.string.isRequired,
    type: PropTypes.string
  }),
  detail: PropTypes.shape({
    terminal: PropTypes.string.isRequired
  })
};

export default Airport;