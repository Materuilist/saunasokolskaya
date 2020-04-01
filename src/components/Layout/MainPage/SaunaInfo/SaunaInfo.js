import React from "react";

import cssClasses from "./SaunaInfo.module.css";
import NavIcon from "../../../UI/NavIcon/NavIcon";
import SaunaContent from "./SaunaContent/SaunaContent";

export default class SaunaInfo extends React.Component {
  state = {
    activePage: "photos",
    navIsShown: false
  };

  routeChangedHandler(newPage, preventToggleNavIcon) {
    if (newPage !== "leavefeedback" && !preventToggleNavIcon) {
      this.navIconClickedHandler();
    }
    this.setState(prevState => ({
      //фильтрация событий
      activePage: newPage
    }));
  }

  navIconClickedHandler() {
    this.setState(prevState => ({
      navIsShown: !prevState.navIsShown
    }));
  }

  render() {
    const { photos, sauna } = this.props;

    return (
      <div className={cssClasses.SaunaInfo}>
        <NavIcon
          routeChangedHandler={this.routeChangedHandler.bind(this)}
          show={this.state.navIsShown}
          sauna={sauna}
          navIconClickedHandler={this.navIconClickedHandler.bind(this)}
        />
        <SaunaContent
          showAuthentication={this.props.showAuthentication}
          routeChangedHandler={this.routeChangedHandler.bind(this)}
          activePage={this.state.activePage}
          showBackDrop={this.state.navIsShown}
          dismissBackDrop={this.navIconClickedHandler.bind(this)}
          sauna={sauna}
          photos={photos}
        />
      </div>
    );
  }
}
