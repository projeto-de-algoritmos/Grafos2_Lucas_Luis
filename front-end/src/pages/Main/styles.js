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
      width: 90%;
  `}
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: center;

  h1{
    margin-bottom:20px;
  }

  > div{
    display: flex;
    flex-direction: column;

    align-items: flex-start;
    justify-content: center;    
    border: solid 3px black;
    border-radius: 5px;

    margin-right:10px;
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

export const SelectContainer = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;

  padding-bottom: 450px;
  width: 26%;
  
  border: solid 3px black;
    border-radius: 5px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 25px;
`;


export const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: c */
  /* width: 26%; */
`;