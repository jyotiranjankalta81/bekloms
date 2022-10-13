import * as React from 'react';
import logoadmin from '../assets/images/logoadmin.png'
import { NavLink } from 'react-router-dom';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import './smallscreen.css'

export default function SmallScreen() {
  const [value, setValue] = React.useState(0);

  return (
    <>
      <div className="adminsidebar_mobile">
        {/* <img src={logoadmin} alt="logo" /> */}
        <NavLink  className='mobile_links' to="/adduser">
          {/* <h3>User </h3> */}
          <PersonAddIcon size="medium"/>
          </NavLink>
        <NavLink className='mobile_links' to="/managepages">
          {/* <h3>Pages </h3> */}
          <AutoStoriesIcon size='medium'/>
          </NavLink>
        <NavLink className='mobile_links' to="/getonboard">
          {/* <h3>Onboard </h3> */}
          <AirplaneTicketIcon/>
          </NavLink>
        <NavLink className='mobile_links' to="/texttestomonial">
          {/* <h3>Testimonials </h3> */}
          <SlideshowIcon size="medium"/>
          </NavLink>
        <NavLink className='mobile_links' to="/partnerwithus">
          {/* <h3>Partner with us </h3> */}
          <Diversity3Icon size = "medium"/>

          </NavLink>
        <NavLink className='mobile_links' to="/contactus">
          {/* <h3>Contact Us </h3> */}
          <ContactPhoneIcon size="medium"/>
          </NavLink>
        <NavLink className='mobile_links' to="/managenews">
          {/* <h3>Manage Newsletter </h3> */}
          <NewspaperIcon size="medium"/>
          </NavLink>

      </div>

    </>
  );
}
