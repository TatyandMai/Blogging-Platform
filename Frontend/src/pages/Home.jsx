import React from 'react'
import './home.css';
import Article from '../components/Article';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Home() {
  return (
    <>
      <div className="first-container">
        <div className="header">
          <div className="buttons">
          <div><Link className="signup-button" to="/register">SIGN UP</Link></div>
          <div><Link className="login-button" to="/login">LOGIN</Link></div>
          </div>
        </div>
        <h1 className="logo">Logo</h1>
      </div>

      <div className="second-container">
        <h1>LATEST ARTICLES</h1>
          <Row xs={1} md={3} className="g-4">
            {Array.from({ length: 6 }).map((_, idx) => (
              <Col key={idx}>
                <Article />
              </Col>
            ))}
          </Row>
      </div>

      <div className="third-container">
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
          <div className="signup-link"><Link className="signup-button" to="/register">SIGN UP</Link></div>
          <div className="login-link"><Link className="login-button" to="/login">LOGIN</Link></div>
          <div className="latestArticle-link"><Link className="latestArticle-button" to="/">LATEST ARTICLES</Link></div>
        </div>
      </div>

    </>
  )
}

export default Home



