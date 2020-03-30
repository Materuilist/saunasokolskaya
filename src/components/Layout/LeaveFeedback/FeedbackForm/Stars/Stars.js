import React from "react";

import cssClasses from "./Stars.module.css";
import Star from "./Star/Star";

export default function({
  rate,
  rateChangedHandler,
  fixedChanged,
  rateIsFixed
}) {
  function parseNewRate(index, starNewRate) {
    rateChangedHandler(index + starNewRate);
  }

  const stars = [0, 0, 0, 0, 0];
  const integral = Math.trunc(rate);
  const fractional = rate - integral;
  stars.fill(1, 0, integral);
  if (fractional !== 0) {
    stars[integral] = 0.5;
  }
  return (
    <div className={cssClasses.Stars}>
      {stars.map((starActivity, index) => (
        <Star
          rateIsFixed={rateIsFixed}
          fixedChanged={fixedChanged}
          rateChangedHandler={parseNewRate.bind(null, index)}
          dismissRate={parseNewRate.bind(null, 0, 0)}
          key={index}
          activity={starActivity}
        />
      ))}
    </div>
  );
}
