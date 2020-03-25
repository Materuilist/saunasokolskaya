import React from 'react';
import SaunaInfo from './SaunaInfo/SaunaInfo';

import cssClasses from './MainPage.module.css';

export default function MainPage(props){
    return <div className={cssClasses.MainPage}>
        <SaunaInfo sauna='firstSauna' photos={["fs1", 'fs2']}/>
        <SaunaInfo sauna='secondSauna' photos={["ss1", 'ss2']}/>
    </div>
}