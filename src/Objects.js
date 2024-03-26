import React, { useEffect, useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function Objects({ objectTitle }) {
  const [unfound, setUnfound] = useState([
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
      title: "cup",
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
      img: "./objects/penBox.png",
      title: "penBox",
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
  ]);
  const [found, setFound] = useState([
    {
      img: "./objects/books.png",
      title: "Books",
    },
    {
      img: "./objects/books2.png",
      title: "Books2",
    },
  ]);

  // const found = [
  //   {
  //     img: "./objects/books.png",
  //     title: "Books",
  //   },
  //   {
  //     img: "./objects/books2.png",
  //     title: "Books2",
  //   },
  // ];

  // const unfound = [
  //   {
  //     img: "./objects/books.png",
  //     title: "Books",
  //   },
  //   {
  //     img: "./objects/books2.png",
  //     title: "Books2",
  //   },
  //   {
  //     img: "./objects/telephone.png",
  //     title: "telephone",
  //   },
  // ];

  const [currentObjectTitle, setCurrentObjectTitle] = useState(objectTitle);

  useEffect(() => {
    setCurrentObjectTitle(objectTitle);
  }, [objectTitle]);

  useEffect(() => {
    const objectIndex = unfound.findIndex((item) => item.title === currentObjectTitle);
    if (objectIndex !== -1) {
      const object = unfound[objectIndex];
      const isAlreadyFound = found.some((item) => item.title === currentObjectTitle);
      if (!isAlreadyFound) {
        setUnfound((prevUnfound) =>
          prevUnfound.filter((_, index) => index !== objectIndex)
        );
        // console.log(unfound);
        setFound((prevFound) => [object, ...prevFound]);
        // console.log(found);
        // console.log(unfound.filter((_, index) => index !== objectIndex));
        // setUnfound(unfound.filter((index) => index !== objectIndex));
      }
    }
  }, [found, unfound, currentObjectTitle]);

  // useEffect(() => {
  // const objectIndex = unfound.findIndex((item) => item.title === objectTitle);
  // console.log(objectIndex)
  // const object = unfound[objectIndex];
  // console.log(object)
  // found.unshift(object);
  // console.log(found);
  // }, [objectTitle, found, unfound]);

  return (
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
  );
}

export default Objects;
