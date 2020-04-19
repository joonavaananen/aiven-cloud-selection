import React, { useState, useEffect } from 'react';
import getClouds from '../helpers/getClouds';
import getProviders from '../helpers/getProviders';
import useGeoLocation from '../helpers/useGeoLocation';
import { Container } from 'semantic-ui-react';
import CloudList from './CloudList';
import CloudForm from './CloudForm';

/**
 * Handle cloud selector related states, and render cloud form and cloud list components
 */

const CloudSelector = () => {
  const [clouds, setClouds] = useState([]);
  const [providers, setProviders] = useState([]);
  const [filters, setFilters] = useState({});
  const { position, error } = useGeoLocation();

  /**
   * Get and set clouds and providers on mount
   */

  useEffect(() => {
    getClouds().then(clouds => {
      setClouds(clouds);
      setProviders(getProviders(clouds));
    });
  }, []);

  /**
   * Handle form (dropdown) changes, update filters and clouds
   * 
   * @param {Object} event - Contains info about event
   * @param {Object} data - Contains info about triggering element
   */

  const handleChange = ((event, data) => {
    const updatedFilters = { ...filters };
    updatedFilters[data.name] = data.value;
    setFilters(updatedFilters);

    getClouds(updatedFilters, position).then(clouds => {
      setClouds(clouds);
    });
  });

  return (
    <Container>
      <CloudForm providers={providers} handleChange={handleChange} />
      <CloudList clouds={clouds} error={error} />
    </Container>
  )
}

export default CloudSelector;
