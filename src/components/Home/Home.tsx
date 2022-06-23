import React, { useState } from 'react'
import Graph from '../Graph/Graph.tsx';
import Table from '../Table/Table.tsx';
import './Home.css';

export default function Home({ testData }) {
  let [pageNum, setPageNum] = useState(1)
  let right = pageNum * 15
  let left = right - 15

  let blockData = testData.slice(left, right)

  function clickLeft() {
    if (pageNum === 1) { }
    else setPageNum(pageNum - 1)
  }

  function clickRight() {
    if (pageNum === 7) { }
    else setPageNum(pageNum + 1)
  }

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
        backgroundColor: '#92e0d0',
      },
      {
        label: 'Miner Reward',
        data: blockrewards,
        borderColor: 'rgb(56, 56, 56)',
        backgroundColor: '#25c2a0',
      },
      {
        label: 'Number of Bundles',
        data: numBundles,
        borderColor: 'rgb(56, 56, 56)',
        backgroundColor: '#1a8870',
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
      <div className='results-message'>
        <div>Currently viewing results {left < 100?left + 1:91} to {right<100?right:100} of the last {testData.length} blocks</div>
        <div className='results-control'>
          <button onClick={clickLeft} disabled={pageNum===1}>{'<'}</button>
          <button onClick={clickRight} disabled={pageNum===7}>{'>'}</button>
        </div>
      </div>
      <div className="graph-container">
        {displayGraph}
      </div>
    </div>
  );
}


