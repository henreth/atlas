import React from 'react';
import Graph from '../Graph/Graph.tsx';
import Table from '../Table/Table.tsx';
import './Home.css';

export default function Home({ testData }) {

  let labels = testData.map(block => block.block_number)
  let blockrewards = testData.map(block => block.miner_reward)
  let gasfees = testData.map(block => block.gas_used)

  const options = {
    responsive: true,
  };

  const data = {
    labels,
    datasets: [
      {
        label: 'Gas Fees',
        data: gasfees,
        borderColor: 'rgb(56, 56, 56)',
        backgroundColor: 'red',
      },
      {
        label: 'Miner Reward',
        data: blockrewards,
        borderColor: 'rgb(56, 56, 56)',
        backgroundColor: 'blue',
      }
    ],

  };

  let displayGraph = testData ? <Graph options={options} data={data} /> : null
  let displayTable = testData ? <Table data={testData} /> : null

  return (
    <div className='home-container'>
      <div className='home-title'>⚡️🤖 Latest Blocks</div>
      <div className='options'>
          {/* tabs to select Table or table with information */}
      </div>
      {displayTable}
      {/* <div className="graph-container">
        {displayGraph}
      </div> */}
    </div>
  );
}


