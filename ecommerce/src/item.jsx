import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button} from 'react-bootstrap';
import './index.css';


export default class Item extends Component {
    
    state = {
        item: this.props.item,
        quantity: this.props.item.quantity,
    };
    render() {
        return (
                <div className = "ItemCards">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={this.state.item.src} />
                        <Card.Body>
                            <Card.Title>{this.state.item.itemName}</Card.Title>
                            <Card.Text>
                            ${this.state.item.price}.99
                            </Card.Text>
                            <Button variant="dark"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></Button>
                            <Card.Text>
                                in cart: {this.state.quantity}
                            </Card.Text>
                        </Card.Body>
                        </Card>
                </div>
        )
    }
}