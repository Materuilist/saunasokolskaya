import React from "react";

import cssClasses from "./Header.module.css";
import Navigation from "./Navigation/Navigation";

export default function Header(props) {
  return (
    <header className={cssClasses.Header}>
      <Navigation />
    </header>
  );
}
