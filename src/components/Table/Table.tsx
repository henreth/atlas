import React, { useState } from 'react'
import './Table.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Table({ data}) {
    // gas price: bundle?.gas_used / (10 ** 9)

    let dataToDisplay = data.map((block,i) => {
        return (
            <tr key={i}>
                <td>
                    <a href={'https://etherscan.io/block/' + block.block_number}>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='block-link' />
                        {block.block_number}
                    </a>
                </td>
                <td>Ξ {(block.miner_reward / (10 ** 18)).toFixed(4)}</td>
                <td>{block.gas_used}</td>
                <td>{Math.round(block.miner_reward / block.gas_used / (10 ** 9))}
                    <span> gwei</span>
                </td>
                <td>{block.transactions.some(tx=>{return tx.is_megabundle})?'✓':'X'}</td>
                <td>{block.transactions.length}</td>
            </tr>
        )
    })
    return (
        <React.Fragment>

            <div className='table-wrapper'>
                <table className='fl-table'>
                    <thead className='table-header'>
                        <tr>
                            <th>Block Number</th>
                            <th>Miner Reward</th>
                            <th>Gas Used</th>
                            <th>Gas Price</th>
                            <th className='megabundle'>
                                <div>Has</div> 
                                <div><span>MegaBundle?</span></div>
                                </th>
                            <th>Bundles</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataToDisplay}
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    )
}