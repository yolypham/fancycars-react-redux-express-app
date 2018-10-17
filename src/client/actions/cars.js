import fetchCars from '../services/carsService';
import fetchAvailabilty from '../services/availabilityService';
import constants from '../constants';

export const addCars = payload => ({
  type: constants.LOAD_CARS,
  payload
});

export const loadCars = () => async (dispatch) => {
  const cars = await fetchCars();

  const carsWithAvailable = await Promise.all(cars.map(async (car) => {
    const availability = await fetchAvailabilty(car.id);
    return ({ ...car, available: availability.available });
  }));

  dispatch(addCars(carsWithAvailable));
};
