import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Card from '../pages/Card'
import '@testing-library/jest-dom';

   it('Should be rendering text', () => {
     const Data = [
       {
         id: 1,
         name: "Missouri",
         figure: 2345
       },
       {
        id: 2,
        name: "Maryland",
        figure: 2345
       }
     ]
    render(<BrowserRouter><Card id={Data[0].id} name={Data[0].name} figure={Data[0].figure} /></BrowserRouter>)
    expect(screen.getByText(/Missouri/i)).toBeInTheDocument();
  });


    
  it('should display filter data', () => {
    const Data = [
      {
        id: 1,
        name: "Missouri",
        figure: 2345
      },
      {
       id: 2,
       name: "New york",
       figure: 2345
      }
    ]
    const hl = Data.filter(data => data.name.includes('Missouri')).map(infor => infor.name)
    const number = 2345;
    render(<BrowserRouter><Card id="1" name={hl[0]} figure={number}/></BrowserRouter>)
    expect(screen.getByText(/Missouri/i)).toBeInTheDocument();
  })


  