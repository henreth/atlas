import React from 'react';
import Graph from '../Graph/Graph.tsx';
import './Home.css';

export default function Home({testData}) {

  let labels = testData.map(block=>block.block_number)
  let blockrewards = testData.map(block=>block.miner_reward)

  const options = {
    responsive: true,
  };

  const data = {
    labels,
    datasets: [
      {
        label: 'Miner Reward',
        data: blockrewards,
        borderColor: 'rgb(56, 56, 56)',
        backgroundColor: 'whitesmoke',
      }
    ],

  };

  let displayGraph = testData?<Graph options={options} data={data} />:null

  return (
    <div className='home-container'>
      <div className='home-title'>🤖⚡️</div>
      <div className="graph-container">
        {displayGraph}
      </div>
    </div>
  );
}


