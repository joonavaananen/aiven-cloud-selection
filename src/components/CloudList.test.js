import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import CloudList from './CloudList';

let container = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('CloudList renders successfully', () => {
  const clouds = [
    {
      'cloud_description' : 'EU, Germany (Amazon Web Services)',
      'cloud_name' : 'aws-eu-central-1',
      'cloud_provider' : 'aws',
      'latitude' : 52.493774,
      'longitude' : 13.388046,
      'geo_region' : 'europe'
    },
    {
      'cloud_description' : 'EU, Germany (Amazon Web Services)',
      'cloud_name' : 'aws-eu-central-2',
      'cloud_provider' : 'aws',
      'latitude' : 51.238293,
      'longitude' : 13.927382,
      'geo_region' : 'europe'
    }
  ];

  const error = 'Whoops!'

  act(() => {
    render(<CloudList clouds={clouds} error={error} />, container);
  });

  expect(container.getElementsByClassName('list')[0].children.length).toBe(2);
  expect(container.getElementsByClassName('message')[0].textContent).toBe(error);
});
