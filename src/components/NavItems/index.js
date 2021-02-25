import React from "react";
import Nav from "react-bootstrap/Nav";
import NavBar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function NavItems(props) {
    
    function getClassName(index){
        return index === props.index ? "active" : ""
    }

    return (
        
            <NavBar className="justify-content-center">
            <Nav variant="pills">
            <Nav.Item style={{margin: ".5rem"}}>
                <Nav.Link href="/home" className={getClassName(0)}>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item style={{margin: ".5rem"}}>
                <Nav.Link href="/about" className={getClassName(1)}>About Me</Nav.Link>
            </Nav.Item>
            <Nav.Item style={{margin: ".5rem"}}>
                <Nav.Link href="/blog" className={getClassName(2)}>Blog</Nav.Link>
            </Nav.Item>
            <Nav.Item style={{margin: ".5rem"}}>
                <Nav.Link href="/applause" className={getClassName(3)}>Applause</Nav.Link>
            </Nav.Item>
            <Nav.Item style={{margin: ".5rem"}}>
                <Nav.Link href="/contact" className={getClassName(4)}>Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item style={{margin: ".5rem"}}>
                <Nav.Link
                    href="/schedule" className={getClassName(5)}>Schedule
                        </Nav.Link>
            </Nav.Item>
            <Nav.Item style={{margin: ".5rem"}}>
                <Nav.Link href="/services" className={getClassName(6)}>Services</Nav.Link>
            </Nav.Item>
        </Nav>
        
        </NavBar>
        
    )
}

export default NavItems