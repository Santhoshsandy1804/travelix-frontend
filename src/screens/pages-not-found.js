import React from 'react';
import { NavLink } from 'react-router-dom';

const PagesNotFoundScreen = () => {
    return (
        <div>
            <h1>This page is not found </h1>
            <NavLink to="/">Go to Home Page</NavLink>
        </div>
    );
};

export default PagesNotFoundScreen;