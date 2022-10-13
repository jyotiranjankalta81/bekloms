import React from 'react';
import '../assets/Styles.css';
import logoadmin from '../assets/images/logoadmin.png'
import user from '../assets/images/user.png'
import { Link } from 'react-router-dom';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import OnBoardTable from '../MastertTables/OnBoardTable';
import ProfileHeader from '../ProfileHeader/ProfileHeader';

export default function GetOnboard() {
    return (
        <>
            <div className='addusercontainer'>
                <AdminSidebar/>
                <div className="adminbody">
                    <ProfileHeader/>
                    <div className="adduser">

                        <br />   <br />

                        <div className="tables">
                            <OnBoardTable/>

                        </div>


                    </div>
                </div>
            </div>


        </>
    )
}
