import React from 'react';
import { connect } from 'react-redux';
import { setNextPhoto, setPreviousPhoto } from '../../../../../store/actions/actionCreators';

import Slider from './Slider/Slider';

import cssClasses from './PhotoSlider.module.css';

class PhotoSlider extends React.Component{
  render(){
    return(
      <div className={cssClasses.PhotoSlider}>
        <span onClick={this.props.switchToPreviousPhoto} 
        className={cssClasses.Arrow + ' ' + cssClasses.Left}>&#10094;</span>
        <Slider photos={this.props.photos}
        activePhotoIndex={this.props.activePhotoIndex}
        photosCount={this.props.photosCount}/>
        <span onClick={this.props.switchToNextPhoto} 
        className={cssClasses.Arrow + ' ' + cssClasses.Right}>&#10095;</span>
      </div>
    )
  }
};

function mapStateToProps(state, ownProps){
  return({
    photos:state[ownProps.sauna].photos.range,
    activePhotoIndex:state[ownProps.sauna].photos.activeIndex,
    photosCount:state[ownProps.sauna].photos.range.length
  })
};

function mapDispatchToProps(dispatch, ownProps){
  return({
    switchToNextPhoto: ()=>dispatch(setNextPhoto(ownProps.sauna)),
    switchToPreviousPhoto: ()=>dispatch(setPreviousPhoto(ownProps.sauna))
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoSlider);