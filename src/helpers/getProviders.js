import _ from 'lodash';

/**
 * Get unique providers from clouds
 * 
 * @param {Array} clouds - Includes provider info
 * 
 * @returns {Array} - Unique cloud providers
 */

const getProviders = (clouds) => {
  return _.uniq(
    clouds.map(cloud => cloud.cloud_provider)
  );
}

export default getProviders;
