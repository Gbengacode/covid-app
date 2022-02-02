import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BallTriangle } from 'react-loader-spinner';
import CountUp from 'react-countup';
import {
  CountryContainer, CountryName, CountryText,
  CountryDate,
} from '../assets/styles/countryStatStyles';
import Search from '../components/mini/Search';
import { fetchCovidDataApi } from '../redux/covid/covid';

const Home = () => {
  const newDate = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`;
  const [date, setDate] = useState(newDate);
  const country = 'us';
  const covidData = useSelector((state) => state.covidData);
  const handleChangeDate = (e) => {
    setDate(e.target.value);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCovidDataApi(country, date));
  }, [date]);
  if (!covidData.length) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <BallTriangle
          heigth="100"
          width="100"
          color="#fff"
          ariaLabel="loading"
          style={{ margin: '0 auto' }}
        />
      </div>
    );
  }
  return (
    <>
      <CountryContainer>
        <CountryName>
          {covidData[0].name}
          {' '}

          {' '}
        </CountryName>
        <CountryText>
          Cases Confirmed:
          {' '}
          <CountUp end={covidData[0].today_confirmed} duration={3} />
        </CountryText>
        <CountryDate><input type="date" value={date} onChange={handleChangeDate} /></CountryDate>

      </CountryContainer>
      <Search covidData={covidData} />

    </>
  );
};

export default Home;
