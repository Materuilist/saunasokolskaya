import { 
    ADD_COMMENT, 
    SET_LOADING, 
    UNSET_LOADING, 
    RELOAD_FEEDBACK, 
    SET_NEXT_PHOTO, 
    SET_PREVIOUS_PHOTO
} from './actionTypes';

function setLoading(sauna){
    return(
        {
            type: SET_LOADING,
            sauna
        }
    )
};

function unsetLoading(sauna){
    return(
        {
            type: UNSET_LOADING,
            sauna
        }
    )
};

function addCommentSync(postInfo){
    return(
        {
            type: ADD_COMMENT,
            ...postInfo
        }
    )
};

export function addComment(postInfo){
    return async function(dispatch){
        const res = await fetch('http://localhost:8080', {
            method:'POST',
            body:JSON.stringify(postInfo),
            headers:{
                'Content-Type':'application/json'
            }
        });

        addCommentSync(postInfo);
    }
};

function reloadFeedbackSync(sauna, comments){
    return({
        type:RELOAD_FEEDBACK,
        sauna,
        comments
    })
};

export function reloadFeedback(sauna){
    return async function(dispatch){
        const res = await fetch('http://localhost:8080/feedback/' + sauna);
        const feedback = await res.json();
        dispatch(reloadFeedbackSync(sauna, feedback));
    }
};

export function setNextPhoto(sauna){
    return {
        type:SET_NEXT_PHOTO,
        sauna
    }
};

export function setPreviousPhoto(sauna){
    return {
        type:SET_PREVIOUS_PHOTO,
        sauna
    }
};