import React from 'react'
import './Table.css'

export default function Table({ data }) {

    // gas price: bundle?.gas_used / (10 ** 9)

    let dataToDisplay = data.slice(0, 15).map(block => {
        return (
            <tr >
                <td>
                    <a href={'https://etherscan.io/block/' + block.block_number}>
                        {block.block_number}
                    </a>
                </td>
                <td>Ξ {(block.miner_reward / (10 ** 18)).toFixed(4)}</td>
                <td>{block.gas_used}</td>
                <td>{Math.round(block.miner_reward / block.gas_used / (10 ** 9))} gwei</td>
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
        </div>
    )
}