import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './AppRouter';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <AppRouter />
      <Footer />
    </Router>
  </React.StrictMode>
);
