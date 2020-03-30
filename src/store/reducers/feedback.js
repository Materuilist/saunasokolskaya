import { 
    ADD_COMMENT, 
    SET_LOADING, 
    UNSET_LOADING, 
    RELOAD_FEEDBACK, 
    SET_NEXT_PHOTO, 
    SET_PREVIOUS_PHOTO,
    SET_AUTHENTICATED_STATUS
} from '../actions/actionTypes';
import _ from 'lodash';

//firstsauna
import photo1 from '../../images/firstSauna/cXm8TSJDlIg.jpg';
import photo2 from '../../images/firstSauna/h3PQJ8VBL7U.jpg';
import photo3 from '../../images/firstSauna/OJ2c5QF56_4.jpg';
import photo4 from '../../images/secondSauna/vQ8vQxbQB_g.jpg';
import photo5 from '../../images/secondSauna/XRXLIWEVVTo.jpg';
import photo6 from '../../images/secondSauna/xyafoYP59PI.jpg';

//secondsauna

const initialState = {
    isAuth:false,
    backend:'http://localhost:8080',
    firstSauna:{
        feedback:{
            loading:false,
            comments:[]
        },
        photos:{
            range:[
                photo1, photo2, photo3
            ],
            active:photo1,
            activeIndex:0
        }
    },
    secondSauna:{
        feedback:{
            loading:false,
            comments:[]
        },
        photos:{
            range:[
                photo6, photo5, photo4
            ],
            active:photo6,
            activeIndex:0
        }
    }
};

export default function(prevState=initialState, action){
    switch (action.type) {
        case ADD_COMMENT:{
            let newState = _.cloneDeep(prevState);
            newState[action.sauna].feedback.comments.push({rate:action.rate, content:action.content});
            return newState;
        }

        case SET_LOADING:{
            let newState = _.cloneDeep(prevState);
            newState[action.sauna].feedback.loading = true;
            return newState;
        }

        case UNSET_LOADING:{
            let newState = _.cloneDeep(prevState);
            newState[action.sauna].feedback.loading = false;
            return newState;
        }
    
        case RELOAD_FEEDBACK:{
            let newState = _.cloneDeep(prevState);
            newState[action.sauna].feedback.comments = action.comments;
            return newState;
        }

        case SET_NEXT_PHOTO:{
            let newState = _.cloneDeep(prevState);
            const photos = newState[action.sauna].photos;
            const currentActiveIndex = photos.activeIndex;
            //если фото первое
            const newIndex = currentActiveIndex===newState[action.sauna].photos.range.length-1?
                0:currentActiveIndex+1;
            newState[action.sauna].photos.activeIndex = newIndex;
            newState[action.sauna].photos.active = photos.range[newIndex];
            return newState;
        }

        case SET_PREVIOUS_PHOTO:{
            let newState = _.cloneDeep(prevState);
            const photos = newState[action.sauna].photos;
            const currentActiveIndex = photos.activeIndex;
            //если фото первое
            const newIndex = currentActiveIndex===0?
                newState[action.sauna].photos.range.length-1:currentActiveIndex-1;
            newState[action.sauna].photos.activeIndex = newIndex;
            newState[action.sauna].photos.active = photos.range[newIndex];
            return newState;
        }

        case SET_AUTHENTICATED_STATUS:{
            let newState = _.cloneDeep(prevState);
            newState.isAuth = action.isAuth;
            return newState;
        }

        default:
            return prevState;
    }
};