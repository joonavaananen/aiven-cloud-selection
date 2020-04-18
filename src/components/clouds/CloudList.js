import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getClouds } from '../../actions/clouds';
import { List } from 'semantic-ui-react'

class CloudList extends Component {
  componentDidMount() {
    this.props.getClouds();
  }

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

const mapStateToProps = state => ({
  clouds: Object.values(state.clouds)
});

export default connect(
  mapStateToProps,
  { getClouds }
)(CloudList);
