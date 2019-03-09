import React from 'react';
import styled from 'styled-components';
import ColorPalette from './resources/color-palette';

// helper
import utility from './utility';

// hooks
import {useState, useEffect} from 'react';

// components to import and compose
import Card from './components/card';
import Header from './components/header';
import Loading from './components/loading';
import JourneyTitle from './components/journey-title';

// url
const FETCH_ITINERARY_URL = 'http://www.mocky.io/v2/5c84279630000000326b0db8';

// styled components
const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  max-width: 400px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const CardContainer = styled.div`
  width: 100%;
  padding: 1rem;
  background: ${ColorPalette.primaryBG};
`;

// initial state
const initialState = {
  isLoading: true,
  data: {}
};

// component composition.
const Widget = () => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    utility.fetchItinerary(FETCH_ITINERARY_URL)
      .then(data => {
        setState(Object.assign({}, state, {
          isLoading: false,
          data
        }));
      })
      .catch((error) => {
        alert(`Error occured during Itinerary fetch :${error.message}, please reload !!`);
      });
  }, []);

  if(state.isLoading) {
    return <Loading />;
  }

  return (
    <Wrapper>
      <Header />
      <JourneyTitle 
        originCity={state.data.origin_city}
        destinationCity={state.data.destination_city}
      />
      <CardContainer>
        {
          state.data.segments.map((segment, index) => <Card {...segment} key={index} />) 
        }
      </CardContainer>
    </Wrapper>
  );
};

export default Widget;
