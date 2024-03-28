import React, { useState, useEffect } from "react";
import "./Scene.css";
import Drawer from "@mui/material/Drawer";
import Objects from "./Objects";
import Backdrop from "@mui/material/Backdrop";
import ObjectPreview from "./ObjectPreview";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import Close from "@mui/icons-material/Close";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";

import { Tooltip } from "@mui/material";
import { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

function Scene() {
  const [open, setOpen] = useState(false);
  const [openTooltip, setOpenTooltip] = useState(true);
  const [badgeContentValue, setBadgeContentValue] = useState(0);
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
      img: "./objects/mug.png",
      title: "mug",
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

  const handleCloseTooltip = () => {
    setOpenTooltip(false);
  };

  const handleClose = () => {
    // setOpenBackdrop(false);
    setOpenBackdropFound(false);
  };

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
    setBadgeContentValue(0);
  };

  const handleClick = (title) => {
    setObjectTitle(title);
    setBadgeContentValue(badgeContentValue + 1);
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
      {/* <button className="cup" onClick={() => handleClick("cup")} style={{ display: found.some(item => item.title === "cup") ? "none" : "block" }}>
        cup
      </button> */}
      <img
        src="./objects/cup.png"
        className="cup"
        onClick={() => handleClick("cup")}
        alt="cup"
      />
      <img
        src="./objects/telephone.png"
        className="telephone"
        onClick={() => handleClick("telephone")}
        alt="telephone"
      />
      <img
        src="./objects/vase.png"
        className="vase"
        onClick={() => handleClick("vase")}
        alt="vase"
      />
      <img
        src="./objects/wallet.png"
        className="wallet"
        onClick={() => handleClick("wallet")}
        alt="wallet"
      />
      s
      <img
        src="./objects/books.png"
        className="books"
        onClick={() => handleClick("books")}
        alt="books"
      />
      <img
        src="./objects/books2.png"
        className="books2"
        onClick={() => handleClick("books2")}
        alt="books2"
      />
      <img
        src="./objects/files.png"
        className="files"
        onClick={() => handleClick("files")}
        alt="files"
      />
      <img
        src="./objects/glasses.png"
        className="glasses"
        onClick={() => handleClick("glasses")}
        alt="glasses"
      />
      <img
        src="./objects/notebook.png"
        className="notebook"
        onClick={() => handleClick("notebook")}
        alt="notebook"
      />
      <img
        src="./objects/notebook2.png"
        className="notebook2"
        onClick={() => handleClick("notebook2")}
        alt="notebook2"
      />
      <img
        src="./objects/notebook3.png"
        className="notebook3"
        onClick={() => handleClick("notebook3")}
        alt="notebook3"
      />
      <img
        src="./objects/penBox.png"
        className="penBox"
        onClick={() => handleClick("penBox")}
        alt="penBox"
      />
      <img
        src="./objects/pencils.png"
        className="pencils"
        onClick={() => handleClick("pencils")}
        alt="pencils"
      />
      <img
        src="./objects/plant.png"
        className="plant"
        onClick={() => handleClick("plant")}
        alt="plant"
      />
      <img
        src="./objects/rug.png"
        className="rug"
        onClick={() => handleClick("rug")}
        alt="rug"
      />
      <img
        src="./objects/sheets.png"
        className="sheets"
        onClick={() => handleClick("sheets")}
        alt="sheets"
      />
      <img
        src="./objects/sheets2.png"
        className="sheets2"
        onClick={() => handleClick("sheets2")}
        alt="sheets2"
      />
      <img
        src="./objects/mug.png"
        className="mug"
        onClick={() => handleClick("mug")}
        alt="mug"
      />
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openBackdropFound}
      >
        <ObjectPreview objectTitle={objectTitle} found={found} />
        <CloseIcon className="close-icon" onClick={handleClose} />
      </Backdrop>
      <Badge
        badgeContent={badgeContentValue}
        sx={{
          ".MuiBadge-badge": { backgroundColor: "#f44336", color: "#ffffff" },
        }}
        className="bob-badge"
      >
        <ClickAwayListener onClickAway={handleCloseTooltip}>
          <Tooltip
            open={openTooltip}
            title={
              <span style={{ fontSize: "20px" }}>
                <p>
                  Je ne sais pas comment vous remercier ! N'hésitez pas à
                  revenir vers moi pour visualiser les objets à trouver ainsi
                  que leurs contenus. Bonne chance !
                </p>
              </span>
            }
            placement="right"
            arrow
          >
            <img
              src="Bob_thoughful.png"
              className="Bob_thoughtful"
              width="10%"
              alt="arrow"
              onClick={toggleDrawer(true)}
            />
          </Tooltip>
        </ClickAwayListener>
      </Badge>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Objects found={found} unfound={unfound} />
      </Drawer>
    </div>
  );
}

export default Scene;
