import React from 'react';
import CloudSelector from './components/clouds/CloudSelector';
import { Container, Header } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

/**
 * Render cloud selector app
 */

const App = () => {
  return (
    <Container style={{ padding : '2rem 0' }}>
      <Header as="h1">Aiven Cloud Selector</Header>
      <CloudSelector />
    </Container>
  );
}

export default App;
