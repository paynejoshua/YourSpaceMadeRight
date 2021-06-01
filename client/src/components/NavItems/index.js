import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import NavBar from "react-bootstrap/Navbar";
import { FaBars } from "react-icons/fa";
import Dropdown from "react-bootstrap/Dropdown"

function NavItems(props) {

    const [showBars, setShowBars] = useState(false)
    const [windowWidth, setwindowWidth] = useState(window.innerWidth)

    const handleResize = () => {
        setwindowWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)


        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    function getClassName(index) {
        return index === props.index ? "active" : ""
    }


    return (

       <>
                {windowWidth <= 768
                    ? 
                        <Dropdown>
                            <Dropdown.Toggle variant="black" className="transparent" id="dropdown-basic">
                            <FaBars size="2rem" />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="/home" className={getClassName(0)}>Home</Dropdown.Item>
                                <Dropdown.Item href="/about" className={getClassName(1)}>About Me</Dropdown.Item>
                                <Dropdown.Item href="/services" className={getClassName(2)}>Services</Dropdown.Item>
                                <Dropdown.Item href="/blog" className={getClassName(3)}>Blog</Dropdown.Item>
                                <Dropdown.Item href="/applause" className={getClassName(4)}>Applause</Dropdown.Item>
                                <Dropdown.Item href="/contact" className={getClassName(5)}>Inquiry</Dropdown.Item>
                                <Dropdown.Item href="/schedule" className={getClassName(6)}>Schedule</Dropdown.Item>
                                
                            </Dropdown.Menu>
                        </Dropdown>
                    

                    :  <NavBar className="justify-content-center">

                    <Nav variant="pills">
                        <Nav.Item style={{ margin: ".5rem" }}>
                            <Nav.Link href="/home" className={getClassName(0)}>Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item style={{ margin: ".5rem" }}>
                            <Nav.Link href="/about" className={getClassName(1)}>About Me</Nav.Link>
                        </Nav.Item>
                        <Nav.Item style={{ margin: ".5rem" }}>
                            <Nav.Link href="/services" className={getClassName(2)}>Services</Nav.Link>
                        </Nav.Item>
                        <Nav.Item style={{ margin: ".5rem" }}>
                            <Nav.Link href="/blog" className={getClassName(3)}>Blog</Nav.Link>
                        </Nav.Item>
                        <Nav.Item style={{ margin: ".5rem" }}>
                            <Nav.Link href="/applause" className={getClassName(4)}>Applause</Nav.Link>
                        </Nav.Item>
                        <Nav.Item style={{ margin: ".5rem" }}>
                            <Nav.Link href="/contact" className={getClassName(5)}>Inquiry</Nav.Link>
                        </Nav.Item>
                        <Nav.Item style={{ margin: ".5rem" }}>
                            <Nav.Link
                                href="/schedule" className={getClassName(6)}>Schedule
                                </Nav.Link>
                        </Nav.Item>
                       
                    
                    </Nav>

                    </NavBar>
                    }

                    </>

            



    )
}

export default NavItems