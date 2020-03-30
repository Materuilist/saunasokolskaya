import React from 'react';
import { NavLink } from 'react-router-dom';

import cssClasses from './Nav.module.css'

export default function Nav(props){
    return (
        <ul className={cssClasses.Nav}>
            <NavLink onClick={props.routeChanged} to="/home">
                <li>
                    Фото
                </li>
            </NavLink>
            <NavLink onClick={props.routeChanged} to={`/home/feedback/${props.sauna}`}>
                <li>
                    Отзывы
                </li>
            </NavLink>
        </ul>
    )
}