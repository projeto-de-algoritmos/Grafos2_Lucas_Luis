import styled, { keyframes, css } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);

  }  to {
    transform: rotate(360deg);
  }
`;

export const DivGraphs = styled.div`
  ${props =>
    props.loadingGraph &&
    css`
      > svg {
        animation: ${rotate} 1.5s linear infinite;
        margin: auto;
      }
      height: 90%;
  `}

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h1{
    margin-bottom:20px;
  }

  div{
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;    
    border: solid 3px black;
    border-radius: 5px;
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