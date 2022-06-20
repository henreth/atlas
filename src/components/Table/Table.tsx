import React, {useState} from 'react'
import './Table.css'

export default function Table({ data }) {
    console.log(data.length)

    // gas price: bundle?.gas_used / (10 ** 9)
    let [pageNum,setPageNum] = useState(1)
    let right = pageNum * 10
    let left = pageNum === 1 ? 0 : right/2 

    let dataToDisplay = data.slice(left,right).map(block => {
        return (
            <tr >
                <td>
                    <a href={'https://etherscan.io/block/' + block.block_number}>
                        {block.block_number}
                    </a>
                </td>
                <td>Ξ {(block.miner_reward / (10 ** 18)).toFixed(4)}</td>
                <td>{block.gas_used}</td>
                <td>{Math.round(block.miner_reward / block.gas_used / (10 ** 9))}
                    <span> gwei</span>
                </td>
                <td>{block.transactions.length}</td>
            </tr>
        )
    })
    return (
        <div className='table-wrapper'>
            <table className='fl-table'>
                <thead className='table-header'>
                    <tr>
                        <th>Block Number</th>
                        <th>Miner Reward</th>
                        <th>Gas Used</th>
                        <th>Gas Price</th>
                        <th>Bundles</th>
                    </tr>
                </thead>
                <tbody>
                    {dataToDisplay}
                </tbody>
            </table>
            <div>Currently viewing results {left} to {right} of {data.length}</div>
        </div>
    )
}