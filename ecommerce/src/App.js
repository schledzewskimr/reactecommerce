import React,{Component} from 'react';
import NavBar from './NavBar'
import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import Shopping from './Shopping';
import './index.css'
import Sidebar from './Sidebar'
import CarouselContent from './CarouselContent'

export default class App extends Component {
    render() {
        const SideBar = props => {
            return (
                <>
                    <Container fluid>
                        <Row>
                            <Col xs={2} id="sidebar-wrapper">      
                                <Sidebar />
                            </Col>
                            <Col  xs={10} id="page-content-wrapper">
                                this is a test
                            </Col> 
                        </Row>
                    </Container>
                </>
                );
        };
        return(
            <React.Fragment>
                <NavBar />
                <CarouselContent />
                <Shopping />
                <SideBar />
            </React.Fragment>
        )
    }
}