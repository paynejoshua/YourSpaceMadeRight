import React from "react";
import NavItems from "../components/NavItems";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import SocialMedia from "../components/SocialMedia"

function Services() {

    return (
        <div className="servicesBG">

            <NavItems index={6} />
            <Container className="mt-5">
                <Row className="justify-content-between">





                    <Col xs={12} xl={2} className="mt-5">
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Some text here</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} xl={2} className="mt-5">
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Some text here</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} xl={2} className="mt-5">
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Some text here</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <SocialMedia isVertical={true} />

        </div>
    )
}

export default Services