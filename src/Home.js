import './Home.css'
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Scene');
  };

  return (
    <div className='Home'>
      <div className='Popup'>
        <div className='Bob'>
          <img src='Bob.png' width='30%' alt='Bob' />
        </div>
        <div className='Hello'>
          <p>Bonjour ! Vous tombez bien</p>
        </div>
        <div className='Text'>
          <button className='Button' onClick={handleClick}>
            C'est parti
          </button>
        </div>
      </div>
    </div>
  );
}


export default Home;