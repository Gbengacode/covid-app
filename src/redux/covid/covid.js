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
    console.log(error);
  }
};

export const fetchDetail = () => async () => {
  try {
    const response = await Axios.get('https://api.covid19tracking.narrativa.com/api/country/spain?date_from=2020-03-20&date_to=2020-03-22');
    console.log(response.data.dates);
  } catch (error) {
    console.log(error);
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
