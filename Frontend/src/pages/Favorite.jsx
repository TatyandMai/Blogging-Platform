import React from 'react'
import Header from '../components/Header'
import Article from '../components/Article'
import './favorite.css'

function Favorite() {
  return (
    <>
      <Header/>
      <div className="favoriteContent">
        <h1>Favorite</h1>
        <div className="articleList">
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
        </div>
      </div>
    </>
  )
}

export default Favorite
