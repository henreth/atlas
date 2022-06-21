import React, {useState} from 'react'
import './Table.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Table({ data, pageNum,setPageNum,left,right }) {
    // gas price: bundle?.gas_used / (10 ** 9)
    function clickLeft(){
        if (pageNum===1) {}
        else setPageNum(pageNum-1)
    }

    function clickRight(){
        if (pageNum===10) {}
        else setPageNum(pageNum+1)
    }

    let dataToDisplay = data.map(block => {
        return (
            <tr >
                <td>
                    <a href={'https://etherscan.io/block/' + block.block_number}>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='block-link'/>
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
            <div>Currently viewing results {left+1} to {right} of the last {data.length} blocks</div>
            <button onClick={clickLeft}> {'<'}</button>
            <button onClick={clickRight}> {'>'}</button>
        </div>
    )
}