import React from "react";
import Navbar from "../Navbar/Navbar";
import { Link } from 'react-router-dom'
import '../contact/contact.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StayCurrentPortraitIcon from '@mui/icons-material/StayCurrentPortrait';
import EmailIcon from '@mui/icons-material/Email';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import Footer from "../Footer/Footer";
import axiosInstance from '../../helper/axiosInstance';
import {toast} from 'react-toastify';


const Contact = () => {
  const [name,setName] = React.useState("");
  const [email,setEmail] = React.useState("");
  const [about,setAbout] = React.useState("");

  const onSubmit = (e) => {
        
    if (!name || !email || !about ) {
        toast.error('All Fields are Required');
    }else{
        const formdata = {
            "CONTACT_NAME":name,
            "CONTACT_EMAIL":email,
            "CONTACT_MESSAGE":about,
        };
        // console.log(formdata);
        // return false;
        axiosInstance.post('user/contacts',formdata).then(res=> {
            try {
                if (res.data.status === 1) {
                    toast.success("your request submitted");
                    
                }
                
            } catch (error) {
                toast.error(error);
                // console.log(error);
                
            }
        })
    }
}

  const getwidth = () => {
    if (window.innerWidth < 580) {
      return true;
    } else {
      return false;
    }
  }
  return (
    <>

      {/* <Header /> */}
      <div className="section2-bg">
        <Navbar />
        <div className="home" >
          <h1 className="home-h1-color">Contact Us</h1>
          <div className='Home_Baklom_button11'>
            {/* <Link to="/getstart"> <button type="btn" className="btn btn-primary border-0">Get Started</button></Link> */}
            <h3 className="contact_h3">
              Let’s talk about your website or projects. Send us a message and we
              <br /> will be in touch within one business day
            </h3>
          </div>
        </div>
      </div>
      <div className="row rounded section-top contact-form">
        <div className="col-1"></div>
        <div className="col-5 shadow">
          <div >
            <h3 className="h1-text">Contact Information</h3>
            <div className='dialog_divider'>
              <div className='divider_div'></div>
              <ArrowDropDownCircleIcon sx={{ color: "#557097",transform:"scale(1.5)" }} />
              <div className='divider_div'></div>
            </div>
            <div class="container my-3 d-flex justify-content-center">
              <div className="get_starts" >
                <form className={getwidth() ? "form-sec_get" : "form-sec_contact"}>
                  <div className={getwidth() ? "get_row" : "input_divs"}>
                    <input className={getwidth() ? "form_input_get" : "form-input"}
                     type="text"
                      id="fname"
                      onChange={(event) => setName(event.target.value)}
                       name="firstname"
                        placeholder="Name" />
                  </div>
                  <div className={getwidth() ? "get_row" : "input_divs"}>
                    <input className={getwidth() ? "form_input_get" : "form-input"}
                     type="email"
                     onChange={(event) => setEmail(event.target.value)}
                      id="fname"
                       name="firstname"
                        placeholder="Email" />
                  </div>
                  <div className={getwidth() ? "get_row" : "input_divs"}>
                    <textarea className={getwidth() ? "form_input_get" : "form_textarea_onboard"}
                     id="email"
                     onChange={(event) => setAbout(event.target.value)}
                      name="textarea"
                       placeholder="Tell Me About Yourself" />
                  </div>
                  <button type="btn" onClick={onSubmit} className={getwidth() ? "get_btn" : "btn_get_submit"}
                  >Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-5 shadow">
          <div >
            <h3 className="h1-text">Get in touch</h3>
            <div className='dialog_divider'>
              <div className='divider_div'></div>
              <ArrowDropDownCircleIcon sx={{ color: "#557097",transform:"scale(1.5)" }} />
              <div className='divider_div'></div>
            </div>
            <div className="get_in_touch">
              <div className="get_in_touch_img_div">
                <img src="images/contactus/all.png" className="contact_img" />
              </div>
              <div className="contact_div">
                <LocationOnIcon sx={{ color: "#557097", transform: "scale(1.5)", mr: 1.5 }} />
                <p className="get-touch">Beklom Technologies Inc.
                  4 McHugh Rd,
                  <br />
                  &nbsp;Ajax, ON - L1Z 0M8</p>
              </div>
              <div className="contact_div">
                <StayCurrentPortraitIcon sx={{ color: "#557097", transform: "scale(1.5)", mr: 1.5 }}/>
                <p className="get-touch">+1-647-468-7713
                    <br />
                    +1-647-954-4590
                  </p>
              </div>
              <div className="contact_div">
                <EmailIcon sx={{ color: "#557097", transform: "scale(1.5)", mr: 1.5 }} />
                <p className="get-touch">info@beklom.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1"></div>
      </div>
      <Footer/>
    </>
  )
}
export default Contact