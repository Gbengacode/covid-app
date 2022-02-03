import styled from 'styled-components';

export default styled.form`
  width: 100%;
  input { 
      padding: 15px 20px;
      width: 100%;
      background: var(--second);
      border: none;
      color: var(--white);
      &::placeholder {
          color: var(--white);
          font-size: 1.0rem;
          font-weight: 500;
          text-transform: capitalize;
      }
  }
`;
