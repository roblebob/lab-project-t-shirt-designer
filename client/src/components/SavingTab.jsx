import React, { useState } from "react";
import { useSnapshot } from "valtio";
import { useLongPress } from "@uidotdev/usehooks";
import axios from "axios";
import { getContrastingColor } from "../config/helpers";

import state from "../store";

const SavingTab = ({ _state, isFilterTab, isActiveTab }) => {
  const snap = useSnapshot(state);

  const [isOpen, setIsOpen] = useState(false);

  const loadState = () => {
    state.color = _state.color;
    state.isLogoTexture = _state.isLogoTexture;
    state.isFullTexture = _state.isFullTexture;
    state.logoDecal = _state.logoDecal;
    state.fullDecal = _state.fullDecal;
  };

  const saveState = () => {
    const stateToSave = {};
    stateToSave.id = _state.id;
    stateToSave.color = snap.color;
    stateToSave.isLogoTexture = snap.isLogoTexture;
    stateToSave.isFullTexture = snap.isFullTexture;
    stateToSave.logoDecal = snap.logoDecal;
    stateToSave.fullDecal = snap.fullDecal;
    console.log("Saving state", stateToSave);
    axios
      .put(`http://localhost:5005/states/${stateToSave.id}`, stateToSave)
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
    state.needUpdate = true;
  };

  const attrs = useLongPress(
    () => {
      setIsOpen(true);
    },
    {
      onStart: (event) => console.log("Press started"),
      onFinish: (event) => saveState(),
      onCancel: (event) => loadState(),
      threshold: 500,
      //   ms: 1000,
      //   threshold: 15,
    }
  );

  return (
    <div
      key={"SavingTab" + _state.id}
      className="saving-tab-btn"
      //   onClick={handleClick}
      style={{ backgroundColor: _state.color }}
      {...attrs}
    >
      {<span style={{color: getContrastingColor(_state.color)}}>{_state.id}</span>}
    </div>
  );
};

export default SavingTab;
