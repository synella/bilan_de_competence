import React, { useEffect, useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function Objects({ found, unfound}) {

  return (
    <div>
      <ImageList sx={{ width: 300, height: 1000 }} cols={2} rowHeight={164}>
        {found.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              alt={item.title}
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
    </div>
  );
}

export default Objects;
