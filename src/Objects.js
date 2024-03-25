import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function Objects() {
  const itemData = [
    {
      img: "./objects/books.png",
      title: "Books",
    },
    {
        img: "./objects/books2.png",
        title: "Books2",
    },
    {
        img: "./objects/cup.png",
        title: "Cup",
    },
    {
        img: "./objects/files.png",
        title: "Files",
    },
    {
        img: "./objects/glasses.png",
        title: "Glasses",
    },
    {
        img: "./objects/Layer 1.png",
        title: "Layer 1",
    },
    {
        img: "./objects/notebook.png",
        title: "Notebook",
    },
    {
        img: "./objects/notebook2.png",
        title: "Notebook2",
    },
    {
        img: "./objects/notebook3.png",
        title: "Notebook3",
    },
    {
        img: "./objects/pencils.png",
        title: "pencils",
    },
    {
        img: "./objects/plant.png",
        title: "plant",
    },
    {
        img: "./objects/rug.png",
        title: "rug",
    },
    {
        img: "./objects/sheets.png",
        title: "sheets",
    },
    {
        img: "./objects/sheets2.png",
        title: "sheets2",
    },
    {
        img: "./objects/telephone.png",
        title: "telephone",
    },
    {
        img: "./objects/vase.png",
        title: "vase",
    },
    {
        img: "./objects/wallet.png",
        title: "wallet",
    },
  ];

  return (

    

    <ImageList sx={{ width: 300, height: 1000 }} cols={2} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default Objects;
