import React from "react";
import Nav from "react-bootstrap/Nav"
import NavBar from "react-bootstrap/Navbar"

function NavItems(props) {
    
    function getClassName(index){
        return index === props.index ? "active" : ""
    }

    return (
        <NavBar bg="light">
            <Nav variant="pills" >
            <Nav.Item>
                <Nav.Link href="/home" className={getClassName(0)}>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/about" className={getClassName(1)}>About Me</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/blog" className={getClassName(2)}>Blog</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/applause" className={getClassName(3)}>Applause</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/contact" className={getClassName(4)}>Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link
                    href="/schedule" className={getClassName(5)}>Schedule
                        </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/services" className={getClassName(6)}>Services</Nav.Link>
            </Nav.Item>
        </Nav>
        </NavBar>
        
    )
}

export default NavItems