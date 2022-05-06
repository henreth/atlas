import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Home from '../Home/Home.tsx';
import './App.css';

export default function App() {
  let [testData,setTestData] = useState([])

  useEffect(()=>{
    fetch('https://blocks.flashbots.net/v1/blocks')
   .then(r=>r.json()).then(r=>setTestData(r))
  },[])

  return (
    <React.Fragment>
      <Home />
    </React.Fragment>
  );
}


