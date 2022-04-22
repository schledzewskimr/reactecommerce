import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from 'react-bootstrap';
import "./index.css";

function CarouselContent() {
    return (
        <div className="CarouselContent">
    <Carousel variant="dark">
        <Carousel.Item interval={3000}>
            <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/2582928/pexels-photo-2582928.jpeg?auto=compress&cs=tinysrgb&w=900&h=900&dpr=2"
            alt="First slide"
            />
            <Carousel.Caption>
            <h5>red hot deals</h5>
            <p>use promo code THISBEATSTHEEXAM for 50% off your order!</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/1342460/pexels-photo-1342460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Second slide"
            />
            <Carousel.Caption>
            <h5>can't afford a curved monitor?</h5>
            <p>put two monitors side by side.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=900&h=900&dpr=2"
            alt="Third slide"
            />
            <Carousel.Caption>
            <h5>this isn't a real website</h5>
            <p>it just looks really good.</p>
            </Carousel.Caption>
        </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CarouselContent;
