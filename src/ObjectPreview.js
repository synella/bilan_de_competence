import React, {useState} from "react";
import "./ObjectPreview.css";
import Backdrop from "@mui/material/Backdrop";

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
      <button className="Content" onClick={handleOpen}>Examiner de plus près</button>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openBackdrop}
        onClick={handleClose}
      >
        <div className="Help">
          <p>oui</p>
        </div>
      </Backdrop>
    </div>
  );
}

export default ObjectPreview;
