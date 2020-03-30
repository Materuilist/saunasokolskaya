import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import MainPage from "./MainPage/MainPage";
import About from "./About/About";
import Contacts from "./Contacts/Contacts";
import AuthenticationForm from './AuthenticationForm/AuthenticationForm';

import cssClasses from "./Layout.module.css";
import LeaveFeedback from "./LeaveFeedback/LeaveFeedback";

export default function Layout(props) {
  return (
    <div className={cssClasses.Layout}>
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contacts">
          <Contacts />
        </Route>
        <Route exact path='/leavefeedback'>
          <LeaveFeedback />
        </Route>
        <Route exact path='/authentication'>
          <AuthenticationForm />
        </Route>
        <Route path="/home">
          <MainPage />
        </Route>
        <Redirect to="/home"/>
      </Switch>
    </div>
  );
}
