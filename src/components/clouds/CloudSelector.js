import React, { useState, useEffect } from 'react';
import getClouds from '../../helpers/getClouds';
import getProviders from '../../helpers/getProviders';
import useGeoLocation from '../../helpers/useGeoLocation';
import { Container } from 'semantic-ui-react';
import CloudList from './CloudList';
import CloudForm from './CloudForm';

const CloudSelector = () => {
  const [clouds, setClouds] = useState([]);
  const [providers, setProviders] = useState([]);
  const [filters, setFilters] = useState({});
  const { position, error } = useGeoLocation();

  useEffect(() => {
    getClouds().then(clouds => {
      setClouds(clouds);
      setProviders(getProviders(clouds));
    });
  }, []);

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
      <CloudList clouds={clouds} />
    </Container>
  )
}

export default CloudSelector;
