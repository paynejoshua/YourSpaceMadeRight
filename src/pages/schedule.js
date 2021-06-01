import React from "react";
import NavItems from "../components/NavItems";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import SocialMedia from "../components/SocialMedia";
import { InlineWidget } from "react-calendly";

function Schedule() {

    return (
        <div className="mainBG">
            <NavItems index={6} />
            <Container className="mt-5">
                <Row>
                    <Col lg={3}>
                    <SocialMedia isVertical={true} />
                    </Col>
                    <Col lg={6}>
                       
                        <InlineWidget url="https://calendly.com/yourspacemaderight"/>
                       
                    </Col>
                </Row>
            </Container>
     </div>
    )
}

export default Schedule