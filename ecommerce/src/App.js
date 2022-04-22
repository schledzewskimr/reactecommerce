import React from 'react';
import Cart from './Cart';
import About from './About';
import Home from './Home.jsx';
import './index.css';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
        return(
            <React.Fragment>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/cart" element={<Cart/>} />
                </Routes>
            </React.Fragment>
        )
}
export default App