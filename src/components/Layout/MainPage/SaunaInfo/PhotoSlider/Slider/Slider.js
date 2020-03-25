import React from "react";
import ProgressIndicator from "./ProgressIndicator/ProgressIndicator";
import Photo from "./Photo/Photo";

import cssClasses from "./Slider.module.css";

export default function({ activePhotoIndex, photosCount, photos }) {
  return (
    <div className={cssClasses.Slider}>
      <div style={{
          width:`${photosCount*100}%`,
          marginLeft:`-${100*activePhotoIndex}%`
      }} className={cssClasses.PhotosContainer}>
          {photos.map((photo, index) => (
            <Photo activePhotoIndex={activePhotoIndex}
            isActive={index===activePhotoIndex} photosCount={photosCount} picSrc={photo} key={photo} />
          ))}
      </div>
      <ProgressIndicator
        activePhotoIndex={activePhotoIndex}
        photosCount={photosCount}
      />
    </div>
  );
}
