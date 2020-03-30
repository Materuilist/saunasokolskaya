import React from "react";

import cssClasses from "./Star.module.css";

export default function({
  activity,
  rateChangedHandler,
  dismissRate,
  fixedChanged,
  rateIsFixed
}) {
  function mouseMoveHandler(event) {
    if (rateIsFixed) {
        return;
    }
    const { left, width } = event.target.closest("div").getBoundingClientRect();
    const { clientX: x } = event;
    //дальше середины
    if (x > left + width / 2) {
      rateChangedHandler(1);
    }
    //раньше середины
    else {
      rateChangedHandler(0.5);
    }
  }

  return (
    <div
      onMouseMove={mouseMoveHandler}
      onMouseLeave={()=>{if(!rateIsFixed)dismissRate()}}
      onClick={fixedChanged}
      className={cssClasses.StarContainer}
    >
      <span
        style={{ width: `${activity * 100}%` }}
        className={cssClasses.Star + " " + cssClasses.FilledStar}
      >
        &#9733;
      </span>
      <span className={cssClasses.Star}>&#9734;</span>
    </div>
  );
}
