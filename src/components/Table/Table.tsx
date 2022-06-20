import React from 'react'

export default function Table({ data }) {

    // gas price: bundle?.gas_used / (10 ** 9)

    let dataToDisplay = data.map(block => {
        return (
            <tr>
                <td>{block.block_number}</td>
                <td>{block.miner_reward}</td>
                <td>{block.gas_used}</td>
                <td>{Math.round(block.miner_reward / block.gas_used / (10**9))} gwei</td>
                <td>{block.transactions.length}</td>
            </tr>
        )
    })
    return (
        <table>
            <thead>
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
    )
}