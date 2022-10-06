import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Box from "@mui/material/Box";
import * as React from "react";
import '../onboarding/onboarding.css'
import Navbar from "../Navbar/Navbar";
import Button from '@mui/material/Button';
import Header from "../Header/Header";
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import PersonIcon from '@mui/icons-material/Person';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import StayCurrentPortraitIcon from '@mui/icons-material/StayCurrentPortrait';
import Footer from '../Footer/Footer';
import axiosInstance from '../../helper/axiosInstance';
import {toast} from 'react-toastify';





const Onboarding = () => {
    const [name,setName] = React.useState("");
    const [email,setEmail] = React.useState("");
    const [phoneno,setPhoneNo] = React.useState(" ");
    const [about,setAbout] = React.useState( "");
    const [file,setFile] = React.useState("");

    const onSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !phoneno || !about || !file) {
            toast.error('All Fields are Required');
        }else{
            const formdata = {
                "NAME":name,
                "EMAIL":email,
                "PHONENO":phoneno,
                "ABOUT":about,
                "FILE":file
            };
            // console.log(formdata);
            // return false;
            axiosInstance.post('user/onboard',formdata).then(res=> {
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
            <div className="section_Onboarding">
                <Navbar />
                <div className="home" >
                    <h1 className="home-h1-color">Onboarding</h1>
                    <div className='Home_Baklom_button11'>
                        <h3 className="contact_h3">
                        Leading Resource for Recruitment in Technical and Non-Technical backgrounds !
                        </h3>
                    </div>
                </div>
            </div>
            <section className="form-section">
                <h3 className="header_h3">Please fill the folowing details !</h3>
                <div className="get_start" >
                    <form className={getwidth() ? "form-sec_get" : "form-sec-div"}>
                        <div className={getwidth() ? "get_row" : "input_divs"}>
                            <PersonIcon sx={{ color: "#557097", transform: "scale(1.5)", mr: 1.5 }} />
                            <input className={getwidth() ? "form_input_get" : "form-input"}
                             type="text" id="fname"
                              name="firstname"
                              onChange={(event) => setName(event.target.value)}
                               placeholder="Name" />
                        </div>
                        <div className={getwidth() ? "get_row" : "input_divs"}>
                            <EmailIcon sx={{ color: "#557097", transform: "scale(1.5)", mr: 1.5 }} />
                            <input className={getwidth() ? "form_input_get" : "form-input"} 
                            type="email" 
                            id="fname"
                             name="firstname" 
                             onChange={(event) => setEmail(event.target.value)}
                             placeholder="Email" />
                        </div>
                        <div className={getwidth() ? "get_row" : "input_divs"}>
                            <StayCurrentPortraitIcon sx={{ color: "#557097", transform: "scale(1.5)", mr: 1.5 }} />
                            <input className={getwidth() ? "form_input_get" : "form-input"} 
                            type="number"
                             id="fname"
                              name="firstname"
                              onChange={(event) => setPhoneNo(event.target.value)}
                               placeholder="Phone Number" />
                        </div>
                        <div className={getwidth() ? "get_row" : "input_divs"}>
                            <AccountBoxIcon sx={{ color: "#557097", transform: "scale(1.5)", mr: 1.5 }} />
                            <textarea className= {getwidth() ?"form_input_get":"form_textarea_onboard"}
                             id="email"
                              name="textarea"
                              onChange={(event) => setAbout(event.target.value)}
                               placeholder="Tell Me About Yourself" />
                        </div>
                        <div className={getwidth() ? "get_row" : "input_divs"}>
                            <ContactPageIcon sx={{ color: "#557097", transform: "scale(1.5)", mr: 1.5 }} />
                            {/* <textarea className= {getwidth() ?"form_input_get":"form_textarea_onboard"} id="email" name="textarea" placeholder="Massege" /> */}
                            <Button variant="contained" component="label"
                                    sx={{
                                        background: "#FFFFFF",
                                        color: "black", border: "2.5px dashed #456BB4", textTransform: "none",
                                        display: "flex",
                                        justifyContent: "space-evenly",
                                        width:"100%",
                                        height: "10vh",
                                        "&:hover": {
                                            background: "#FFFFFF"
                                        }
                                    }}>
                                    <input hidden accept="image/*"
                                    onChange={(event) => setFile(event.target.value)}
                                     multiple type="file" />
                                    <CloudUploadIcon sx={{ color: "#456BB4", transform: "scale(1.7)" }} />
                                    Drag &amp; Drop or Browse File
                                </Button>
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
export default Onboarding;






























