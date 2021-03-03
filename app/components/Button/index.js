import styled from 'styled-components';

const Button = styled.button`
  font-size: 1rem;
  font-weight: 700;
  border: 1px solid var(--app-pallete-secondary);
  background-color: transparent;
  color: var(--app-pallete-text-primary);
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  padding: 0.5rem 1rem;
  transition: all 0.25 ease-out;

  &:hover {
    background-color: var(--app-pallete-secondary);
  }
`;

export default Button;
