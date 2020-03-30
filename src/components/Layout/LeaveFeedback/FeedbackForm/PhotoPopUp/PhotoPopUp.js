import React from 'react';
import { connect } from 'react-redux';

import cssClasses from './PhotoPopUp.module.css';

function PhotoPopUp({sauna, photo}){
    return(
        <div style={{display:sauna==='none'?'none':'block'}} className={cssClasses.Phot0Container}>
            <img src={photo} alt={sauna + 'photo'}>
            </img>
        </div>
    )
}

const mapStateToProps=(state, ownProps)=>({
    photo:ownProps.sauna==='none'?null:state[ownProps.sauna].photos.active
});

export default connect(mapStateToProps)(PhotoPopUp);