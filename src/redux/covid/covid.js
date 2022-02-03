import Axios from 'axios';

const FETCH_DATA = 'FETCH_DATA';

const handleError = (payload) => ({
  type: FETCH_DATA,
  payload,

});

const HANDLE_ERROR = 'HANDLE_ERROR';

const fetchData = (payload) => ({
  type: HANDLE_ERROR,
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
    dispatch(handleError(error));
  }
};

const initialState = [];
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload;
    case HANDLE_ERROR:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
