import { apiRoutes } from '../constants/api-routes';
import { datasetSizes } from '../constants/dataset-sizes';

export const getUsers = async (datasetSize) => {
  const type = datasetSize === datasetSizes.small ? 'getSmallUsersData' : 'getLargeUsersData';
  const url = apiRoutes[type];
  const res = await fetch(url);
  const data = await res.json();
  return data;
};