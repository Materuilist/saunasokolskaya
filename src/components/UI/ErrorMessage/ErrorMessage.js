import React from 'react';

import cssClasses from './ErrorMessage.module.css';

export default function({errorMessage}){
    return(
        <div className={cssClasses.ErrorMessage}>
            {errorMessage}
        </div>
    )
}