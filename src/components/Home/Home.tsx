import React, {useState} from 'react'
import Graph from '../Graph/Graph.tsx';
import Table from '../Table/Table.tsx';
import './Home.css';

export default function Home({ testData }) {
  let [pageNum,setPageNum] = useState(1)
  let right = pageNum * 10
  let left = right - 10 

  let blockData = testData.slice(left,right)

  let labels = blockData.map(block => block.block_number)
  let blockrewards = blockData.map(block => (block.miner_reward / (10 ** 18)).toFixed(4))
  let gasfees = blockData.map(block => block.miner_reward / block.gas_used / (10 ** 9))
  let numBundles = blockData.map(block => block.transactions.length)

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
      },
      {
        label: 'Number of Bundles',
        data: numBundles,
        borderColor: 'rgb(56, 56, 56)',
        backgroundColor: 'green',
      }
    ],

  };

  let displayGraph = testData ? <Graph options={options} data={data} /> : null
  let displayTable = testData ? <Table data={blockData} pageNum={pageNum} setPageNum={setPageNum} left={left} right={right} /> : null

  return (
    <div className='home-container'>
      <div className='home-title'>⚡️🤖 Latest Blocks</div>
      <div className='options'>
          {/* tabs to select Table or table with information */}
      </div>
      {displayTable}
      <div className="graph-container">
        {displayGraph}
      </div>
    </div>
  );
}


