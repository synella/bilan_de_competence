import React, { useState } from "react";
import "./ObjectPreview.css";
import Backdrop from "@mui/material/Backdrop";
import Button from "@mui/material/Button";

function ObjectPreview({ found, objectTitle }) {
  const [openBackdrop, setOpenBackdrop] = useState(false);
  const item = found.find((item) => item.title === objectTitle);

  const handleClose = () => {
    setOpenBackdrop(false);
  };

  const handleOpen = () => {
    setOpenBackdrop(true);
  };

  return (
    <div className="ObjectPreview">
      <img src={item ? item.img : "waiting"} width={"50%"} alt={objectTitle} />
      <p>Bravo ! Vous avez trouvé un objet !</p>
      <Button variant="text" className="Content" onClick={handleOpen}>
        Examiner de plus près
      </Button>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openBackdrop}
        onClick={handleClose}
      >
        <img src={item ? item.candidat : "waiting"} width="60%" alt={objectTitle}/>
      </Backdrop>
    </div>
  );
}

export default ObjectPreview;
