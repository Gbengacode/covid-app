import covidReducer from '../redux/covid/covid';
import data from './__mock__/mock';

test('should return the initial state', () => {
  expect(covidReducer(undefined, {})).toEqual([]);
});

test('should return result from api call', () => {
  expect(covidReducer(data, {})).toHaveLength(1);
});
