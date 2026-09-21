import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/common/Navbar'
import ContactFooter from '../components/common/ContactFooter'

const Layout = () => {
    return (
        <div className="app-container">
            <Navbar />
            <div className="main-content">
                <Outlet />
            </div>
            <ContactFooter />
        </div>
    )
}

export default Layout
