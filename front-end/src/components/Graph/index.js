import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';

let width = window.innerWidth/1.1;
let height = window.innerHeight/1.2;

export default function Graph({ data }) {
  const [nodes, setNodes] = useState(data);

  useEffect(() => {

    let links = [];
    
    nodes.map((value, index) => {
      links.push({ source: value.parentId, target: value.id })
    });

    const svg =  d3.select("#my_dataviz")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      width = +svg.attr("width"),
      height = +svg.attr("height");
    
    const simulation = d3.forceSimulation()
      .force("link", d3.forceLink().id(function(d) {
        return d.id;
      }))
      .force("charge", d3.forceManyBody())
      .force("center", d3.forceCenter(width / 2, height / 2));
    
    svg.append("rect")
      .attr("width", width)
      .attr("height", height)
      .style("fill", "none")
      .style("pointer-events", "all")
      .call(d3.zoom()
      .scaleExtent([1 / 2, 4])
      .on("zoom", zoomed));
    
    const link = svg.append("g")
      .attr("class", "links")
      .selectAll("line")
      .data(links)
      .enter().append("line")
      .style("stroke-width", '3px')
      .style("stroke", "#999")
      .style("fill-opacity", 0.6)
    
    const node = svg.append("g")
      .attr("class", "nodes")
      .selectAll("circle")
      .data(nodes)
      .enter()
      .append("circle")
      .attr("r", 35)
      .style("fill", d => d.gender === "M"  ? "#5E6BE3" : "#E786D7")
      .style("stroke-width", 3)
      .style("stroke", d => "black")
      .call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended))

    const label = svg.append("g")
    .selectAll(".mytext")
    .data(nodes)
    .enter()
    .append("text")
      .text(function (d) { return d.name; })
      .style("text-anchor", "middle")
      .style("fill", d => d.gender === "M"  ? "white" : "white")
      .style("font-family", "Arial")
      .style("font-weight", "bold")
      .style("font-size", 12);

    simulation
      .nodes(nodes)
      .on("tick", ticked);
    
    simulation.force("link")
      .links(links).distance(400)
    
    function zoomed(event) {
      node.attr("transform", event.transform);
      link.attr("transform", event.transform);
      label.attr("transform", event.transform);
    }
    
    function ticked() {
      node
      .attr("cx", d => d.x)
      .attr("cy", d => d.y)
    
    link
      .attr("x1", d => d.source.x)
      .attr("y1", d => d.source.y)
      .attr("x2", d => d.target.x)
      .attr("y2", d => d.target.y)

    label
      .attr("x", d => d.x)
      .attr("y", d => d.y + 4);
    }
    
    function dragstarted(event, d) {
      if (!event.active) simulation.alphaTarget(.03).restart();
      d.fx = d.x;
      d.fy = d.y;
    }
    
    function dragged(event, d) {
      d.fx = event.x;
      d.fy = event.y;
    }
    
    function dragended(event, d) {
      if (!event.active) 
        simulation.alphaTarget(0);
      
      d.fx = d.x;
      d.fy = d.y;
    }
    
  }, [])

  return  <div id="my_dataviz"></div>
}