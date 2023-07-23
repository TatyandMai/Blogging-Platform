import { Link } from 'react-router-dom'
import "./login.css"

function Login() {
return (
    <>
    <container>
        <form>
            <div className='login'>
                <h1>Login</h1>
            </div>
            <input
                type='text'
                placeholder="Username"
                name="username"
                min="3"
            />
            <input
                type='password'
                placeholder="Password"
                name="password"
            />
            <button type="submit">Login</button>
            <span>
                Don't have an account? <Link to="/register"> Register</Link>
            </span>
        </form>
  
    </container>
    </>
  );
}

export default Login
