import "./Home.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Scene");
  };

  return (
    <div className="Home">
      <div className="Popup">
        <div className="Bob">
          <img src="Bob.png" width="20%" alt="Bob" />
        </div>
        <div className="Hello">
          <p>
          {" "}
            Bonjour ! Vous tombez bien, j'ai eu un petit problème... en fait, un
            problème assez gros. Je pense avoir égaré tous les dossiers de
            candidature pour nos prochains entretiens d'embauche. Ou du moins,
            je les ai laissés quelque part dans ce champ de bataille qu'est mon
            bureau.
          </p>
          <p>
            Il y a des CV qui se cachent sous les dossiers, des lettres de
            motivation qui jouent à cache-cache derrière l'ordinateur, et je
            suis presque certain d'avoir vu un candidat se faufiler derrière la
            photocopieuse.
          </p>
          <p>
            Mais ce n'est pas tout ! En plus des dossiers, je crois que j'ai
            aussi égaré certains objets essentiels pour mener à bien ces
            entretiens. Vous savez, des trucs comme des stylos qui fonctionnent,
            mes lunettes, et peut-être même une dose de café pour garder les
            neurones en éveil.
          </p>
          <p>
            Votre mission, si vous l'acceptez (et si vous ne l'acceptez pas, je
            suis vraiment dans le pétrin), est d'observer attentivement chaque
            recoin de ce bureau à la recherche de ces fichus dossiers.
          </p>
          <p>
            Alors, prêt à partir à la recherche des candidatures disparues ?
          </p>
        </div>
        <div className="Text">
          <Button className="Button" onClick={handleClick}>
            C'est parti
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
