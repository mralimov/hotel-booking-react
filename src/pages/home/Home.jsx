import React from 'react';
import Featured from '../../components/featured/Featured';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import './home.css';

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <div className='homeContainer'>
        <Featured />
      </div>
    </div>
  );
};

export default Home;
