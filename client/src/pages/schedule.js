import React from "react";
import NavItems from "../components/NavItems";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import SocialMedia from "../components/SocialMedia";
import { InlineWidget } from "react-calendly";

function Schedule() {

    return (
        <>
            <NavItems index={5} />
            <Container>
                <Row className="justify-content-center">
                    <Col>
                        <SocialMedia />
                    </Col>
                    <Col>
                        <InlineWidget url="https://calendly.com/yourspacemaderight" />
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Schedule