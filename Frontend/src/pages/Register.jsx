import { Link } from 'react-router-dom'
import "./register.css"

function Register() {
  return (
    <>
      <container>
        <form action=''>
            <div className='register'>
                <h1>Register</h1>
            </div>
            <input
                type='text'
                placeholder="Username"
                name="username"
                min="3"
            />
            <input
                type='email'
                placeholder="Email"
                name="email"
            />
            <input
                type='password'
                placeholder="Password"
                name="password"
            />
            <input
                type='password'
                placeholder="Confirm Password"
                name="confirmPassword"
            />
            <button type="submit">Create User</button>
            <span>
                Already have an account? <Link to="/login"> Login</Link>
            </span>
        </form>
    </container>
    </>
  )
}

export default Register
