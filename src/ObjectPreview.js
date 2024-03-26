import React from "react";
import "./ObjectPreview.css";

function ObjectPreview({ objectTitle }) {
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
  ];
  const item = itemData.find((item) => item.title === objectTitle);
  return (
    <div className="ObjectPreview">
      <img src={item ? item.img : "waiting"} width={"50%"} alt={objectTitle} />
      <p>Bravo ! Vous avez trouvé un objet !</p>
      <button className="Content">Voir de plus près</button>
    </div>
  );
}

export default ObjectPreview;
