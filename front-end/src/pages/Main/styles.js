import styled, { keyframes, css } from 'styled-components';

export const DivGraphs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  margin-top: 20px;

  h1{
    margin-bottom:20px;
  }

  div{
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;    
    border: solid 1px black;

  }
  .links line {
  stroke: #999;
  stroke-opacity: 0.6;
}

.nodes circle {
  stroke: #fff;
  stroke-width: 2px;
}
  
`;