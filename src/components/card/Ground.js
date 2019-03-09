import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// color picker
import ColorPalette from '../../resources/color-palette';

// styled components
const CardContent = styled.div`
  display: flex;
  align-items: center;
  color: ${ColorPalette.primaryCardText};
`;

const CardIcon = styled.div`
  ::before {
    content: '🚘';
    font-size: 2em;
  }
`;

const CardText = styled.div`
  margin-left: 0.75rem;
`;

// exported component
const Ground = ({ origin }) => {
  return(
    <CardContent>
      <CardIcon />
      <CardText>
        Pick up from <br/>
        {origin.value}
      </CardText>
    </CardContent>
  );
}

// prop types
Ground.propTypes = {
  origin: PropTypes.shape({
    value: PropTypes.string.isRequired,
    type: PropTypes.string
  })
};

export default Ground;
