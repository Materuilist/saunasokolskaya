import React from 'react';

import cssClasses from './Comment.module.css';

export default function Comment({rate, comment, user, isAdmin, deleteFeedbackClicked, _id}){
    return(
        <div className={cssClasses.Comment}>
            <div className={cssClasses.CommentHeader}>
                <div className={cssClasses.Author}>{user}</div>
                <div className={cssClasses.Mark}>{rate}</div>
                {isAdmin?<div
                  onClick={deleteFeedbackClicked}
                  className={cssClasses.DeleteButton}
                >
                  [ Х ]
                </div>:null}
            </div>
            <textarea contentEditable={false} value={comment}/>
        </div>
    )
}