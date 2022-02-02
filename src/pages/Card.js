import React from 'react';
import { HiArrowCircleRight } from 'react-icons/hi';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import CountUp from 'react-countup';
import {
  CardArrow, CardName, CardFigure, CardBody,
} from '../assets/styles/cardStyles';

const Card = ({ name, figure }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/details/${name}`, { state: { name } });
  };
  return (

    <>
      <CardBody onClick={() => { handleClick(name); }}>
        <CardArrow><HiArrowCircleRight /></CardArrow>
        <CardName><p>{name}</p></CardName>
        <CardFigure><p><CountUp end={figure} duration={3} /></p></CardFigure>
      </CardBody>
    </>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  figure: PropTypes.number.isRequired,
};
export default Card;
