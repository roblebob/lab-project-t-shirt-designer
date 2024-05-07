import React, { useState } from "react";
import { useSnapshot } from "valtio";
import { useLongPress } from "@uidotdev/usehooks";

import state from "../store";

const SavingTab = ({ _state, _index, isFilterTab, isActiveTab }) => {
  const snap = useSnapshot(state);

  const [isOpen, setIsOpen] = useState(false);

  const activeStyles =
    isFilterTab && isActiveTab
      ? { backgroundColor: snap.color, opacity: 0.5 }
      : { backgroundColor: "transparent", opacity: 1 };

  const loadState = () => {
    state.color = _state.color;
    state.isLogoTexture = _state.isLogoTexture;
    state.isFullTexture = _state.isFullTexture;
    state.logoDecal = _state.logoDecal;
    state.fullDecal = _state.fullDecal;
  };

  const saveState = () => {
    const stateToSave = {};
    stateToSave.color = snap.color;
    stateToSave.isLogoTexture = snap.isLogoTexture;
    stateToSave.isFullTexture = snap.isFullTexture;
    stateToSave.logoDecal = snap.logoDecal;
    stateToSave.fullDecal = snap.fullDecal;
    console.log("Saving state", stateToSave);
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
      key={"SavingTab" + _index}
      className={`tab-btn ${
        isFilterTab ? "rounded-full glassmorphism" : "rounded-4"
      }`}
    //   onClick={handleClick}
      style={activeStyles}
      {...attrs}
    >
      {<span>{_index}</span>}
    </div>
  );
};

export default SavingTab;
