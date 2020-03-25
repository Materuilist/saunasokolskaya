import React from 'react';

export default function Comment({rate, comment}){
    return(
        <div>
            <h1>{rate}</h1>
            <textarea value={comment}/>
        </div>
    )
}