import './navigation.css';
import React, { useState } from 'react';
function Navigation(props) {
    const handleToggle = props.togglemenu;
    return (
        <nav className="navigation">
            <div className="action">
                <button className="close" onClick={handleToggle}>
                    <i className="fal fa-times"></i>
                </button>
            </div>
            <ul>
                <li>
                    <a href="">Career Overview</a>
                </li>
                <li>
                    <a href="">About Me</a>
                </li>
                <li>
                    <a href="">Experience</a>
                </li>
                <li>
                    <a href="">Skills</a>
                </li>
                <li>
                    <a href="">Key Responsiblities</a>
                </li>
                <li>
                    <a href="">Projects</a>
                </li>
                <li>
                    <a href="">Awards</a>
                </li>
                <li>
                    <a href="">Education</a>
                </li>
                <li>
                    <a href="">Personal Info</a>
                </li>
                <li>
                    <a href="">References</a>
                </li>
                <li>
                    <a href="">Follow Me</a>
                </li>
            </ul>
        </nav>
    );
}
export default Navigation;
