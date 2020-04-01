import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import {
  toggleAdminStatus,
  toggleAuthStatus
} from "../../store/actions/actionCreators";

import MainPage from "./MainPage/MainPage";
import About from "./About/About";
import Contacts from "./Contacts/Contacts";

import cssClasses from "./Layout.module.css";
import AdminPanel from "./AdminPanel/AdminPanel";

class Layout extends React.Component {
  componentDidMount() {
    //ручной переход по URL, при котором теряется состояние redux хранилища
    if (
      (localStorage.getItem("ajwt") && !this.props.isAdmin) ||
      (!localStorage.getItem("ajwt") && this.props.isAdmin)
    ) {
      this.props.toggleAdminStatus();
    }
    if (
      (localStorage.getItem("jwt") && !this.props.isAuth) ||
      (!localStorage.getItem("jwt") && this.props.isAuth)
    ) {
      this.props.toggleAuthStatus();
    }
  }

  render() {
    return (
      <div className={cssClasses.Layout}>
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contacts">
            <Contacts />
          </Route>
          <Route exact path="/home">
            <MainPage toggleShowAuth={this.props.toggleShowAuth} />
          </Route>
          <Route exact path="/admin">
            <AdminPanel />
          </Route>
          <Redirect to="/home" />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAdmin: state.isAdmin,
  isAuth: state.isAuth
});

const mapDispatchToProps = dispatch => ({
  toggleAdminStatus: () => dispatch(toggleAdminStatus()),
  toggleAuthStatus: () => dispatch(toggleAuthStatus())
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
