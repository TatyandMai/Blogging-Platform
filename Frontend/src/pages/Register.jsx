import React, { useState, useEffect } from 'react'
import './register.css';
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import axios from "axios"
import { registerRoute } from '../utils/APIRoutes'


function Register() {

    const navigate = useNavigate();

    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    //error message css
    const toastOptions = {
        position: "top-center",
        autoClose: 10000,
        hideProgressBar: true,
        closeOnClick: true,
        theme: "dark",
    }

    //user can't go to register page after user logged in
    useEffect (()=>{
        if(!localStorage.getItem("bloggingPlatform-user")){
            navigate("/");
        }
        // eslint-disable-next-line
    }, []);

    //validation to create user
    const handleValidation = () => {
        const { username, email, password, confirmPassword } = values;
        if (password !== confirmPassword) {
            toast.error("Password and confirm password should be same.", toastOptions);
            return false;
        } else if (username.length < 3) {
            toast.error("Username should be greater than 3 characters.", toastOptions);
            return false;
        } else if (password.length < 6) {
            toast.error("Password should be equal or greater than 6 characters.", toastOptions);
            return false;
        } else if (email === "") {toast.error("Email is required.", toastOptions);
            return false;
        }
        return true;
    };

    //submit button(create user)
    const handleSubmit = async (event) => {
        event.preventDefault();
        if(handleValidation()){
            const { email, username, password } = values;
            const { data } = await axios.post(registerRoute, {
                username,
                email,
                password,
            });
            if(data.status === false){
                toast.error(data.message, toastOptions);
            }
            if(data.status === true){
                localStorage.setItem("bloggingPlatform-user", JSON.stringify(data.user))
                navigate("/");
            }
        }
    };

    //input
    const handleChange = (event) =>{
        setValues({ ...values, [event.target.name]: event.target.value });
    };

return (
    <div>
        <container className='register-container'>
            <form action='' className='register-form' onSubmit={(event)=> handleSubmit(event)}>
                <div className='register'>
                    <h1>Register</h1>
                </div>
                <input
                    className='register-input'
                    type='text'
                    placeholder="Username"
                    name="username"
                    min="3"
                    onChange={(e) => handleChange(e)}
                />
                <input
                    className='register-input'
                    type='email'
                    placeholder="Email"
                    name="email"
                    onChange={(e) => handleChange(e)}
                />
                <input
                    className='register-input'
                    type='password'
                    placeholder="Password"
                    name="password"
                    onChange={(e) => handleChange(e)}
                />
                <input
                    className='register-input'
                    type='password'
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    onChange={(e) => handleChange(e)}
                />
                <button type="submit" className='registerButton'>Create User</button>
                <span className='register-span'>
                    Already have an account? <Link className='register-link' to="/login"> Login</Link>
                </span>
            </form>
            <ToastContainer />
        </container>
    </div>
)
}

export default Register