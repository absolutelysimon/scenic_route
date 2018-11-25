import React from 'react'
import './Home.css'
import HomeSearch from '../HomeSearch/HomeSearch'
import Results from '../HomeSearch/Results'

const Home = () => {
    return (
        <div className="homeWrapper">
            <h4 className="home-title">Scenic Route</h4>
            <div className="gps-home-search">
                <HomeSearch/>
                <Results />
            </div>
        </div>
    )

}

export default Home
