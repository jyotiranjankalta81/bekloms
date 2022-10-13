import React from 'react';
import '../assets/Styles.css';
import logoadmin from '../assets/images/logoadmin.png'
import user from '../assets/images/user.png'
import { Link } from 'react-router-dom';
import ImageUploader from '../ImageUploader/ImageUploader';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import ProfileHeader from '../ProfileHeader/ProfileHeader';

export default function Section2() {
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

                        <div className="sections">
                            <Link to="/section1"><h4>Section 1</h4></Link>
                            <Link to="/section2"><h4>Section 2</h4></Link>
                            <Link to="/section3"><h4>Section 3</h4></Link>
                            <Link to="/section4"><h4>Section 4</h4></Link>
                            <Link to="/section5"><h4>Section 5</h4></Link>
                        </div>
                        <br />
                        <br />
                        <h3>Section 2</h3>

                        <ImageUploader />

                        <br />
                        <br />




                    </div>
                </div>
            </div>


        </>
    )
}
