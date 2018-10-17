import constants from '../constants';

const initialState = {
  sortBy: ''
};

const filter = (state = initialState, action) => {
  switch (action.type) {
    case constants.SORT_BY:
      return {
        ...state,
        sortBy: action.sortType
      };
    default:
      return state;
  }
};

export default filter;
