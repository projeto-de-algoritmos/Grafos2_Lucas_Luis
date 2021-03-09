import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  color: #484848;

  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 18px;

  margin-right: 10px;

  & + div + div {
    margin-right: 0px;
  }
`;
