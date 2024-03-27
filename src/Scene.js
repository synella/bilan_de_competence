import React, { useState, useEffect } from "react";
import "./Scene.css";
import Drawer from "@mui/material/Drawer";
import Objects from "./Objects";
import Backdrop from "@mui/material/Backdrop";
import ObjectPreview from "./ObjectPreview";
import { useNavigate } from "react-router-dom";

function Scene() {
  const [open, setOpen] = useState(false);
  const [openBackdrop, setOpenBackdrop] = useState(true);
  const [objectTitle, setObjectTitle] = useState("");
  const [openBackdropFound, setOpenBackdropFound] = useState(false);
  const [unfound, setUnfound] = useState([
    {
      img: "./objects/books.png",
      title: "books",
    },
    {
      img: "./objects/books2.png",
      title: "books2",
    },
    {
      img: "./objects/cup.png",
      title: "cup",
    },
    {
      img: "./objects/files.png",
      title: "files",
    },
    {
      img: "./objects/glasses.png",
      title: "glasses",
    },
    {
      img: "./objects/penBox.png",
      title: "penBox",
    },
    {
      img: "./objects/notebook.png",
      title: "notebook",
    },
    {
      img: "./objects/notebook2.png",
      title: "notebook2",
    },
    {
      img: "./objects/notebook3.png",
      title: "notebook3",
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
  const [found, setFound] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const handleRefresh = () => {
      if (performance.navigation.type === 1) {
        navigate("/");
      }
    };

    window.addEventListener("load", handleRefresh);

    return () => {
      window.removeEventListener("load", handleRefresh);
    };
  }, [navigate]);

  const handleClose = () => {
    setOpenBackdrop(false);
    setOpenBackdropFound(false);
  };

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleClick = (title) => {
    setObjectTitle(title);
    const objectIndex = unfound.findIndex((item) => item.title === title);
    setOpenBackdropFound(true);
    if (objectIndex !== -1) {
      const isObjectFound = found.some((item) => item.title === title);
      if (!isObjectFound) {
        const object = unfound[objectIndex];
        setFound((prevFound) => [object, ...prevFound]);
        setUnfound((prevUnfound) =>
          prevUnfound.filter((_, index) => index !== objectIndex)
        );
      }
    }
  };

  return (
    <div className="Scene">
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openBackdrop}
        onClick={handleClose}
      >
        <div className="Help">
          <p>
            Je ne sais pas comment vous remercier ! N'hésitez pas à revenir vers
            moi pour visualiser les objets et leurs contenus.
          </p>
          <p>Je suis juste en bas à gauche. Bonne chance !</p>
        </div>
      </Backdrop>

      {/* <button className="cup" onClick={() => handleClick("cup")} style={{ display: found.some(item => item.title === "cup") ? "none" : "block" }}>
        cup
      </button> */}
      <button className="cup" onClick={() => handleClick("cup")}>
        cup
      </button>
      <button className="telephone" onClick={() => handleClick("telephone")}>
        telephone
      </button>

      <button className="vase" onClick={() => handleClick("vase")}>
        vase
      </button>

      <button className="wallet" onClick={() => handleClick("wallet")}>
        wallet
      </button>

      <button className="books" onClick={() => handleClick("books")}>
        books
      </button>

      <button className="books2" onClick={() => handleClick("books2")}>
        books_rose
      </button>

      <button className="files" onClick={() => handleClick("files")}>
        files
      </button>

      <img
        src="./objects/glasses.png"
        className="glasses"
        onClick={() => handleClick("glasses")}
        alt="glasses"
      />

      <button className="mug" onClick={() => handleClick("mug")}>
        mug
      </button>

      <button className="notebook" onClick={() => handleClick("notebook")}>
        notebook
      </button>

      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openBackdropFound}
        // onClick={handleClose}
      >
        <ObjectPreview objectTitle={objectTitle} found={found} />
        <button className="close-object-preview-backdrop" onClick={handleClose}>
          Fermer
        </button>
      </Backdrop>

      <img
        src="Bob_thoughful.png"
        className="Bob_thoughtful"
        width="10%"
        alt="arrow"
        onClick={toggleDrawer(true)}
      />

      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Objects found={found} unfound={unfound} />
      </Drawer>
    </div>
  );
}

export default Scene;
