import React from 'react';
import { List } from 'semantic-ui-react'

const CloudList = ({ clouds }) => {
  return (
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
  );
}

export default CloudList;
