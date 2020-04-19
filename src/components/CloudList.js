import React from 'react';
import { Container, List, Message } from 'semantic-ui-react'

/**
 * Render cloud list
 * 
 * @param {Array} clouds - Clouds to render
 * @param {string|boolean} error - Error message, or false if no error
 */

const CloudList = ({ clouds, error = false }) => {
  return (
    <Container>
      {error &&
        <Message negative>
          {error}
        </Message>
      }
      <List divided>
        {clouds.map(cloud => (
          <List.Item key={cloud.cloud_name}>
            <List.Content>
              <List.Header>{cloud.cloud_name}</List.Header>
              {cloud.cloud_description}
            </List.Content>
          </List.Item>
        ))}
      </List>
    </Container>
  );
}

export default CloudList;
