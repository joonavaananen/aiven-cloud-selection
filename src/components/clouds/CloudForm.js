import React from 'react';
import { Form, Dropdown } from 'semantic-ui-react'
import cloudProviders from '../../data/cloud-providers';

const CloudForm = ({ providers, handleChange }) => {
  const getFormattedProviders = () => {
    return providers && providers.length
      ? providers.map(provider => {
        return {
          key : provider,
          text : cloudProviders[provider],
          value : provider
        };
      })
      : [];
  };

  return (
    <Form>
      <Form.Field>
        <Dropdown
          id='cloud-providers'
          name='cloudProviders'
          placeholder='Cloud Providers'
          fluid
          selection
          multiple
          options={getFormattedProviders()}
          onChange={handleChange}
        />
      </Form.Field>
    </Form>
  );
}

export default CloudForm;
