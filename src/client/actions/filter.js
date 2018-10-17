import constants from '../constants';

export const sortBy = sortType => ({
  type: constants.SORT_BY,
  sortType
});
