import './Home.css'
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

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
          <Button className='Button' onClick={handleClick}>
            C'est parti
          </Button>
        </div>
      </div>
    </div>
  );
}


export default Home;