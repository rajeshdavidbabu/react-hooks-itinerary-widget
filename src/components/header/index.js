import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// color picker
import ColorPalette from '../../resources/color-palette';

// icons
import { ChevronLeft } from 'styled-icons/boxicons-regular/ChevronLeft';

// styled components
const Title = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: ${ColorPalette.primaryCardText};
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: ${ColorPalette.primaryFG};
`;

const StyledChevronLeft = styled(ChevronLeft)`
  font-size: 3em;
  color: ${ColorPalette.primaryCardText};
`;

// exported component
const Header = ({ title }) => {
  return(
    <Wrapper>
      <StyledChevronLeft size="1em"/>
      <Title>
        {title}
      </Title>
    </Wrapper>
  );
};

// prop types
Header.propTypes = {
  title: PropTypes.string.isRequired
};

// default props 
Header.defaultProps = {
  title: "Overview"
};

export default Header;
