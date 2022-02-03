import styled from 'styled-components';

export const CardContainer = styled.div`
display: flex;
flex-wrap: wrap;
@media (min-width: 992px){ 
  display: flex;
  
}
`;

export const CardArrow = styled.div`
    color: var(--white);
    
`;

export const CardName = styled.div`

 p {
    color: var(--white);
    font-size: 1.2rem;
    font-family: 'Lato',sans-serif;
    font-weight: 300;
    margin: 0;
     
 }`;

export const CardFigure = styled.div`
p {
color: var(--white);
font-family: 'Lato',sans-serif;
margin: 0;
}`;

export const CardBody = styled.div`
display: flex;
width: 50vw;
margin-top: 20px;
flex-direction: column;
gap: 10px;
padding: 20px;
cursor: pointer;
background: var(--second);
&:nth-child(2n + 1){
    background: var(--first);
};
 @media (min-width: 992px) {
    flex: 50%;
 }
`;

export const Container = styled.div`
background: var(--first)`;

export const StateContainer = styled.div`
display: flex;
flex-direction: column;
background: var(--first);
padding: 20px;
`;

export const StateName = styled.h2`
   color: var(--white);
   font-size: 1.2rem;
   font-family: 'Lato', sans-serif;
   margin-bottom: 5px;
`;

export const StateText = styled.h2`
color: var(--white);
font-family: 'Lato',sans-serif;
font-size: 1.2rem;`;
export const StateArrow = styled.div`
  color: var(--white);
  font-size: 1.0rem;
`;

export const StateFigure = styled.span`
color: var(--white);
font-size: 1.3rem;
font-weight: 400;`;

export const RegionContainer = styled.div`
background: var(--third);`;

export const RegionTitle = styled.div`
  background: var(--second);
  padding: 10px 20px;
  font-family: 'Lato',sans-serif;
  h3 { color: var(--white);}

`;

export const Confirmed = styled.div`
display: flex;
justify-content:space-between;
padding: 20px;

 h4 { color: var(--white);
     font-family: 'Lato',sans-serif;
     margin: 0}
 p { color: var(--white);
    font-family: 'Lato',sans-serif;
    margin: 0}
`;

export const Death = styled.div`
display: flex;
justify-content:space-between;
padding: 20px;

 h4 { color: var(--white);
     font-family: 'Lato',sans-serif;
     margin: 0}
 p { color: var(--white);
     margin: 0}
`;

export const Recovered = styled.div`
display: flex;
justify-content:space-between;
padding: 20px;

 h4 { color: var(--white);
     margin: 0}
 p { color: var(--white);
margin: 0}`;

export const Open = styled.div`
display: flex;
justify-content:space-between;
padding: 20px;

 h4 { color: var(--white);
     margin: 0}
 p { color: var(--white);
margin: 0}`;

export const RegionAllContainer = styled.div`
background: var(--third);`;

export const RegionAllTitle = styled.div`
  background: var(--second);
  padding: 10px 20px;
  h3 { color: var(--white);}

`;

export const TotalDeath = styled.div`
display: flex;
justify-content:space-between;
padding: 20px;

 h4 { color: var(--white);
     margin: 0}
 p { color: var(--white);
margin: 0}`;

export const TotalRecovered = styled.div`
display: flex;
justify-content:space-between;
padding: 20px;

 h4 { color: var(--white);
     
     margin: 0}
 p { color: var(--white);
margin: 0}`;

export const TotalOpencase = styled.div`
display: flex;
justify-content:space-between;
padding: 20px;

 h4 { color: var(--white);
     margin: 0}
 p { color: var(--white);
margin: 0}`;
