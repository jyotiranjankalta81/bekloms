import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./components/home/Home";
import AboutUS from "./components/aboutus/AboutUS";
import Blogs from "./components/blogs/Blogs";
import FAQ from "./components/FAQ";
import Contact from "./components/contact/Contact";
import Services from "./components/services/Services"
import Onboarding from "./components/onboarding/Onboarding";
import Getstart from "./components/home/Getstart";
import Partnerwith from "./components/partnerwith/Partnerwith";
import Blogcategories from "./components/blogs/Blogcategories";
import Footer from "./components/Footer/Footer";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import ScrollTop from "./components/ScrollTop";
import Login from "./admin/Login/Login";
import AddUser from "./admin/adduser/AddUser";
import ViewUser from "./admin/viewuser/ViewUser";
import ManagePages from "./admin/managepages/ManagePages";
import ContactUs from "./admin/contactus/ContactUs";
import ManageNews from "./admin/managenewsletter/ManageNews";
import TextTestomonial from "./admin/texttestomonial/TextTestomonial";
import GetOnboard from "./admin/getonboard/GetOnboard";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PartnerWithUs from "./admin/partnerwithus/PartnerWithUs";
import AddBlogs from "./admin/addblogs/AddBlogs";
import Section1 from "./admin/section1/Section1";
import Section2 from "./admin/section2/Section2";
import Section3 from "./admin/section3/Section3";
import Section4 from "./admin/section4/Section4";
import Section5 from "./admin/section5/Section5";
import ResetPassword from "./admin/resetpassword.jsx/ResetPassword";

function App() {

  var isAuthenticated = sessionStorage.getItem("token");
  return (
    <div className="App">

      <Router>
        <ScrollTop/>
        {/* <Navbar/> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/aboutus" element={<AboutUS />} />
          <Route exact path="/blogs" element={<Blogs />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/faq" element={<FAQ />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/onboarding" element={< Onboarding />} />
          <Route exact path="/getstart" element={< Getstart />} />
          <Route exact path="/partnerwith" element={< Partnerwith />} />
          <Route exact path="/blog-categories" element={< Blogcategories />} />
        
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/adduser" element={ isAuthenticated ? <AddUser/> : <Login/> } />
          <Route exact path="/managepages" element={ isAuthenticated ? <ManagePages/> : <Login/>} />
          <Route exact path="/viewuser" element={ isAuthenticated ? <ViewUser/> : <Login/>} />
          <Route exact path="/contactus" element={ isAuthenticated ? <ContactUs/> : <Login/>} />
          <Route exact path="/managenews" element={ isAuthenticated ? <ManageNews/> : <Login/>} />
          <Route exact path="/texttestomonial" element={ isAuthenticated ? <TextTestomonial/> : <Login/>} />
          <Route exact path="/getonboard" element={ isAuthenticated ? <GetOnboard/> : <Login/>} />
          <Route exact path="/partnerwithus" element={ isAuthenticated ? <PartnerWithUs/> : <Login/>} />
          <Route exact path="/resetpassword" element={ isAuthenticated ? <ResetPassword/> : <Login/>} />
          <Route exact path="/addblogs" element={ isAuthenticated ? <AddBlogs/> : <Login/>} />
          <Route exact path="/section1" element={ isAuthenticated ? <Section1/> : <Login/>} />
          <Route exact path="/section2" element={ isAuthenticated ? <Section2/> : <Login/>} />
          <Route exact path="/section3" element={ isAuthenticated ? <Section3/> : <Login/>} />
          <Route exact path="/section4" element={ isAuthenticated ? <Section4/> : <Login/>} />
          <Route exact path="/section5" element={ isAuthenticated ? <Section5/> : <Login/>} />

        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
