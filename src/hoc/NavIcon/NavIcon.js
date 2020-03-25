import React from "react";
import CSSTransition from "react-transition-group/CSSTransition";

import cssClasses from "./NavIcon.module.css";
import Nav from "../../components/Layout/MainPage/SaunaInfo/Nav/Nav";

export default class NavIcon extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CSSTransition
          in={this.props.show}
          timeout={0}
          classNames={{
            enter: cssClasses.SideBarEnter,
            enterDone: cssClasses.SideBarEnterDone,
            exit: cssClasses.SideBarExit,
            exitDone: cssClasses.SideBarExitDone
          }}
        >
          <div className={cssClasses.SideBar}>
              <Nav {...this.props}/>
          </div>
        </CSSTransition>
        <CSSTransition
          in={!this.props.show}
          timeout={0}
          classNames={{
            enter: cssClasses.NavIconEnter,
            enterDone: cssClasses.NavIconEnterDone,
            exit: cssClasses.NavIconExit,
            exitDone: cssClasses.NavIconExitDone
          }}
        >
          <span className={cssClasses.NavIcon} onClick={this.props.navIconClickedHandler}>
            &#9776;
          </span>
        </CSSTransition>
      </React.Fragment>
    );
  }
}


