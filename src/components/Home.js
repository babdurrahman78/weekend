import "./Home.css";
import astro from '../assets/astronout.png';
import {useState, useEffect} from 'react';

const Home = () => {

  return (   
    <div className="home">
      <div className="home-content">
        <p className="home-title">WEEKEND FROM HOME</p>
        <p className="home-title-desc">Stay active with a lilttle workout</p>
        <img className='home-astro' src={astro} alt="astronot" />
        <button className='home-button'>
            Let's Go
        </button>
      </div>
    </div>
  );
};

export default Home;
