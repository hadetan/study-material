import React from 'react'
import './News.css'

function News(props) {
  return (
    <div className='news-card'>
        <img src={props.news.urlToImage} alt={props.news.title} />
        <h1>{props.news.source?.name}</h1>
        <h2>{props.news.title}</h2>
        <p>{props.news.description}</p>
        <p>{props.news.publishedAt}</p>
        <button id='read' onClick={() => window.open(props.news.url)}>Read More</button>
    </div>
  )
}

export default News