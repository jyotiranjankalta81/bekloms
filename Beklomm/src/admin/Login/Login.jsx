import React from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import axiosInstance from '../../helper/axiosInstance'
import { toast } from 'react-toastify';

export default function Login() {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const navigate = useNavigate();

    const onSubmit = (e) => {

        if (!email || !password) {
            toast.error('All Fields are Required');
        } else {
            const formdata = {
                "EMAIL": email,
                "PASSWORD": password,
            };
            axiosInstance.post('user/login', formdata).then(res => {
                try {
                    sessionStorage.setItem('token', JSON.stringify(res.data.tokens.access.token));
                    navigate("/adduser", { replace: "true" });
                    window.location.reload();
                    
                    // }
                    
                } catch (error) {
                    toast.error(error);
                    // console.log(error);
                    
                }
            })
        }
    }
    return (
        <div className='loginadmin'>
            <div className="username">
                <label>UserName</label>
                <input type="text"
                    onChange={(event) => setEmail(event.target.value)}
                />
            </div>
            <br />
            <div className="password">
                <label>Password</label>
                <input type="text"
                    onChange={(event) => setPassword(event.target.value)}

                />
            </div>
            <br />
            {/* <Link to='/adduser'> */}
                <button onClick={onSubmit}>Login</button>
            {/* </Link> */}

        </div>
    )
}
