import axios from 'axios';
import _ from 'lodash';
import { orderByDistance } from 'geolib';

const filterClouds = ((clouds, providers) => {
  return (
    providers && providers.length
      ? clouds.filter(cloud => providers.includes(cloud.cloud_provider))
      : clouds
  );
});

const sortClouds = ((clouds, order, userPosition) => {
  switch(order) {
    case 'alphabet':
      return _.orderBy(clouds, 'cloud_name', 'asc');
    case 'nearest':
      return orderByDistance(userPosition, clouds);
    default:
  }

  return clouds;
});

const getClouds = ((filters = {}, userPosition = {}) => {
  return axios.get('/api/clouds')
  .then(response => filterClouds(response.data.clouds, filters.providers))
  .then(clouds => sortClouds(clouds, filters.order, userPosition));
});

export default getClouds;
