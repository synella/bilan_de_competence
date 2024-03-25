import React, { useState } from "react";
import "./Scene.css";
import Drawer from '@mui/material/Drawer';
import Objects from './Objects'
import Backdrop from '@mui/material/Backdrop';

function Scene() {
  const [open, setOpen] = useState(false);
  const [openBackdrop, setOpenBackdrop] = useState(true);

  const handleClose = () => {
    setOpenBackdrop(false);
  }

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
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

      <button className="Found">Trouvé</button>
      <img src='Bob_thoughful.png' className="Bob_thoughtful" width='10%' alt='arrow' onClick={toggleDrawer(true)}/>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Objects/>
      </Drawer>
    </div>
  );
}

export default Scene;
