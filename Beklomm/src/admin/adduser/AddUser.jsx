import React from 'react';
import '../assets/Styles.css';
import logoadmin from '../assets/images/logoadmin.png'
import user from '../assets/images/user.png'
import { Link } from 'react-router-dom';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import ProfileHeader from '../ProfileHeader/ProfileHeader';

export default function AddUser() {
    return (
        <>
            <div className='addusercontainer'>
                <AdminSidebar />
                <div className="adminbody">
                    <ProfileHeader/>
                    <div className="adduser">
                        <div className="buttons">
                            <Link to="/adduser">
                                <button className="adduserbtn">
                                    Add User
                                </button>
                            </Link>
                            <Link to="/viewuser">
                                <button className="viewuserbtn">
                                    View User
                                </button>
                            </Link>
                        </div>
                        <br />
                        <br />
                        <div className="inputfields">
                            <label>Email</label>
                            <input type="text" />
                            <br /><br />
                            <label>Password</label>
                            <input type="text" />
                        </div>
                        <br /><br />
                        <div className="addbtn">
                            <button >
                                Add
                            </button>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}


