import React from "react";
import { NavLink } from "react-router-dom";
import cssClasses from "./Navigation.module.css";

export default function Navigation(props) {
  const navItems = [
    { caption: "Главная", link: "/home" },
    { caption: "О нас", link: "/about" },
    { caption: "Контакты", link: "/contacts" },
    { caption: 'Оставить отзыв', link:'/leavefeedback'}
  ];

  return (
    <nav className={cssClasses.Navigation}>
      <ul>
        {navItems.map(({caption, link}) => (
          <NavLink activeStyle={{
              color:'#7851a9'
          }} to={link} key={caption}>
              {caption}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
}
