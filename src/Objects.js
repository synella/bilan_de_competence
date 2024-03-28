import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "./Objects.css";

function Objects({ found, unfound }) {
  const [openBackdrop, setOpenBackdrop] = useState(false);

  const handleClose = () => {
    setOpenBackdrop(false);
  };

  const handleClick = () => {
    setOpenBackdrop(true);
  };

  return (
    <div className="object-list">
      <h2>Objets à trouver</h2>
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
              onClick={handleClick}
              draggable="false"
            />
          </ImageListItem>
        ))}
        {unfound.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              alt={item.title}
              style={{ filter: "grayscale(100%)" }}
            />
          </ImageListItem>
        ))}
      </ImageList>

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

export default Objects;
