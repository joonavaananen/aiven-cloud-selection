import React, { useState, useEffect } from 'react';
import getClouds from '../../helpers/getClouds';
import getProviders from '../../helpers/getProviders';
import { Container } from 'semantic-ui-react';
import CloudList from './CloudList';
import CloudForm from './CloudForm';

const CloudSelector = () => {
  const [clouds, setClouds] = useState([]);
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    getClouds().then(clouds => {
      setClouds(clouds);
      setProviders(getProviders(clouds));
    });
  }, []);

  const handleChange = ((event, data) => {
    getClouds(data.value).then(clouds => {
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
