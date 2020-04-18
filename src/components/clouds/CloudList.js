import React, { Component } from 'react';
import { List } from 'semantic-ui-react'

class CloudList extends Component {
  render() {
    return (
      <List divided>
        {this.props.clouds.map(cloud => (
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
}

export default CloudList;
