import React from "react";
import "./ObjectPreview.css";

function ObjectPreview({ found, objectTitle }) {
  const item = found.find((item) => item.title === objectTitle);
  return (
    <div className="ObjectPreview">
      <img src={item ? item.img : "waiting"} width={"50%"} alt={objectTitle} />
      <p>Bravo ! Vous avez trouvé un objet !</p>
      <button className="Content">Voir de plus près</button>
    </div>
  );
}

export default ObjectPreview;
