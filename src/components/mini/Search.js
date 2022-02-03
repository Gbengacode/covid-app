import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Form from '../../assets/styles/formStyles';
import { CardContainer } from '../../assets/styles/cardStyles';
import Card from '../../pages/Card';

const Search = () => {
  const covidData = useSelector((state) => state.covidData);
  const [search, setState] = useState('');
  // let filterData;
  const handleSearch = (e) => {
    setState(e.target.value);
  };

  const inputValue = search.charAt(0).toUpperCase() + search.slice(1);
  const filterData = covidData[0].regions.filter((data) => {
    if (search === '') {
      return data;
    }
    return data.name.includes(inputValue);
  }).map((info) => info);

  return (
    <>
      <Form>
        <input type="text" placeholder="search by state" value={search} onChange={handleSearch} />
      </Form>
      <CardContainer>
        { filterData.map((infor) => (
          <Card
            key={infor.id}
            name={infor.name}
            figure={infor.today_confirmed}
          />
        ))}

      </CardContainer>
    </>
  );
};

export default Search;
