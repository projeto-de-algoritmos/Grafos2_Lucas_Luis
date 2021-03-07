import React, {useEffect, useState, useCallback} from 'react';

import Graph from '../../components/Graph'
import api from '../../services/api';

import {DivGraphs} from './styles';

export default function Main() {
  
  const [loading, setLoading] = useState(true);
  const [nodes, setNodes] = useState();

  const loadNodes = useCallback(async () => {
    const response = await api.get('pets');
    setNodes(response.data);
    setLoading(false)
  }, [nodes])
  
  useEffect(() => {
    loadNodes()
  }, [])

  return (
    <DivGraphs>
      {!loading ? <h1>Grafos</h1> : <h1>Carregando...</h1>}
      {!loading ? <Graph data={nodes}/> : <></>}
    </DivGraphs>
  );
}