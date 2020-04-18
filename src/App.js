import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Clouds from './components/clouds/Clouds';
import { Container, Header } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <Provider store={store}>
      <Container>
        <Header as="h1">Aiven Cloud Selector</Header>
        <Clouds />
      </Container>
    </Provider>
  );
}

export default App;
