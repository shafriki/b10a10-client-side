import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <h1>Main Layout</h1>
            <Outlet></Outlet> {/* This will render the child routes */}
        </div>
    );
};

export default MainLayout;
