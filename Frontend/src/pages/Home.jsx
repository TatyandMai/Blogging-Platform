import React from 'react'
import './home.css';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Home() {
  return (
    <>
      <div className="first-container" id="link1">
        <container className='register-container'>
          <form action='' className='register-form'>
            <div className='register'>
                <h1>Register</h1>
            </div>
            <input
                className='register-input'
                type='text'
                placeholder="Username"
                name="username"
                min="3"
            />
            <input
                className='register-input'
                type='email'
                placeholder="Email"
                name="email"
            />
            <input
                className='register-input'
                type='password'
                placeholder="Password"
                name="password"
            />
            <input
                className='register-input'
                type='password'
                placeholder="Confirm Password"
                name="confirmPassword"
            />
            <button className='registerButton' type="submit">Create User</button>
            <span className='register-span'>
                Already have an account? <Link className='register-link' to="/login"> Login</Link>
            </span>
          </form>
        </container>
      </div>
      
      <div className="second-container">
        <div className="about-left">
          <img src='https://images.unsplash.com/photo-1533038590840-1cde6e668a91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80' alt='img'></img>
        </div>
        <div className="about-right">
          <h1>ABOUT</h1>
          <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis provident quaerat eaque, assumenda asperiores veritatis quod ea est quisquam architecto reprehenderit inventore nostrum sed fugiat dignissimos velit sequi minima doloremque.</h5>
        </div>
      </div>

      <div className="last-container">
        <div className="subscription">
          <h1>SUBSCRIBE</h1>
          <input
                type='text'
                placeholder="Email"
            />
          <Button variant="success">SUBSCRIBE</Button>{' '}
        </div>
        <div className="footer">
          <div className="signup-link"><AnchorLink className="signup-button" href="#link1">SIGN UP</AnchorLink></div>
          <div className="login-link"><Link className="login-button" to="/login">LOGIN</Link></div>
        </div>
      </div>

    </>
  )
}

export default Home



