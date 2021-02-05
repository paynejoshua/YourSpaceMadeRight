import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav"

function NavItems() {
    const [selected, setSelected] = useState("")

    function tabNav(here) {
        
        setSelected(here)
    }

    console.log(selected)

    return (
        <Nav variant="pills" defaultActiveKey={`/${selected}`}>
            <Nav.Item>
                <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/about" eventKey="about" onClick={() => tabNav("about")}>About Me</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/blog" eventKey="blog">Blog</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/applause" eventKey="applause">Applause</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/contact" eventKey="contact">Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link
                    href="/schedule" eventKey="schedule">Schedule
                        </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/services" eventKey="services">Services</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default NavItems