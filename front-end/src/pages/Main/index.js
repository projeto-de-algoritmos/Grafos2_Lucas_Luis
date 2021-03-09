import React, {useEffect, useState, useCallback} from 'react';

import Graph from '../../components/Graph'
import api from '../../services/api';
import { ImSpinner4 } from 'react-icons/im';
import Selector from '../../components/Selector';

import { Container, DivGraphs, SelectContainer } from './styles';

export default function Main() {
  
  const [loadingGraph, setLoadingGraph] = useState(true);
  const [nodes, setNodes] = useState();

  const [names, setNames] = useState(); 

  const [startingPoint, setStartingPoint] = useState(''); 
  const [arrivalPoint, setArrivalPoint] = useState('');
  
  const handdleStartingPoint = useCallback(selected => {
    setStartingPoint(selected.value)
  }, [])

  const handdleArrivalPoint = useCallback(selected => {
    setArrivalPoint(selected.value)
  }, [])
  
  const loadNodes = useCallback(async () => {
    const response = await api.get('pets');
    setNodes(response.data);
    setLoadingGraph(false)
  }, [nodes])
  
  useEffect(() => {
    loadNodes()
  }, [])

  return (
    <Container>
      <DivGraphs loadingGraph={loadingGraph}>
        {/* {!loadingGraph ? <h1>Grafos</h1> : <ImSpinner4 size={100}/>} */}
        {!loadingGraph ? <Graph data={nodes}/> : <></>}
      </DivGraphs>

       <SelectContainer>
        <Selector
          onChange={handdleStartingPoint}
          options={['Pankeca', 'Torresmo', 'Laika', 'Boo']}
        />

        <Selector
          onChange={handdleArrivalPoint}
          options={['Pankeca', 'Torresmo', 'Laika', 'Boo']}
        />

      </SelectContainer> 
    </Container>
  );
}