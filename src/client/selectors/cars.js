import _ from 'lodash';

export default (cars, { sortBy }) => _.sortBy(cars, sortBy);
