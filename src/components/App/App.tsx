import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Home from '../Home/Home.tsx';
import './App.css';


let blocksUrl = 'https://blocks.epheph.com/v1/blocks'
let flashUrl = 'https://blocks.flashbots.net/v1/blocks' 
let relayUrl = 'http://relay.epheph.com/v1/blocks'
export default function App() {
  let [testData, setTestData] = useState([])

  useEffect(() => {
    // axios.get(blocksUrl)
    axios.get(flashUrl)
      .then(r => setTestData(r.data.blocks))
  }, [])

  return (
    <React.Fragment>
      <Home
        testData={testData}
      />
    </React.Fragment>
  );
}


