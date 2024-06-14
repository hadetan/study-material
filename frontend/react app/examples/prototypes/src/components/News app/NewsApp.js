import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import News from './News'

function NewsApp() {
    const apiKey = 'df3953cd79a04b4aac4f2a65454d197e'

    const [newsList, setNewsList] = useState([])
    const [query, setQuery] = useState('tech')
    const apiUrl = `https://newsapi.org/v2/everything?q=${query}&from=2024-05-13&sortBy=publishedAt&apiKey=${apiKey}`

    const queryRef = useRef(null)

    useEffect(() => {
        fetchData()
    }, [query])

    const fetchData = async () => {
        try {
            const { data } = await axios.get(apiUrl)
            // console.log(data.articles)
            setNewsList(data.articles)
        } catch (e) {
            console.log(e, 'Error occured while fetching data from news API')
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const queryValue = queryRef.current.value
        setQuery(queryValue)
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h1
                style={{
                    fontFamily: 'monospace',
                    marginBottom: '20px',
                    marginTop: '20px',
                    fontSize: '3rem'
                }}
            >
                News Around The World
            </h1>

            <form onSubmit={handleSubmit}>
                <input type="search" ref={queryRef} />
                <input onClick={handleSubmit} type="submit" value="Submit" />
            </form>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 45%)',
                    justifyContent: 'space-evenly',
                    rowGap: '20px',
                    marginTop: '20px',
                }}
            >
                {/* <button onClick={fetchData}>fetch</button> */}
                {newsList.map((news) => {
                    return <News news={news} key={news.url} />
                })}
            </div>
        </div>
    )
}

export default NewsApp
