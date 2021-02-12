import React from "react";
import NavItems from "../components/NavItems";
import ProfilePic from "../assets/headshot1.jpg";
import SocialMedia from "../components/SocialMedia";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"


function Blog() {

    return (
        <>
            <NavItems index={2} />

            <Container>
                <Row>
                    <Col>
                        <SocialMedia />
                    </Col>

                    <Col>    
                        <img src={ProfilePic} style={{ width: "18rem" }} />
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Blog