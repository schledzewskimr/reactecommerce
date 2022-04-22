import React from 'react';
import NavBar from './NavBar'
import Carousel from './CarouselContent';
import Shopping from './Shopping'

import './index.css'
import Sidebar from './Sidebar';

function Home() {
    return(
        <React.Fragment>
            <NavBar />
            <Carousel />
            <Sidebar />
            <div className="Subtitle">
                <h1>products</h1>
            </div>
            <Shopping />
        </React.Fragment>
    )
}
export default Home;