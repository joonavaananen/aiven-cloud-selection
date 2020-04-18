import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProviders } from '../../actions/providers';
import { Form, Dropdown } from 'semantic-ui-react'
import cloudProviders from './cloud-providers';

class CloudForm extends Component {
  componentDidMount() {
    this.props.getProviders();
  }

  getFormattedProviders() {
    return this.props.providers && this.props.providers.length
      ? this.props.providers.map(provider => {
        return {
          key : provider.cloud_provider,
          text : cloudProviders[provider.cloud_provider],
          value : provider.cloud_provider
        };
      })
      : [];
  }

  render() {
    return (
      <Form>
        <Form.Field>
          <Dropdown
            id='cloud-providers'
            name='cloudProviders'
            placeholder='Cloud Providers'
            fluid
            selection
            options={this.getFormattedProviders()}
            onChange={this.props.handleProviderChange}
          />
        </Form.Field>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  providers : state.providers
});

export default connect(
  mapStateToProps,
  { getProviders }
)(CloudForm);
