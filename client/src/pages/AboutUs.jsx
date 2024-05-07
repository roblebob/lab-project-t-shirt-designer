// src/pages/AboutUs.jsx
import React from "react";

import { snapshot } from "valtio";
import state from "../store";

const AboutUs = () => {
  const snap = snapshot(state);

  return (
    <div
      className="flex justify-end flex-col bg-cover bg-center h-full"
      style={{ backgroundImage: "url('about.jpg')" }}
    >
      <div className="flex items-center justify-around mb-20">
        <div
          className="flex items-center p-5 bg-opacity-30 rounded-lg"
          style={{ backgroundColor: snap.color, opacity: "100%" }}
        >
          <img
            src="github-icon.png"
            alt="github"
            className="w-10 h-10 inline mr-3"
          />
          <a
            className="text-3xl text-black font-bold"
            href="https://github.com/JustAdiii"
          >
            JustAdiii
          </a>
        </div>

        <div
          className="flex items-center p-5 bg-opacity-30 rounded-lg"
          style={{ backgroundColor: snap.color, opacity: "100%" }}
        >
          <img
            src="github-icon.png"
            alt="github"
            className="w-10 h-10 inline mr-3"
          />
          <a
            className="text-3xl text-black font-bold"
            href="https://github.com/roblebob"
          >
            roblebob
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
