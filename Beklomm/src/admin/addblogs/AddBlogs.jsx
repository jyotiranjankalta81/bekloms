import React from 'react';
import '../assets/Styles.css';
import user from '../assets/images/user.png'
import logoadmin from '../assets/images/logoadmin.png'
import { Link } from 'react-router-dom';
import ProfileHeader from '../ProfileHeader/ProfileHeader';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

export default function AddBlogs() {
    return (
        <>
            <div className='addusercontainer'>
                <AdminSidebar/>
                <div className="adminbody">
                    <ProfileHeader/>
                    <div className="adduser">
                        <div className="buttons">
                            <Link to="/managepages"><button className="viewuserbtn">
                                Homepage
                            </button></Link>
                            <Link to="/addblogs"><button className="viewuserbtn">
                                Blogs
                            </button></Link>
                            <Link to="/**"><button className="viewuserbtn">
                                Our Services
                            </button></Link>
                            <Link to="/**"><button className="viewuserbtn">
                                About Us
                            </button></Link>
                        </div>

                        <br /><br />

                        <div className="addreview">
                            <h2>Add Blogs</h2>
                            <input type="text" />
                            <button>Add</button>
                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}
