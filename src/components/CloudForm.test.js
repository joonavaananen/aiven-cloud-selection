import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import CloudForm from './CloudForm';

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

it('CloudForm renders and calls callback successfully', () => {
  const providers = ['azure', 'aws', 'google', 'do', 'upcloud'],
        handleChange = jest.fn();

  act(() => {
    render(<CloudForm providers={providers} handleChange={handleChange} />, container);
  });

  const cloudProviderOptions = container.querySelector('#cloud-providers .menu').children;

  expect(cloudProviderOptions.length).toBe(5);
  expect(handleChange).not.toHaveBeenCalled();

  act(() => {
    cloudProviderOptions[0].dispatchEvent(new MouseEvent('click', { bubbles: true }));
    cloudProviderOptions[1].dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });

  expect(handleChange).toHaveBeenCalledTimes(2);
});
