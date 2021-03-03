import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 5rem;
  text-align: center;

  > div > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
`;

export default Wrapper;
