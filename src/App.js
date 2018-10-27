import React from 'react';
import styled from 'styled-components';
import { AppTitle } from './components';

const AppContainer = styled.div`
  margin: 4em;
  text-align: center;
`;

const AppHeader = styled.header`
  align-items: center;
  background-color: #a9d6d3;
  color: white;
  display: flex;
  flex-direction: column;
  font-size: calc(10px + 2vmin);
  justify-content: center;
  margin-bottom: 1em;
  min-height: 7vh;
`;

const App = () => {
  return (
    <AppContainer>
      <AppHeader>
        <AppTitle title="Curly Loop" symbol="➰" />
      </AppHeader>
    </AppContainer>
  );
};

export default App;
