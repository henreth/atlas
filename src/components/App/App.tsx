import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Home from '../Home/Home.tsx';
import './App.css';

export default function App() {
  let [testData, setTestData] = useState([])

  useEffect(() => {
    axios.get('https://blocks.flashbots.net/v1/blocks')
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


