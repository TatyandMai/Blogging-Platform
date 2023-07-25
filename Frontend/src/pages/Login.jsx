import { Link } from 'react-router-dom'
import "./login.css"

function Login() {
return (
    <>
        <div className="login-container">
        <form className='login-form'>
            <div className='login'>
                <h1>Login</h1>
            </div>
            <input
                className='login-input'
                type='text'
                placeholder="Username"
                name="username"
                min="3"
            />
            <input
                className='login-input'
                type='password'
                placeholder="Password"
                name="password"
            />
            <button className='loginButton' type="submit">Login</button>
            <span className='login-span'>
                Don't have an account? <Link className="login-link" to="/"> Register</Link>
            </span>
        </form>
        </div>
    </>
  );
}

export default Login
