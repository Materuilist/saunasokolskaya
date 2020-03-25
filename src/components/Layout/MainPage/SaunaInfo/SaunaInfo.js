import React from "react";
import { Route, Switch } from "react-router-dom";

import PhotoSlider from "./PhotoSlider/PhotoSlider";
import Feedback from "./Feedback/Feedback";

import cssClasses from "./SaunaInfo.module.css";
import NavIcon from "../../../../hoc/NavIcon/NavIcon";
import BackDrop from "../../../../hoc/BackDrop/BackDrop";
import SaunaContentWithBackDrop from "./SaunaContent/SaunaContent";

export default class SaunaInfo extends React.Component {
  state={
    navIsShown:false
  }

  navIconClickedHandler(){
    this.setState((prevState)=>({
        navIsShown:!prevState.navIsShown
      }))
  }

  render() {
    const { photos, sauna } = this.props;

    return(
      <div className={cssClasses.SaunaInfo}>
        <NavIcon show={this.state.navIsShown} sauna={sauna} 
          navIconClickedHandler={this.navIconClickedHandler.bind(this)}/>
        <SaunaContentWithBackDrop showBackDrop={this.state.navIsShown} 
        dismissBackDrop={this.navIconClickedHandler.bind(this)}
        sauna={sauna} photos={photos}/>
      </div>
    );
  }
}
