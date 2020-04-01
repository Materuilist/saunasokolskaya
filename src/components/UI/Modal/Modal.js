import React from "react";
import CSSTransition from "react-transition-group/CSSTransition";

import cssClasses from "./Modal.module.css";

export default function({ show, children }) {
  return (
    <CSSTransition mountOnEnter unmountOnExit in={show} timeout={0} 
    classNames={{
      enter: cssClasses.ModalEnter,
      enterDone: cssClasses.ModalEnterDone,
      exit: cssClasses.ModalExit,
      exitDone: cssClasses.ModalExitDone
    }}>
      <div className={cssClasses.Modal}>{children}</div>
    </CSSTransition>
  );
}
