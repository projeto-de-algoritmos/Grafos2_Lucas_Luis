import React, {useEffect, useState, useCallback} from 'react';

import Graph from '../../components/Graph'
import api from '../../services/api';
import { ImSpinner4 } from 'react-icons/im';
import Selector from '../../components/Selector';

import { Container, DivGraphs, SelectContainer, Container2 } from './styles';

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
    
    getNames(response.data);
    
    setLoadingGraph(false);
  }, [nodes])
  
  const getNames = useCallback((nodes) => { 
    let names = [];
    
    nodes.map((value, index) => {
      names.push(value.name)
    });

    setNames(names);
  }, [])

  const submit = useCallback(async () => {
    await api.get(`/dijkstra/16/2`);
  }, [])

  useEffect(() => {
    loadNodes()
  }, [loadingGraph])

  return (
    <Container>
      <DivGraphs loadingGraph={loadingGraph}>
        {/* {!loadingGraph ? <h1>Grafos</h1> : <ImSpinner4 size={100}/>} */}
        {!loadingGraph ? <Graph data={nodes}/> : <></>}
      </DivGraphs>

       <SelectContainer>
        
         <div>
           ponto de partida
          <Selector
            onChange={handdleStartingPoint}
            options={names}
          />
        </div>

      <div>
        ponta de chegada
        <Selector
          onChange={handdleArrivalPoint}
          options={names}
        />
      </div>
      
      {/* <div><button>fasdfasd</button></div> */}
      <button onClick={submit}>PLAY</button>
      </SelectContainer> 
    </Container>
  );
}