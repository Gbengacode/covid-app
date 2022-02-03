import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import CountUp from 'react-countup';
import {
  Container, StateContainer, StateArrow, RegionAllTitle,
  RegionContainer, RegionTitle, Confirmed, Death, Recovered, Open,
  RegionAllContainer, TotalDeath, TotalRecovered, TotalOpencase,
  StateName, StateText, StateFigure,
} from '../../assets/styles/cardStyles';

const CardDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const covidData = useSelector((state) => state.covidData);
  const Details = covidData[0].regions.filter((region) => region.name === location.state.name);
  // console.log(Details[0].today_confirmed);
  return (
    <Container>
      <StateContainer>
        <StateArrow onClick={() => { navigate('/'); }}>
          <AiOutlineArrowLeft />
          {' '}
        </StateArrow>
        <StateName>
          {Details[0].name}
          {' '}
        </StateName>
        <StateText>Total case confirmed</StateText>
        <StateFigure><CountUp end={Details[0].today_confirmed} duration={3} /></StateFigure>
      </StateContainer>
      <RegionContainer>
        <RegionTitle><h3>Region Breakdown</h3></RegionTitle>
        <Confirmed>
          <h4>Confirmed Cases Today</h4>
          <p><CountUp end={Details[0].today_new_confirmed} duration={3} /></p>
        </Confirmed>
        <Death>
          {' '}
          <h4>Number of Death</h4>
          <p><CountUp end={Details[0].today_new_deaths} duration={3} /></p>
        </Death>
        <Recovered>
          <h4>Number of Recovered</h4>
          <p><CountUp end={Details[0].today_new_recovered} duration={3} /></p>
        </Recovered>
        <Open>
          <h4>Number of Open</h4>
          <p><CountUp end={Details[0].today_new_open_cases} duration={3} /></p>
        </Open>
      </RegionContainer>
      <RegionAllContainer>
        <RegionAllTitle><h3>Region Breakdown -Over All</h3></RegionAllTitle>
        <TotalDeath>
          <h4>Total Number of Death</h4>
          {' '}
          <p><CountUp end={Details[0].today_deaths} duration={3} /></p>
        </TotalDeath>
        <TotalRecovered>
          <h4>Total Number of Recovered</h4>
          <p><CountUp end={Details[0].today_recovered} duration={3} /></p>
        </TotalRecovered>
        <TotalOpencase>
          <h4>Number of Open</h4>
          <p><CountUp end={Details[0].today_open_cases} duration={3} /></p>
        </TotalOpencase>
      </RegionAllContainer>
    </Container>
  );
};

export default CardDetails;
