import React from "react";
import Dot from "./Dot/Dot";

import cssClasses from "./ProgressIndicator.module.css";

export default function({ activePhotoIndex, photosCount }) {
  let photoIndexCounter = 0;
  //false-emptyDot; true-filledDot
  const dotsArray = [];

  while (photoIndexCounter < photosCount) {
    dotsArray.push(photoIndexCounter === activePhotoIndex);
    photoIndexCounter++;
  }

  return (
    <div className={cssClasses.ProgressIndicatorContainer}>
      <div className={cssClasses.ProgressIndicator}>
        {dotsArray.map(dot => (
          <Dot filled={dot} />
        ))}
      </div>
    </div>
  );
}
