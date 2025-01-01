import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            Footer ComponenT
            <NavLink to='/'>a</NavLink>
            <NavLink to='/allArtifacts'>b</NavLink>
            <NavLink to='/addArtifacts'>c</NavLink>
        </div>
    );
};

export default Footer;