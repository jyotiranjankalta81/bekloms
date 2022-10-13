import React from 'react'
import logoadmin from '../assets/images/logoadmin.png'
import { NavLink } from 'react-router-dom';

const BigScreen = () => {
    return (
        <>
            <div className="adminsidebar">
                <img src={logoadmin} alt="logo" />
                <NavLink to="/adduser">Manage User </NavLink>
                <NavLink to="/managepages">Manage Pages </NavLink>
                <NavLink to="/getonboard">Get Onboard </NavLink>
                <NavLink to="/texttestomonial">Text Testimonials </NavLink>
                <NavLink to="/partnerwithus">Partner with us </NavLink>
                <NavLink to="/contactus">Contact Us </NavLink>
                <NavLink to="/managenews">Manage Newsletter </NavLink>

            </div>
        </>
    )
}

export default BigScreen