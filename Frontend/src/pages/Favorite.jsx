import React from 'react'
import Header from '../components/Header'
import Article from '../components/Article'
import './favorite.css'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Favorite() {
  return (
    <>
      <Header/>
      <div className="favoriteContent">
        <h1>MY FAVORITE</h1>
          <Row xs={1} md={3} className="g-4">
            {Array.from({ length: 6 }).map((_, idx) => (
              <Col key={idx}>
                <Article />
              </Col>
            ))}
          </Row>
      </div>
    </>
  )
}

export default Favorite
