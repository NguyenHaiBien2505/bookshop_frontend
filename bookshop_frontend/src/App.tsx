import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './layouts/header-footer/Navbar';
import Footer from './layouts/header-footer/Footer';
import HomePage from './layouts/homepage/HomePage';
import List from './layouts/product/List';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <List />
      <Footer />
    </div>
  );
}

export default App;
