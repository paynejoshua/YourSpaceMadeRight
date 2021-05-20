import React from "react";
import NavItems from "../components/NavItems";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import SocialMedia from "../components/SocialMedia";
import ServiceOptions from "../components/ServiceOptions";

function Services() {

    return (
        <div className="mainBG">
            <NavItems index={6} />
            <Container className="mt-5">
                <Row className="justify-content-between">

                    {ServiceOptions.map(item =>(
                        <Col xs={12} md={6} lg={6} xl={2} className="mt-5" key={item.title}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>                                    
                                    {item.description}
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>
                    ))}

                    
                    
                </Row>
            </Container>
            <SocialMedia isVertical={true} />
        </div>
    )
}

export default Services