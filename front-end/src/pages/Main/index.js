import React, {useEffect, useState, useCallback} from 'react';

import Graph from '../../components/Graph'
import api from '../../services/api';
import { ImSpinner4 } from 'react-icons/im';

import { DivGraphs } from './styles';

export default function Main() {
  
  const [loadingGraph, setLoadingGraph] = useState(true);
  const [nodes, setNodes] = useState();

  const loadNodes = useCallback(async () => {
    const response = await api.get('pets');
    setNodes(response.data);
    setLoadingGraph(false)
  }, [nodes])
  
  useEffect(() => {
    loadNodes()
  }, [])

  return (
    <DivGraphs loadingGraph={loadingGraph}>
      {!loadingGraph ? <h1>Grafos</h1> : <ImSpinner4 size={100}/>}
      {!loadingGraph ? <Graph data={nodes}/> : <></>}
    </DivGraphs>
  );
}