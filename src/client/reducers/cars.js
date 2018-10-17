import constants from '../constants';

const initialState = [];

const cars = (state = initialState, action) => {
  switch (action.type) {
    case constants.LOAD_CARS:
      return action.payload;
    default:
      return state;
  }
};

export default cars;
