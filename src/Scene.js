import React, { useState, useEffect } from "react";
import "./Scene.css";
import Drawer from '@mui/material/Drawer';
import Objects from './Objects'
import Backdrop from '@mui/material/Backdrop';
import ObjectPreview from './ObjectPreview';
import { useNavigate } from 'react-router-dom';


function Scene() {
  const [open, setOpen] = useState(false);
  const [openBackdrop, setOpenBackdrop] = useState(true);
  const [objectTitle, setObjectTitle] = useState('');
  const [openBackdropFound, setOpenBackdropFound] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    const handleRefresh = () => {
      if (performance.navigation.type === 1) {
        navigate('/');
      }
    };

    window.addEventListener('load', handleRefresh);

    return () => {
      window.removeEventListener('load', handleRefresh);
    };
  }, [navigate]);

  // const handleOpen = () => {
  //   setOpenBackdrop(true);
  // };

  const handleClose = () => {
    setOpenBackdrop(false);
    setOpenBackdropFound(false);
  }

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleClick = (title) => {
    setObjectTitle(title);
    setOpenBackdropFound(true);
  };


  return (
    <div className="Scene">
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openBackdrop}
        onClick={handleClose}
      >
        <div className="Help">
          <p>Je ne sais pas comment vous remercier ! N'hésitez pas à revenir vers moi pour visualiser les objets et leurs contenus.</p>
          <p>Je suis juste en bas à gauche. Bonne chance !</p>
        </div>
      </Backdrop>
      {/* <img src='Bob.png' className="Bob" width='10%' alt='Bob'/> */}

      <button className="cup" onClick={() => handleClick('cup')} >cup</button>
      <button className="telephone" onClick={() => handleClick('telephone')} >telephone</button>
      <Backdrop
              sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={openBackdropFound}
              onClick={handleClose}
      >
        <ObjectPreview objectTitle={objectTitle}/>
      </Backdrop>

      <img src='Bob_thoughful.png' className="Bob_thoughtful" width='10%' alt='arrow' onClick={toggleDrawer(true)}/>

      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Objects objectTitle={objectTitle}/>
      </Drawer>
    </div>
  );
}

export default Scene;
