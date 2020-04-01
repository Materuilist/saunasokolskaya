import React from "react";
import { connect } from "react-redux";

import Feedback from "../Feedback/Feedback";
import PhotoSlider from "../PhotoSlider/PhotoSlider";
import BackDrop from "../../../../UI/BackDrop/BackDrop";
import FeedbackForm from "../../../FeedbackForm/FeedbackForm";

import { toggleAuthStatus } from "../../../../../store/actions/actionCreators";

import cssClasses from "./SaunaContent.module.css";

class SaunaContent extends React.Component {
  componentDidMount() {
    //ручной переход по URL, при котором теряется состояние redux хранилища
    if (
      (localStorage.getItem("jwt") && !this.props.isAuth) ||
      (!localStorage.getItem("jwt") && this.props.isAuth)
    ) {
      this.props.toggleAuthStatus();
    }
  }

  componentDidUpdate(){
    //ручной переход по URL, при котором теряется состояние redux хранилища
    if (
      (localStorage.getItem("jwt") && !this.props.isAuth) ||
      (!localStorage.getItem("jwt") && this.props.isAuth)
    ) {
      this.props.toggleAuthStatus();
    }
  }

  render() {
    const {
      sauna,
      photos,
      activePage,
      routeChangedHandler,
      showBackDrop,
      dismissBackDrop,
      showAuthentication
    } = this.props;
    return (
      <div className={cssClasses.SaunaContent}>
        <BackDrop show={showBackDrop} dismiss={dismissBackDrop} />
        {activePage === "photos" ? (
          <PhotoSlider sauna={sauna} photos={photos} />
        ) : activePage === "feedback" ? (
          <Feedback
            showAuthentication={showAuthentication}
            routeChangedHandler={routeChangedHandler}
            sauna={sauna}
          />
        ) : (
          <FeedbackForm
            routeChangedHandler={routeChangedHandler}
            sauna={sauna}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuth: state.isAuth
});

const mapDispatchToProps = dispatch => ({
  toggleAuthStatus: () => dispatch(toggleAuthStatus())
});

export default connect(mapStateToProps, mapDispatchToProps)(SaunaContent);