import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "./login.css"
import axios from "axios"
import { loginRoute } from '../utils/APIRoutes'

function Login() {

    const navigate = useNavigate();

    const [values, setValues] = useState({
        username: "",
        password: "",
    })

    //error message
    const toastOptions = {
        position: "top-center",
        autoClose: 10000,
        hideProgressBar: true,
        closeOnClick: true,
        theme: "dark",
    }

    //user can't go to login page after user logged in
    useEffect (()=>{
        if(!localStorage.getItem("bloggingPlatform-user")){
            navigate("/");
        }
        // eslint-disable-next-line
    }, []);

    //validation to login
    const handleValidation = () => {
        const { username, password } = values;
        if (password === "") {
            toast.error("Username and password are required.", toastOptions);
            return false;
        } else if (username.length === "") {
            toast.error("Username and password are required.", toastOptions);
            return false;
        }
        return true;
    };

    //submit button(login)
    const handleSubmit = async (event) => {
        event.preventDefault();
        if(handleValidation()){
            const { username, password } = values;
            const { data } = await axios.post(loginRoute, {
                username,
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
    <>
        <div className="login-container">
        <form className='login-form' onSubmit={(event)=> handleSubmit(event)}>
            <div className='login'>
                <h1>Login</h1>
            </div>
            <input
                className='login-input'
                type='text'
                placeholder="Username"
                name="username"
                min="3"
                onChange={(e) => handleChange(e)}
            />
            <input
                className='login-input'
                type='password'
                placeholder="Password"
                name="password"
                onChange={(e) => handleChange(e)}
            />
            <button className='loginButton' type="submit">Login</button>
            <span className='login-span'>
                Don't have an account? <Link className="login-link" to="/register"> Register</Link>
            </span>
            

        </form>
        <ToastContainer />
        </div>
    </>
);
}

export default Login