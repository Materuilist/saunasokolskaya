import React, { useState } from "react";
import SaunaInfo from "./SaunaInfo/SaunaInfo";

import cssClasses from "./MainPage.module.css";

export default function MainPage({ toggleShowAuth }) {
  return (
    <div className={cssClasses.MainPage}>
      <SaunaInfo
        showAuthentication={toggleShowAuth}
        sauna="firstSauna"
      />
      <SaunaInfo
        showAuthentication={toggleShowAuth}
        sauna="secondSauna"
      />
    </div>
  );
}
