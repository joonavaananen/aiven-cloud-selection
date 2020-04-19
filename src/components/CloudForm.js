import React from 'react';
import { Form, Label, Dropdown } from 'semantic-ui-react'
import providerOptions from '../data/provider-options';
import orderOptions from '../data/order-options';

/**
 * Render cloud form
 * 
 * @param {Array} providers - Options to show in dropdown, to filter clouds by
 * @param {callback} handleChange - Handle dropdown on change
 */

const CloudForm = ({ providers, handleChange }) => {
  const orders = Object.keys(orderOptions);

  const getFormattedOptions = (options, translations) => {
    return options && options.length
      ? options.map(option => {
        return {
          key : option,
          text : translations[option],
          value : option
        };
      })
      : [];
  };

  return (
    <Form>
      <Form.Group widths='equal'>
        <Form.Field>
          <Dropdown
            id='cloud-providers'
            name='providers'
            placeholder='Cloud Providers'
            fluid
            selection
            multiple
            options={getFormattedOptions(providers, providerOptions)}
            onChange={handleChange}
          />
          <Label pointing>Select Cloud Providers</Label>
        </Form.Field>
        <Form.Field>
          <Dropdown
            id='cloud-order'
            name='order'
            placeholder='List Order'
            fluid
            selection
            options={getFormattedOptions(orders, orderOptions)}
            defaultValue={orders[0]}
            onChange={handleChange}
          />
          <Label pointing>Select List Order</Label>
        </Form.Field>
      </Form.Group>
    </Form>
  );
}

export default CloudForm;
