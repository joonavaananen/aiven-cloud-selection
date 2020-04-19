import axios from 'axios';

const getClouds = ((providers = false) => {
  return axios.get('/api/clouds')
  .then(response => {
    return (
      providers && providers.length
      ? response.data.clouds.filter(cloud => providers.includes(cloud.cloud_provider))
      : response.data.clouds
    );
  })
});

export default getClouds;
