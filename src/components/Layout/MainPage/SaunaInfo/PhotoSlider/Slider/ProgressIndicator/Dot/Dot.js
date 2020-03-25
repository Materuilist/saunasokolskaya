import React from 'react';

import cssClasses from './Dot.module.css';

function Dot({filled}){
    const css = filled?cssClasses.Dot + ' ' + cssClasses.active:cssClasses.Dot;
    return(
        <div className={css}></div>
    )
}

export default Dot;