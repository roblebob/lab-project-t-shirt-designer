import React from "react";
import axios from "axios";
import { useSnapshot } from "valtio";
import state from "../store";

const AddSavingButton = () => {
  const snap = useSnapshot(state);

  const handleClick = () => {
    axios
      .get("http://localhost:5005/states")
      .then((response) => {
        const stateToSave = {};
        stateToSave.id =
          Math.max(...response.data.map((state) => state.id)) + 1;
        console.log("stateToSave.id", stateToSave.id);
        stateToSave.color = snap.color;
        stateToSave.isLogoTexture = snap.isLogoTexture;
        stateToSave.isFullTexture = snap.isFullTexture;
        stateToSave.logoDecal = snap.logoDecal;
        stateToSave.fullDecal = snap.fullDecal;
        axios
          .post(`http://localhost:5005/states`, stateToSave)
          .then((response) => console.log(response))
          .catch((error) => console.error("POST", error));
        state.needUpdate = true;
      })
      .catch((error) => console.error("GET", error));
  };

  return (
    <div
      className="saving-tab-btn"
      onClick={handleClick}
      style={{ backgroundColor: "transparent" }}
    >
      {<span>+</span>}
    </div>
  );
};

export default AddSavingButton;
