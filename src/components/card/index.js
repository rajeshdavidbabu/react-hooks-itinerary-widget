import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

// color picker
import ColorPalette from '../../resources/color-palette';

// helper
import utility from '../../utility';

// icons
import { Circle } from 'styled-icons/fa-solid/Circle';
import { Circle as HollowCircle } from 'styled-icons/fa-regular/Circle';

// sub-component imports
import Ground from './Ground';
import Flight from './Flight';
import Airport from './Airport';

// styled components
const sharedFlexBoxWrapper = css`
  width: 100%;
  display: flex;
`;

const Wrapper = styled.div`
  ${sharedFlexBoxWrapper};
  position: relative;
`;

const BreadCrumb = styled.div`
  margin: 1.2rem 0.1rem 0rem 0.325rem;
  border-left: 2px solid ${ColorPalette.primaryBGText};
`;

const TimeInfo = styled.div`
  font-size: 1em;
  margin-left: 0.5rem;
  margin-top: 0.05rem;
`;

const CardWrapper = styled.div`
  ${sharedFlexBoxWrapper};
  flex-direction: column;
`;

const CardDetails = styled.div`
  margin: 1rem;
  border-radius: 0.5rem;
  color: ${ColorPalette.primaryCardText};
  background: ${ColorPalette.primaryFG};
  opacity: ${props => props.type === "GROUND" ? 1 : 0.75};
  padding: ${props => props.type === "FLIGHT" ? "0rem" : "1rem"};
`;

const sharedCircleStyle = css`
  left: 0rem;
  top: 0.25rem;
  font-size: 0.75em;
  position: absolute;
`;

const StyledCircle = styled(Circle)`
  ${sharedCircleStyle};
`;

const StyledHollowCircle = styled(HollowCircle)`
  ${sharedCircleStyle};
`;

// circle picker for active journey
const CustomCircle = ({ type }) => {
  if(type === 'GROUND') {
    return <StyledCircle size="1em" />;
  } else {
    return <StyledHollowCircle size="1em" />;
  }
};

// sub component identifier
const CardDetailComponent = (props) => {
  if(props.type === 'GROUND') {
    return <Ground {...props}/>;
  } else if(props.type === 'AIRPORT') {
    return <Airport {...props} />;
  } else if(props.type === 'FLIGHT') {
    return <Flight {...props} />
  } else {
    return <div />
  }
}

// higher-order component
const CardHoC = (CardDetailComponent) => (props) => (
  <Wrapper>
    <BreadCrumb>
      <CustomCircle {...props}/>
    </BreadCrumb>
    <CardWrapper>
      <TimeInfo> {utility.getLocalTime(props.departure)} </TimeInfo>
      <CardDetails type={props.type}> 
        <CardDetailComponent {...props} />
      </CardDetails>
    </CardWrapper>
  </Wrapper>
);

const Card = CardHoC(CardDetailComponent);

// prop types
Card.propTypes = {
  type: PropTypes.string.isRequired,
  departure: PropTypes.number.isRequired
};

export default Card;
