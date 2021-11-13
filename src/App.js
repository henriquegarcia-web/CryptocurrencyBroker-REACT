import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './containers/Header';
import Broker from './containers/Broker';
import Footer from './containers/Footer';

import GlobalStyle from './globalStyles';

function App() {
  return (
    <Router>
      <GlobalStyle />

      <Header />
      <Broker />
      <Footer />
    </Router>
  );
}

export default App;