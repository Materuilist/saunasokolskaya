import React from "react";
import { Route, Switch } from "react-router-dom";

import MainPage from "./MainPage/MainPage";
import About from "./About/About";
import Contacts from "./Contacts/Contacts";

import cssClasses from "./Layout.module.css";

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
        <Route path="/home">
          <MainPage />
        </Route>
      </Switch>
    </div>
  );
}
