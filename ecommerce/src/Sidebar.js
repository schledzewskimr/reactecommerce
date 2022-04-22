import React from "react";
import {Nav,Button} from "react-bootstrap";
import './index.css';
import Shopping from "./Shopping";

const Sidebar = props => {
    return (
        <>
            <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
                activeKey="/home"
                onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
                <div className="sidebar-sticky"></div>
                <Nav.Item>
                    <h3 className="SidebarTitle">filter items</h3>
                </Nav.Item>
                <hr></hr>
                <Button variant="dark" className="sidebar-btn" >
                    <h4 className="ItemFilters"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg></h4>
                </Button>
                <Button variant="dark" className="sidebar-btn">
                    <h4 className="ItemFilters"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><circle cx="12" cy="14" r="4"></circle><line x1="12" y1="6" x2="12.01" y2="6"></line></svg></h4>  
                </Button>
                <Button variant="dark" className="sidebar-btn">
                    <h4 className="ItemFilters"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#343a40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></h4>
                </Button>
                <Button variant="dark" className="sidebar-btn">
                    <h4 className="ItemFilters"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg></h4>
                </Button>
            </Nav>
        </>
        );
};

export default Sidebar