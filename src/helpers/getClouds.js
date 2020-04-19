import axios from 'axios';
import _ from 'lodash';
import { orderByDistance } from 'geolib';

/**
 * Get clouds from API, then filter and sort results
 * 
 * @param {Object} filters - Contains providers array and/or order string if provided
 * @param {Object} userPosition - Contains user position as longitude and latitude
 * 
 * @returns {Array} - Resulting cloud objects
 */

const getClouds = ((filters = {}, userPosition = {}) => {
  return axios.get('/api/clouds')
  .then(response => filterClouds(response.data.clouds, filters.providers))
  .then(clouds => sortClouds(clouds, filters.order, userPosition));
});

/**
 * Get clouds with matching providers
 * 
 * @param {Array} clouds - Clouds to filter
 * @param {Array} providers - Providers to match
 * 
 * @returns {Array} - Clouds with selected providers
 */

const filterClouds = ((clouds, providers) => {
  return (
    providers && providers.length
      ? clouds.filter(cloud => providers.includes(cloud.cloud_provider))
      : clouds // If providers not given or unknown, do nothing
  );
});

/**
 * Get clouds sorted in given order
 * 
 * @param {Array} clouds - Clouds to sort
 * @param {string} order - Order to sort by
 * @param {Object} userPosition - Contains user position as longitude and latitude
 * 
 * @returns {Array} - Sorted clouds
 */

const sortClouds = ((clouds, order, userPosition) => {
  switch(order) {
    case 'alphabet':
      return _.orderBy(clouds, 'cloud_name', 'asc');
    case 'nearest':
      return orderByDistance(userPosition, clouds);
    default: // If order not given or unknown, do nothing
  }

  return clouds;
});

export default getClouds;
