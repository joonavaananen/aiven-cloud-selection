import _ from 'lodash';

const getProviders = (clouds) => {
  return _.uniq(
    clouds.map(cloud => cloud.cloud_provider)
  );
}

export default getProviders;
