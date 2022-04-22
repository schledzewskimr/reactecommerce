import React from 'react';
import NavBar from './NavBar'
import FillForm from './FillForm'
import './index.css'

function About() {
    return(
        <React.Fragment>
            <NavBar />
            <div className="EmailInfo">
                <div className="EmailAbout">
                    <h3>contact us, we won't sell your information</h3>
                    <hr></hr>
                    <p>this isn't actually a real company.</p>
                    <p>also i'm not even sure about the backend stuff yet, so i can't even do anything with your email. it's essentially a wasted form. sure does look good though.</p>
                    <p>feel free to contact me on social media.</p>
                </div>
                <div className="ContactForm">
                    <FillForm />
                </div>
            </div>
        </React.Fragment>
    )
}
export default About;