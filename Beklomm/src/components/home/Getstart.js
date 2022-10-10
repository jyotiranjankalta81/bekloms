// import React from "react";
import Navbar from '../Navbar/Navbar';
// import Navbar from "../Navbar";
import './getstart.css';
import * as React from 'react';
import axiosInstance from '../../helper/axiosInstance';
import {toast} from 'react-toastify';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import PersonIcon from '@mui/icons-material/Person';
import Footer from '../Footer/Footer';

const Getstart = () => {

    const [name,setName] = React.useState("");
    const [email,setEmail] = React.useState("");
    const [phoneno,setPhoneNo] = React.useState(" ");

    const onSubmit = (e) => {
        // e.preventDefault();
        
        if (!name || !email || !phoneno ) {
            toast.error('All Fields are Required');
        }else{
            const formdata = {
                "NAME":name,
                "EMAIL":email,
                "PHONENO":phoneno,
            };
            axiosInstance.post('user/getstarted',formdata).then(res=> {
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
            <div className="bg-header">
                <Navbar />
                <section className="header-section">
                    <h1 className="get-header-h1">
                        Get Started
                    </h1>
                    <h3 className="header-p-">Let’s talk about your website or projects.
                        Send us a message and we <br />
                        will be in touch within one business day</h3>
                </section>
                {/* <img src="images/onboarding/vector1.png" className="get-vec" alt="" /> */}
            </div>
            <section className="form-section">
                <p className="p-text">You can think of Beklom Technologies as a one-stop shop for all of your outsourced company development needs. Web development, Social Media management, US Taxation, Book-keeping, Technical/Non-Technical recruitment, Graphic Designing, and Lead generation are all areas in which we specialize. After that, we perform all of the cold outreach to qualify prospects, generate interest, and open sales conversations for you.</p>
                <div className="get_start" >
                    <form className={getwidth() ? "form-sec_get" : "form-sec-div"}>
                        <div className={getwidth() ? "get_row" : "input_divs"}>
                            <PersonIcon sx={{ color: "#557097", transform: "scale(1.5)", mr: 1.5 }} />
                            <input className={getwidth() ? "form_input_get" : "form-input"}
                             type="text" id="fname" 
                             onChange={(event) => setName(event.target.value)}
                             name="firstname"
                              placeholder="Name" />
                        </div>
                        <div className={getwidth() ? "get_row" : "input_divs"}>
                            <EmailIcon sx={{ color: "#557097", transform: "scale(1.5)", mr: 1.5 }} />
                            <input className={getwidth() ? "form_input_get" : "form-input"}
                             type="email"
                              id="fname"
                              onChange={(event) => setEmail(event.target.value)}
                               name="firstname"
                                placeholder="Email" />
                        </div>
                        <div className={getwidth() ? "get_row" : "input_divs"}>
                            <CallIcon sx={{ color: "#557097", transform: "scale(1.5)", mr: 1.5 }} />
                            <input className={getwidth() ? "form_input_get" : "form-input"}
                             type="number" 
                             id="fname"
                             onChange={(event) => setPhoneNo(event.target.value)}
                              name="firstname"
                               placeholder="Phone Number" />
                        </div>

                        <button type="btn" onClick={onSubmit} className={getwidth() ? "get_btn" : "btn_get_submit"}
                        >Submit</button>
                    </form>
                </div>

            </section>

            <Footer/>






        </>
    )
}
export default Getstart