import React, { useState, useEffect } from "react";
import "./Scene.css";
import Drawer from "@mui/material/Drawer";
import Objects from "./Objects";
import Backdrop from "@mui/material/Backdrop";
import ObjectPreview from "./ObjectPreview";
import Badge from "@mui/material/Badge";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import { Tooltip } from "@mui/material";

function Scene() {
  const [open, setOpen] = useState(false);
  const [openFinishBackdrop, setOpenFinishBackdrop] = useState(true);
  const [openTooltip, setOpenTooltip] = useState(true);
  const [badgeContentValue, setBadgeContentValue] = useState(0);
  const [objectTitle, setObjectTitle] = useState("");
  const [openBackdropFound, setOpenBackdropFound] = useState(false);
  const [unfound, setUnfound] = useState([
    // {
    //   img: "./objects/books.png",
    //   title: "books",
    //   candidat: "./candidats/achille_attentes.png",
    // },
    // {
    //   img: "./objects/books2.png",
    //   title: "books2",
    //   candidat: "",
    // },
    {
      img: "./objects/cup.png",
      title: "cup",
      candidat: "./candidats/achille_centre.png",
    },
    // {
    //   img: "./objects/files.png",
    //   title: "files",
    //   candidat: "",
    // },
    // {
    //   img: "./objects/glasses.png",
    //   title: "glasses",
    //   candidat: "",
    // },
    // {
    //   img: "./objects/penBox.png",
    //   title: "penBox",
    //   candidat: "",
    // },
    // {
    //   img: "./objects/notebook.png",
    //   title: "notebook",
    //   candidat: "",
    // },
    // {
    //   img: "./objects/notebook2.png",
    //   title: "notebook2",
    //   candidat: "",
    // },
    // {
    //   img: "./objects/notebook3.png",
    //   title: "notebook3",
    //   candidat: "./candidats/achille_itineraire.png",
    // },
    // {
    //   img: "./objects/pencils.png",
    //   title: "pencils",
    //   candidat: "",
    // },
    // {
    //   img: "./objects/plant.png",
    //   title: "plant",
    //   candidat: "",
    // },
    // {
    //   img: "./objects/mug.png",
    //   title: "mug",
    //   candidat: "./candidats/achille_traits.png",
    // },
    // {
    //   img: "./objects/rug.png",
    //   title: "rug",
    //   candidat: "",
    // },
    // {
    //   img: "./objects/sheets.png",
    //   title: "sheets",
    //   candidat: "./candidats/achille_compe.png",
    // },
    // {
    //   img: "./objects/sheets2.png",
    //   title: "sheets2",
    //   candidat: "",
    // },
    {
      img: "./objects/telephone.png",
      title: "telephone",
      candidat: "./candidats/achille_cv.png",
    },
    // {
    //   img: "./objects/vase.png",
    //   title: "vase",
    //   candidat: "",
    // },
    // {
    //   img: "./objects/wallet.png",
    //   title: "wallet",
    //   candidat: "",
    // },
  ]);
  const [found, setFound] = useState([]);
  const [unfoundLength, setUnfoundLength] = useState(unfound.length);
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

  const handleCloseFinishBackdrop = () => {
    setOpenFinishBackdrop(false);
  };

  const handleCloseTooltip = () => {
    setOpenTooltip(false);
  };

  const handleClose = () => {
    setOpenBackdropFound(false);
    setUnfoundLength(unfound.length);
  };

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
    setBadgeContentValue(0);
  };

  const handleClick = (title) => {
    setObjectTitle(title);
    if (unfoundLength === 1) {
      setBadgeContentValue(0);
    } else {
      setBadgeContentValue(badgeContentValue + 1);
    }
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
      <>
        <img
          src="./objects/cup.png"
          className="cup"
          onClick={() => handleClick("cup")}
          alt="cup"
          draggable="false"
          style={{
            display: found.some((item) => item.title === "cup")
              ? "none"
              : "block",
          }}
        />
        <img
          src="./objects/telephone.png"
          className="telephone"
          onClick={() => handleClick("telephone")}
          alt="telephone"
          draggable="false"
          style={{
            display: found.some((item) => item.title === "telephone")
              ? "none"
              : "block",
          }}
        />
        {/* <img
          src="./objects/vase.png"
          className="vase"
          onClick={() => handleClick("vase")}
          alt="vase"
          draggable="false"
          style={{
            display: found.some((item) => item.title === "vase")
              ? "none"
              : "block",
          }}
        />
        <img
          src="./objects/wallet.png"
          className="wallet"
          onClick={() => handleClick("wallet")}
          alt="wallet"
          draggable="false"
          style={{
            display: found.some((item) => item.title === "wallet")
              ? "none"
              : "block",
          }}
        />
        <img
          src="./objects/books.png"
          className="books"
          onClick={() => handleClick("books")}
          alt="books"
          draggable="false"
          style={{
            display: found.some((item) => item.title === "books")
              ? "none"
              : "block",
          }}
        />
        <img
          src="./objects/books2.png"
          className="books2"
          onClick={() => handleClick("books2")}
          alt="books2"
          draggable="false"
          style={{
            display: found.some((item) => item.title === "books2")
              ? "none"
              : "block",
          }}
        />
        <img
          src="./objects/files.png"
          className="files"
          onClick={() => handleClick("files")}
          alt="files"
          draggable="false"
          style={{
            display: found.some((item) => item.title === "files")
              ? "none"
              : "block",
          }}
        />
        <img
          src="./objects/glasses.png"
          className="glasses"
          onClick={() => handleClick("glasses")}
          alt="glasses"
          draggable="false"
          style={{
            display: found.some((item) => item.title === "glasses")
              ? "none"
              : "block",
          }}
        />
        <img
          src="./objects/notebook.png"
          className="notebook"
          onClick={() => handleClick("notebook")}
          alt="notebook"
          draggable="false"
          style={{
            display: found.some((item) => item.title === "notebook")
              ? "none"
              : "block",
          }}
        />
        <img
          src="./objects/notebook2.png"
          className="notebook2"
          onClick={() => handleClick("notebook2")}
          alt="notebook2"
          draggable="false"
          style={{
            display: found.some((item) => item.title === "notebook2")
              ? "none"
              : "block",
          }}
        />
        <img
          src="./objects/notebook3.png"
          className="notebook3"
          onClick={() => handleClick("notebook3")}
          alt="notebook3"
          draggable="false"
          style={{
            display: found.some((item) => item.title === "notebook3")
              ? "none"
              : "block",
          }}
        />
        <img
          src="./objects/penBox.png"
          className="penBox"
          onClick={() => handleClick("penBox")}
          alt="penBox"
          draggable="false"
          style={{
            display: found.some((item) => item.title === "penBox")
              ? "none"
              : "block",
          }}
        />
        <img
          src="./objects/pencils.png"
          className="pencils"
          onClick={() => handleClick("pencils")}
          alt="pencils"
          draggable="false"
          style={{
            display: found.some((item) => item.title === "pencils")
              ? "none"
              : "block",
          }}
        />
        <img
          src="./objects/plant.png"
          className="plant"
          onClick={() => handleClick("plant")}
          alt="plant"
          draggable="false"
          style={{
            display: found.some((item) => item.title === "plant")
              ? "none"
              : "block",
          }}
        />
        <img
          src="./objects/rug.png"
          className="rug"
          onClick={() => handleClick("rug")}
          alt="rug"
          draggable="false"
          style={{
            display: found.some((item) => item.title === "rug")
              ? "none"
              : "block",
          }}
        />
        <img
          src="./objects/sheets.png"
          className="sheets"
          onClick={() => handleClick("sheets")}
          alt="sheets"
          draggable="false"
          style={{
            display: found.some((item) => item.title === "sheets")
              ? "none"
              : "block",
          }}
        />
        <img
          src="./objects/sheets2.png"
          className="sheets2"
          onClick={() => handleClick("sheets2")}
          alt="sheets2"
          draggable="false"
          style={{
            display: found.some((item) => item.title === "sheets2")
              ? "none"
              : "block",
          }}
        />
        <img
          src="./objects/mug.png"
          className="mug"
          onClick={() => handleClick("mug")}
          alt="mug"
          draggable="false"
          style={{
            display: found.some((item) => item.title === "mug")
              ? "none"
              : "block",
          }}
        /> */}
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={openBackdropFound}
        >
          <div className="object-preview-backdrop">
            <ObjectPreview objectTitle={objectTitle} found={found} />
            <CloseIcon className="close-icon" onClick={handleClose} />
          </div>
        </Backdrop>
        <Badge
          badgeContent={badgeContentValue}
          sx={{
            ".MuiBadge-badge": {
              backgroundColor: "#f44336",
              color: "#ffffff",
            },
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
                draggable="false"
              />
            </Tooltip>
          </ClickAwayListener>
        </Badge>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          <Objects found={found} unfound={unfound} />
        </Drawer>

        {unfoundLength === 0 ? (
          <Backdrop
            open={openFinishBackdrop}
            onClick={handleCloseFinishBackdrop}
          >
            <div className="finished">
              <img src="./Bob_happy.png" width="40%" alt="bob_happy" />
              <p> Bravo ! Vous avez trouvé tous les objets !</p>
              <p>
                Vous pouvez revenir en cliquant n'importe où ou alors
                recommencer en rafraîchissant la page
              </p>
            </div>
          </Backdrop>
        ) : null}
      </>
    </div>
  );
}

export default Scene;
