import styled from 'styled-components';

export const List = styled.ul`
  width: 250px;
  display: flex;
  flex-direction: column;
  margin-right: auto;
  margin-left: auto;
  gap: 20px;
  margin-top: 30px;

  @media (min-width: 480px) {
    width: 350px;
  }
`;

export const Text = styled.p`
  font-size: 18px;
  color: #4b494d;
`;
