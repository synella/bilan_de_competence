import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "./Objects.css";
import { Tooltip } from "@mui/material";

function Objects({ found, unfound }) {
  const [openBackdrop, setOpenBackdrop] = useState(false);
  const [candidatElement, setCandidatElement] = useState("");

  const handleClose = () => {
    setOpenBackdrop(false);
  };

  const handleClick = (candidat) => {
    setOpenBackdrop(true);
    setCandidatElement(candidat);
  };

  return (
    <div className="object-list">
      <h2>Objets à trouver</h2>
      <p>Cliquer pour visualiser</p>
      <ImageList
        sx={{
          width: 300,
          height: 1000,
          overflow: "hidden",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
        cols={2}
        rowHeight={50}
      >
        {found.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              className="object-image"
              alt={item.title}
              onClick={() => handleClick(item.candidat)}
              draggable="false"
            />
          </ImageListItem>
        ))}
        {unfound.map((item) => (
          <ImageListItem key={item.img}>
            <Tooltip title="Trouvez l'objet d'abord !">
              <img
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                style={{ filter: "grayscale(100%)" }}
                width="100%"
              />
            </Tooltip>
          </ImageListItem>
        ))}
      </ImageList>

      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openBackdrop}
        onClick={handleClose}
      >
        <img
          src={candidatElement ? candidatElement : "waiting"}
          width="50%"
          alt="oui"
        />
      </Backdrop>
    </div>
  );
}

export default Objects;
