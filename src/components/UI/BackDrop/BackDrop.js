import React from "react";
import CSSTransition from "react-transition-group/CSSTransition";

import cssClasses from "./BackDrop.module.css";

export default function({ show, dismiss }) {
  return (
    <CSSTransition in={show} timeout={0} 
    mountOnEnter
    unmountOnExit
    classNames={{
      enter: cssClasses.BackDropEnter,
      enterDone: cssClasses.BackDropEnterDone,
      exit: cssClasses.BackDropExit,
      exitDone: cssClasses.BackDropExitDone
    }}>
      <div onClick={dismiss} className={cssClasses.BackDrop}></div>
    </CSSTransition>
  );
}
