import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './containers/Header';
import Broker from './containers/Broker';
import Footer from './containers/Footer';

import GlobalStyle from './globalStyles';

function App() {
  
  const theme = {
    pink: '#8C0F84',
    purple: '#3D188C',
    black: '#171140',
    blue: '#2A32BF',
    grey: '#2E3959'
  }

  return (
    <Router>
      <GlobalStyle />

      <Header theme={theme} />
      <Broker theme={theme} />
      <Footer theme={theme} />
    </Router>
  );
}

export default App;