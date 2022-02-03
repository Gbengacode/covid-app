/* eslint-disable consistent-return */
import Axios from 'axios';

const FETCH_DATA = 'FETCH_DATA';

const fetchData = (payload) => ({
  type: FETCH_DATA,
  payload,

});

export const fetchCovidDataApi = (country, date) => async (dispatch) => {
  try {
    const response = await Axios.get(`https://api.covid19tracking.narrativa.com/api/${date}/country/${country}`);
    const dateObj = response.data.dates;
    const info = Object.values(dateObj)[0].countries;
    const covidData = Object.values(info);
    dispatch(fetchData(covidData));
  } catch (error) {
    return error;
  }
};

const initialState = [];
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
