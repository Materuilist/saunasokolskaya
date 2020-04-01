import React from "react";

import cssClasses from "./Nav.module.css";

export default function Nav(props) {
  return (
    <ul className={cssClasses.Nav}>
      <li onClick={()=>props.routeChangedHandler("photos")}>Фото</li>
      <li onClick={()=>props.routeChangedHandler("feedback")}>Отзывы</li>
    </ul>
  );
}
