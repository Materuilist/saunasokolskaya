import React from 'react';
import { NavLink } from 'react-router-dom';

import cssClasses from './Nav.module.css'

export default function Nav(props){
    return (
        <ul className={cssClasses.Nav}>
            <NavLink to="/home">
                <li>
                    Фото
                </li>
            </NavLink>
            <NavLink to={`/home/feedback/${props.sauna}`}>
                <li>
                    Отзывы
                </li>
            </NavLink>
        </ul>
    )
}