import React from 'react';

import cssClasses from './Comment.module.css';

export default function Comment({rate, comment, user}){
    return(
        <div className={cssClasses.Comment}>
            <div className={cssClasses.CommentHeader}>
                <div className={cssClasses.Author}>{user}</div>
                <div className={cssClasses.Mark}>{rate}</div>
            </div>
            <textarea contentEditable={false} value={comment}/>
        </div>
    )
}