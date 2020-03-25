import React from 'react';

import cssClasses from './Photo.module.css';

export default function({picSrc, isActive, activePhotoIndex, photosCount}){
    const className = isActive?cssClasses.Photo + ' ' +cssClasses.active:cssClasses.Photo;
    return(
        <div style={{flexBasis:`${100/photosCount}%`}} className={className}>
            <img src={picSrc} alt={picSrc}/>
        </div>
    );
}